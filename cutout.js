// Прибирає світлий фон навколо пляшок на картках товарів (працює на льоту, файли картинок не змінюються).
(function () {
  var T1 = 16, T2 = 52;            // поріг повністю прозорого / повністю видимого
  var cache = new Map();           // src -> dataURL з прозорим фоном (або null, якщо не вдалося)
  var pending = new Map();

  function process(src) {
    if (pending.has(src)) return pending.get(src);
    var p = new Promise(function (resolve) {
      var im = new Image();
          im.onload = function () {
        try {
          var w = im.naturalWidth, h = im.naturalHeight;
          var c = document.createElement('canvas'); c.width = w; c.height = h;
          var x = c.getContext('2d', { willReadFrequently: true });
          x.drawImage(im, 0, 0);
          var img = x.getImageData(0, 0, w, h), a = img.data;
          var orig = new Uint8ClampedArray(a); // копія оригіналу для відновлення внутрішньої частини пляшки
          // колір фону — середнє по чотирьох кутах
          var cs = [0, (w - 1) * 4, (h - 1) * w * 4, ((h - 1) * w + w - 1) * 4], br = 0, bg = 0, bb = 0;
          cs.forEach(function (i) { br += a[i]; bg += a[i + 1]; bb += a[i + 2]; });
          br /= 4; bg /= 4; bb /= 4;
          function dist(i) { return Math.max(Math.abs(a[i] - br), Math.abs(a[i + 1] - bg), Math.abs(a[i + 2] - bb)); }
          var seen = new Uint8Array(w * h), stack = [];
          function seed(px) { if (!seen[px] && dist(px * 4) <= T2) { seen[px] = 1; stack.push(px); } }
          for (var i = 0; i < w; i++) { seed(i); seed((h - 1) * w + i); }
          for (var j = 0; j < h; j++) { seed(j * w); seed(j * w + w - 1); }
          while (stack.length) {
            var px = stack.pop(), cx = px % w, cy = (px / w) | 0;
            if (cx > 0) seed(px - 1);
            if (cx < w - 1) seed(px + 1);
            if (cy > 0) seed(px - w);
            if (cy < h - 1) seed(px + w);
          }
          for (var k = 0; k < seen.length; k++) {
            if (!seen[k]) continue;
            var o = k * 4, d = dist(o);
            var al = d <= T1 ? 0 : (d - T1) / (T2 - T1);
            if (al > 0) { // прибираємо білий «ореол» на краях
              a[o]   = Math.max(0, Math.min(255, (a[o]   - br * (1 - al)) / al));
              a[o+1] = Math.max(0, Math.min(255, (a[o+1] - bg * (1 - al)) / al));
              a[o+2] = Math.max(0, Math.min(255, (a[o+2] - bb * (1 - al)) / al));
            }
            a[o + 3] = Math.round(255 * al);
          }
          // Контур пляшки знайдено, але прозорий корпус міг «з'єднатися» з фоном і зникнути.
          // Пляшка симетрична, тому знаходимо її вісь і в кожному рядку беремо
          // більшу з двох півширин (ліву чи праву): так вирізи біля етикетки зникають,
          // а форма (шийка, плечі) лишається точною. Внутрішність заповнюємо оригіналом.
          var mn = new Int32Array(h).fill(-1), mx = new Int32Array(h).fill(-1), mids = [];
          for (var yy = 0; yy < h; yy++) {
            for (var xx = 0; xx < w; xx++) {
              if (a[(yy * w + xx) * 4 + 3] > 40) { if (mn[yy] < 0) mn[yy] = xx; mx[yy] = xx; }
            }
            if (mn[yy] >= 0) mids.push((mn[yy] + mx[yy]) / 2);
          }
          if (mids.length) {
            mids.sort(function (p, q) { return p - q; });
            var cx = mids[mids.length >> 1];
            var hw = new Float32Array(h).fill(-1);
            for (var y1 = 0; y1 < h; y1++) {
              if (mn[y1] >= 0) hw[y1] = Math.max(cx - mn[y1], mx[y1] - cx);
            }
            for (var y3 = 0; y3 < h; y3++) {
              if (hw[y3] < 0) continue;
              var m = hw[y3];
              for (var dy = -2; dy <= 2; dy++) { // прибираємо дрібні зубці
                var yn = y3 + dy;
                if (yn >= 0 && yn < h && hw[yn] > m && hw[yn] - m < 6) m = hw[yn];
              }
              var xl = Math.max(0, Math.ceil(cx - m)), xr = Math.min(w - 1, Math.floor(cx + m));
              for (var x3 = xl; x3 <= xr; x3++) {
                var q = (y3 * w + x3) * 4;
                var r0 = orig[q], g0 = orig[q + 1], b0 = orig[q + 2];
                if (Math.min(r0, g0, b0) > 200) { r0 *= 0.90; g0 *= 0.95; } // трохи охолоджуємо сліпучо-білий
                a[q] = r0; a[q + 1] = g0; a[q + 2] = b0;
                a[q + 3] = (x3 === xl || x3 === xr) ? 150 : 255; // м'який край
              }
            }
          }
          x.putImageData(img, 0, 0);
          resolve(c.toDataURL('image/png'));
        } catch (e) { resolve(null); }
      };
      im.onerror = function () { resolve(null); };
      im.src = src;
    });
    pending.set(src, p);
    p.then(function (r) { cache.set(src, r); });
    return p;
  }

  function apply(img) {
    var orig = img.dataset.orig || img.getAttribute('src');
    if (!orig || /^data:/.test(orig)) { img.dataset.cut = '1'; return; }
    img.dataset.orig = orig;
    if (cache.has(orig)) {
      var r = cache.get(orig);
      if (r) img.src = r;
      img.dataset.cut = '1';
    } else {
      process(orig).then(function (r) {
        if (r && img.dataset.orig === orig) img.src = r;
        img.dataset.cut = '1';
      });
    }
  }

  function scan(root) {
    (root.querySelectorAll ? root : document).querySelectorAll('.plate img:not([data-cut])').forEach(apply);
  }

  function start() {
    var app = document.getElementById('app') || document.body;
    scan(document);
    new MutationObserver(function () { scan(document); }).observe(app, { childList: true, subtree: true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
