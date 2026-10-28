/* Каталог товарів винесено в products.js */
const CATS={drink:'Питна вода',min:'Мінералізована вода',accessories:'Корисні товари до води'};
const S={page:'home',mode:'login',user:null,cat:'drink',cart:{},pickQty:{},open:false,order:null,pay:'card',pendingCheckout:null,accessoryInterest:[]};
try{const u=localStorage.getItem('scw_user');if(u){S.user=JSON.parse(u);S.page='shop'}}catch(e){}
const $=s=>document.querySelector(s);
const total=()=>Object.entries(S.cart).reduce((a,[id,q])=>a+PRODUCTS.find(x=>x.id==id).p*q,0);
const count=()=>Object.values(S.cart).reduce((a,b)=>a+b,0);
const go=p=>{S.page=p;S.open=false;render();scrollTo(0,0)};
const bottle=(l,cat)=>{const own=BIMG[l];return `<div class="relative h-44 flex items-end justify-center rounded-xl plate" style="background:#fff"><img src="${own||BOTTLE}" alt="SHAR CRYSTAL WATER ${l} л" style="height:${own?({5:152,6:157,10:162,19:172}[l]):Math.round(108+Math.min(l,19)*3.3)}px;mix-blend-mode:multiply"><span class="absolute right-1 bottom-1 text-xs font-bold text-white rounded-full px-2 py-0.5 ${cat=='min'?'bg-[#0b2a54]':'bg-sky-500'}">${l} л</span></div>`};
const header=()=>`<header class="sticky top-0 z-30 glass border-b border-sky-100"><div class="max-w-5xl mx-auto flex items-center justify-between p-3">
<div class="flex items-center gap-2 cursor-pointer" onclick="go('shop')"><img src="${DROP}" alt="" class="h-9"><b class="brand tracking-wide leading-tight">SHAR <span class="text-sky-500 font-semibold">CRYSTAL WATER</span></b></div>
<div class="flex items-center gap-3 text-sm">${S.user?`<span class="hidden sm:inline text-sky-800">${S.user.name}</span>`:''}
<button onclick="toggleTheme()" class="text-lg" title="Тема">${S.dark?'☀️':'🌙'}</button>
<button class="text-sky-700 font-semibold" onclick="S.tab='orders';go('cab')">👤<span class="hidden sm:inline"> Кабінет</span></button>
<button id="cartBtn" class="relative btn !py-2" onclick="S.open=true;render()">Кошик <span id="badge" class="ml-1 bg-white text-sky-700 rounded-full px-2 text-xs">${count()}</span></button>
${S.user?`<button class="text-sky-700 underline" onclick="logout()">Вийти</button>`:`<button class="text-sky-700 underline font-semibold" onclick="go('auth')">Увійти</button>`}</div></div></header>`;

function home(){
 let b='';for(let i=0;i<14;i++){const s=8+Math.random()*26;b+=`<i class="bub" style="left:${Math.random()*100}%;width:${s}px;height:${s}px;animation-duration:${7+Math.random()*9}s;animation-delay:${-Math.random()*12}s"></i>`}
 const wv=`<svg class="wave" viewBox="0 0 1200 140" preserveAspectRatio="none"><path d="M0 70Q150 10 300 70T600 70T900 70T1200 70V140H0Z" fill="#fff"/></svg>`;
 return `<div class="hero flex items-center justify-center text-center text-white px-4"><video autoplay muted loop playsinline src="${VID}" class="absolute inset-0 w-full h-full object-cover"></video><div class="absolute inset-0 ov" style="background:linear-gradient(180deg,#0369a166,#0c4a6e99)"></div>${b}
 <div class="relative z-10 w-full max-w-lg rounded-[2rem] border border-white/30 bg-white/10 backdrop-blur-xl shadow-2xl px-6 py-10 sm:px-12" style="animation:fu .9s both">
 <img src="${DROPW}" alt="" class="mx-auto h-28 sm:h-36" style="animation:fl 4s ease-in-out infinite;filter:drop-shadow(0 0 24px #7dd3fc)">
 <h1 class="mt-5 leading-none"><span class="block text-6xl sm:text-8xl font-black tracking-tight" style="text-shadow:0 4px 24px #0c4a6e88">SHAR</span>
 <span class="block mt-2 text-xl sm:text-3xl font-light" style="letter-spacing:.55em;margin-right:-.55em">CRYSTAL</span>
 <span class="block mt-1 text-base sm:text-xl font-semibold text-sky-200" style="letter-spacing:.8em;margin-right:-.8em">WATER</span></h1>
 <div class="mx-auto my-6 h-px w-24 bg-gradient-to-r from-transparent via-white to-transparent"></div>
 <p class="text-sky-50 sm:text-lg">Чиста питна та мінералізована вода з доставкою до вашого відділення «Нової пошти»</p>
 <button class="shine mt-7 relative overflow-hidden bg-white text-sky-700 font-bold rounded-full px-10 py-3.5 shadow-xl hover:scale-105 transition" onclick="go('shop')">Замовити воду →</button>
 <div class="mt-7 flex flex-wrap justify-center gap-2 text-xs sm:text-sm"><span class="rounded-full bg-white/15 px-3 py-1">💧 5 – 19 л</span><span class="rounded-full bg-white/15 px-3 py-1">🚚 Нова пошта</span><span class="rounded-full bg-white/15 px-3 py-1">🔒 Безпечний кабінет</span></div><div class="mt-6 border-t border-white/25 pt-4 text-sm text-white"><p class="font-bold text-base mb-2">📞 Для зв’язку</p><p>Телефон: <a href="tel:+380978153760" class="underline underline-offset-2 hover:text-sky-200">+380 97 815 37 60</a></p><p class="mt-1">Email: <a href="mailto:sharg8888@gmail.com" class="underline underline-offset-2 hover:text-sky-200">sharg8888@gmail.com</a></p><div class="mt-4 flex flex-wrap items-center justify-center gap-3" aria-label="Соціальні мережі"><a href="https://www.instagram.com/water_shargorod?rpxt=MWNkMmxmbHVjbGtvNg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram SHAR CRYSTAL WATER" class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-semibold transition hover:bg-white/25"><svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg><span>Instagram</span></a><a href="https://www.facebook.com/share/1Dmwg3xtCg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook SHAR CRYSTAL WATER" class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-semibold transition hover:bg-white/25"><svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5v1.9H7v3.1h2.8v8z"></path></svg><span>Facebook</span></a></div></div></div></div>`}

function auth(){
 const reg=S.mode=='reg';
 return `<div class="hero flex items-center justify-center p-4"><video autoplay muted loop playsinline src="${VID}" class="absolute inset-0 w-full h-full object-cover"></video><div class="absolute inset-0" style="background:linear-gradient(180deg,#0369a166,#0c4a6e99)"></div><form onsubmit="doAuth(event)" class="relative z-10 glass rounded-3xl p-7 w-full max-w-sm shadow-2xl space-y-3">
 <img src="${DROP}" alt="" class="h-14 mx-auto"><h2 class="text-2xl font-bold text-sky-800 text-center">${reg?'Реєстрація':'Вхід'}</h2>
 ${S.pendingAdd?'<p class="text-center text-sm text-sky-700 bg-sky-50 rounded-xl px-3 py-2">🛒 Увійдіть або зареєструйтесь, щоб додати товар у кошик</p>':''}
 ${reg?'<input name="name" required placeholder="Ім’я та прізвище" class="inp">':''}
 <input name="email" type="email" required placeholder="Email" class="inp">
 <input name="pass" type="password" required minlength="6" placeholder="Пароль (від 6 символів)" class="inp">
 <button class="btn w-full">${reg?'Створити акаунт':'Увійти'}</button>
 <p class="text-center text-sm text-sky-700 cursor-pointer" onclick="S.mode='${reg?'login':'reg'}';render()">${reg?'Вже є акаунт? Увійти':'Немає акаунта? Зареєструватись'}</p>
 <p class="text-center text-sm text-sky-600 cursor-pointer" onclick="${S.pendingAdd?"S.pendingAdd=null;go('shop')":"go('home')"}">${S.pendingAdd?'← Назад до магазину':'← На головну'}</p></form></div>`}

const IC={home:'<path d="M3 11l9-8 9 8v10H3z"/>',search:'<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',heart:'<path d="M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.5A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z"/>',cart:'<path d="M3 4h3l2.5 11h10L21 7H7"/><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>'};
const ico=(k,c='w-6 h-6',f='none')=>`<svg viewBox="0 0 24 24" class="${c}" fill="${f}" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${IC[k]}</svg>`;
Object.assign(S,{fav:{},view:'shop',q:'',showSearch:false,prof:false});
const BADGE={d19:['Хіт продажів','bg-sky-600'],d5:['Новинка','bg-emerald-500'],m19:['Акція','bg-rose-500']},OLD={m19:280,d10:140};
function cards(){
 const q=S.q.trim().toLowerCase();
 if(S.view!=='fav'&&S.cat==='accessories')return accessoryCards(q);
 const it=PRODUCTS.filter(p=>(S.view=='fav'?S.fav[p.id]:p.cat==S.cat)&&(!q||`${CATS[p.cat]} ${p.l} л`.toLowerCase().includes(q)));
 if(!it.length)return `<div class="col-span-full empty-state"><video class="empty-mascot" autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="mascot-right.webm" type="video/webm"></video><p>${S.view==='fav'?'Тут пусто, давай це виправимо':'Тут пусто, давай це виправимо'}</p><span class="text-sm mt-1">${S.view==='fav'?'Додай улюблені товари сердечком 💙':'Спробуй інший запит або переглянь товари 💧'}</span></div>`;
 return it.map(p=>{const b=BADGE[p.id],o=OLD[p.id];return `<div class="relative bg-white rounded-2xl p-3 shadow-sm border border-sky-100 hover:shadow-lg transition">
 ${b?`<span class="absolute left-3 top-3 text-xs text-white px-2 py-0.5 rounded-md ${b[1]}">${b[0]}</span>`:''}
 <button class="absolute right-3 top-3 ${S.fav[p.id]?'text-rose-500':'text-slate-400'}" onclick="S.fav['${p.id}']=!S.fav['${p.id}'];render()">${ico('heart','w-6 h-6',S.fav[p.id]?'currentColor':'none')}</button>
 <div class="pt-6">${bottle(p.l,p.cat)}</div>
 <h3 class="font-semibold text-sm mt-2">${CATS[p.cat]} ${p.l} л</h3>
 <div class="flex items-baseline gap-2 mb-2"><b class="text-sky-700">${p.p} ₴</b>${o?`<s class="text-xs text-slate-400">${o} ₴</s>`:''}</div>
 <div class="flex items-center gap-2 mt-3"><div class="flex items-center rounded-xl border border-sky-200 overflow-hidden"><button aria-label="Зменшити кількість" class="w-9 h-9 bg-sky-50 font-bold" onclick="pickQty('${p.id}',-1)">−</button><span class="min-w-8 text-center font-semibold" id="pick-${p.id}">${S.pickQty[p.id]||1}</span><button aria-label="Збільшити кількість" class="w-9 h-9 bg-sky-50 font-bold" onclick="pickQty('${p.id}',1)">+</button></div><button class="btn flex-1 !py-2 text-sm flex items-center justify-center gap-2" onclick="addMany('${p.id}',this)">${ico('cart','w-4 h-4')} В кошик</button></div></div>`}).join('')}
function accessoryCards(q=''){
 const items=[['clover-dispenser','Водороздавальник Clover','Для бутлів з водою',4,'Зручний розлив води'],['temperature-cooler','Кулер для води з регулятором температури','Гаряча та холодна вода',5,'Кулер із двома кранами та регулюванням температури'],['salt-tablets-aqua-pro','Сольові таблетки AQUA PRO, 25 кг','Мішок 25 кг',6,'Таблетована сіль для систем пом’якшення води. Допомагає зменшувати утворення вапняного нальоту та регенерувати іонообмінні матеріали.'],['handle-yellow','Ручка для бутлів 5, 6 і 10 л — жовта','Лише для питної води · 5 л / 6 л / 10 л',8,'Жовта ручка призначена тільки для бутлів із питною водою. Ціна: 10 грн за штуку.'],['handle-blue','Ручка для бутлів 5, 6 і 10 л — синя','Лише для мінералізованої води · 5 л / 6 л / 10 л',9,'Синя ручка призначена тільки для бутлів із мінералізованою водою. Ціна: 10 грн за штуку.'],['cap-yellow','Кришка для бутлів 5, 6 і 10 л — жовта','Лише для питної води · 5 л / 6 л / 10 л',10,'Жовта кришка призначена тільки для бутлів із питною водою. Ціна: 5 грн за штуку.'],['cap-blue','Кришка для бутлів 5, 6 і 10 л — синя','Лише для мінералізованої води · 5 л / 6 л / 10 л',11,'Синя кришка призначена тільки для бутлів із мінералізованою водою. Ціна: 5 грн за штуку.']].filter(x=>(x[1]+' '+x[2]+' '+x[4]).toLowerCase().includes(q));
 if(!items.length)return '<p class="col-span-full text-center text-sky-600 py-10">Нічого не знайдено</p>';
 return items.map(([id,name,desc,photo,detail])=>{const selected=(S.accessoryInterest||[]).includes(id);return `<div class="bg-white rounded-2xl p-3 shadow-sm border border-sky-100 hover:shadow-lg transition"><img src="${photo===4?CLOVER_IMG:(photo===5?COOLER_IMG:(photo===6?SALT_TABLETS_IMG:(photo===7?PUMP_IMG:(photo===8?HANDLE_YELLOW_IMG:(photo===9?HANDLE_BLUE_IMG:(photo===10?CAP_YELLOW_IMG:(photo===11?CAP_BLUE_IMG:ACCESSORY_PHOTOS[photo])))))))}" alt="${name}" class="w-full h-36 object-contain rounded-xl mb-3"><h3 class="font-semibold text-sm text-sky-900">${name}</h3><p class="text-xs text-slate-500 mt-1">${desc}</p><p class="text-xs text-slate-600 mt-2">${detail}</p><p class="text-sm font-semibold text-sky-700 mt-2">${id==='clover-dispenser'?'750 ₴':(id==='temperature-cooler'?'5 980 ₴':(id==='salt-tablets-aqua-pro'?'780 ₴':(id==='manual-water-pump'?'260 ₴':(['handle-yellow','handle-blue'].includes(id)?'10 ₴':(['cap-yellow','cap-blue'].includes(id)?'5 ₴':'Ціну уточнюємо')))))}</p>${['clover-dispenser','temperature-cooler','salt-tablets-aqua-pro','manual-water-pump','handle-yellow','handle-blue','cap-yellow','cap-blue'].includes(id)?`<div class="flex items-center gap-2 mt-3"><div class="flex items-center rounded-xl border border-sky-200 overflow-hidden"><button aria-label="Зменшити кількість" class="w-9 h-9 bg-sky-50 font-bold" onclick="pickQty('${id}',-1)">−</button><span class="min-w-8 text-center font-semibold">${S.pickQty[id]||1}</span><button aria-label="Збільшити кількість" class="w-9 h-9 bg-sky-50 font-bold" onclick="pickQty('${id}',1)">+</button></div><button class="btn flex-1 !py-2 text-sm" onclick="addMany('${id}',this)">Додати в кошик</button></div>`:`<button class="${selected?'bg-sky-100 text-sky-800 border border-sky-300':'btn'} w-full !py-2 text-sm mt-3 rounded-xl" onclick="toggleAccessoryCard('${id}')">${selected?'Обрано ✓':'Додати до інтересів замовлення'}</button>`}</div>`}).join('')}
function toggleAccessoryCard(id){const a=S.accessoryInterest||(S.accessoryInterest=[]);const i=a.indexOf(id);if(i>=0)a.splice(i,1);else a.push(id);render()}
function nav(){
 const T=[['shop','home','Магазин',S.page=='shop'&&S.view=='shop'&&!S.showSearch],['search','search','Пошук',S.page=='shop'&&S.showSearch],['fav','heart','Обране',S.page=='shop'&&S.view=='fav'],['cart','cart','Кошик',S.open],['prof','user','Кабінет',S.page=='cab']];
 return `<nav class="fixed left-0 right-0 bottom-0 z-30 px-3" style="padding-bottom:calc(env(safe-area-inset-bottom,0px) + 10px)"><div class="max-w-md mx-auto bg-white rounded-2xl shadow-2xl border border-sky-100 flex justify-around p-2">${T.map(([k,i,l,a])=>`<button onclick="navTo('${k}')" class="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl text-[11px] font-semibold ${a?'bg-sky-100 text-sky-700':'text-slate-500'}">${ico(i)}${l}${k=='cart'&&count()?`<span class="absolute top-0 right-1 bg-sky-600 text-white rounded-full text-[10px] px-1.5">${count()}</span>`:''}</button>`).join('')}</div></nav>`}
function navTo(k){if(k=='cart')S.open=true;else if(k=='prof')S.page='cab';else{S.page='shop';if(k=='shop'){S.view='shop';S.showSearch=false;S.q=''}else if(k=='search')S.showSearch=!S.showSearch;else{S.view='fav';S.showSearch=false}}render()}
function profile(){return !S.prof?'':`<div class="fixed inset-0 z-40 bg-black/40" onclick="S.prof=false;render()"></div><div class="fixed z-50 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-6 w-[90%] max-w-xs text-center shadow-2xl">
 <img src="${DROP}" class="h-14 mx-auto" alt=""><h3 class="font-bold text-sky-800 mt-2">${S.user.name}</h3><p class="text-sm text-sky-600">${S.user.email}</p>
 <button class="btn w-full mt-4" onclick="S.prof=false;S.tab='orders';go('cab')">🧾 Історія покупок</button><button class="w-full mt-2 text-sky-700 underline" onclick="S.prof=false;logout()">Вийти</button></div>`}
function shop(){
 const tabs=S.view=='shop'?`<div class="flex gap-2 my-4 overflow-x-auto">${Object.entries(CATS).map(([k,v])=>`<button onclick="S.cat='${k}';render()" class="whitespace-nowrap px-4 py-2 rounded-full font-semibold ${S.cat==k?'bg-sky-600 text-white':'bg-white text-sky-700 border border-sky-200'}">${v}</button>`).join('')}</div>`:'<h2 class="text-xl font-bold text-sky-800 my-4">Обране</h2>';
 const sr=S.showSearch?`<input id="q" class="inp mt-4" placeholder="Пошук товару, напр. 19 л" value="${S.q}" oninput="S.q=this.value;$('#grid').innerHTML=cards()">`:'';
 return header()+`<main class="max-w-5xl mx-auto p-4 pb-28">
 <section class="mb-5 rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-sky-100 p-5 sm:p-6 shadow-sm">
  <div class="flex items-start gap-3"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-600 text-2xl text-white">💧</div><div><h2 class="text-xl sm:text-2xl font-extrabold text-sky-900">Наберіть воду самостійно з автомата</h2><p class="mt-2 text-sm sm:text-base leading-relaxed text-slate-700">Приїжджайте до нас і набирайте питну воду у будь-яку свою тару — скільки вам потрібно. Водомат розташований біля входу.</p></div></div>
  <div class="mt-3 flex items-start gap-3 rounded-2xl border border-sky-100 bg-sky-50/90 px-4 py-3 text-sm sm:text-base text-sky-800"><span class="text-lg" aria-hidden="true">🏷️</span><p>Ціни у свою тару: <strong>питна вода — 3,50 грн/л</strong>; <strong>мінералізована вода — 3,00 грн/л</strong>.</p></div>
  <div class="mt-4 grid sm:grid-cols-2 gap-3"><div class="rounded-2xl bg-white/90 p-3 text-sm text-slate-700 border border-sky-100"><p class="font-bold text-sky-900">💳 Зручна оплата</p><p class="mt-1">Можна оплатити банківською карткою або готівкою.</p></div><div class="rounded-2xl bg-white/90 p-3 text-sm text-slate-700 border border-sky-100 flex items-center gap-2"><div class="min-w-0 flex-1"><p class="font-bold text-sky-900">📍 Де нас знайти</p><p class="mt-1">вул. Будівельників, 7, Шаргород, Вінницька область, 23500</p><a class="mt-2 inline-flex font-semibold text-sky-700 underline underline-offset-2 hover:text-sky-900" href="https://www.google.com/maps/place/%D0%9F%D0%B8%D1%82%D0%BD%D0%B0+%D0%B2%D0%BE%D0%B4%D0%B0+%D0%9C%D1%96%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%96%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B0/data=!4m2!3m1!1s0x0:0x1bd888663ee169ed?sa=X&ved=1t:2428&ictx=111" target="_blank" rel="noopener noreferrer">Відкрити адресу в Google ↗</a></div><video class="location-mascot" autoplay muted loop playsinline preload="auto" aria-label="Анімований водомат у куртці"><source src="mascot-left.webm" type="video/webm"></video></div></div>
 </section>
 ${sr}${tabs}<div id="grid" class="grid grid-cols-2 md:grid-cols-3 gap-4">${cards()}</div>
 <footer class="mt-10 mb-5 rounded-3xl bg-gradient-to-br from-sky-700 to-cyan-600 p-6 sm:p-8 text-white shadow-lg">
  <div class="grid sm:grid-cols-2 gap-6">
   <section><h2 class="text-xl font-extrabold mb-3">📞 Для зв’язку</h2>
    <p>Телефон: <a href="tel:+380978153760" class="underline underline-offset-4 hover:text-sky-100">+380 97 815 37 60</a></p>
    <p class="mt-2">Email: <a href="mailto:sharg8888@gmail.com" class="underline underline-offset-4 hover:text-sky-100 break-all">sharg8888@gmail.com</a></p>
    <div class="mt-4 flex flex-wrap gap-3" aria-label="Соціальні мережі">
     <a href="https://www.instagram.com/water_shargorod?rpxt=MWNkMmxmbHVjbGtvNg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram SHAR CRYSTAL WATER" class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-semibold transition hover:bg-white/25"><svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle></svg><span>Instagram</span></a>
     <a href="https://www.facebook.com/share/1Dmwg3xtCg/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook SHAR CRYSTAL WATER" class="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 font-semibold transition hover:bg-white/25"><svg aria-hidden="true" viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.3v3h2.8v8z"/></svg><span>Facebook</span></a>
    </div>
   </section>
   <section><h2 class="text-xl font-extrabold mb-3">🚚 Як отримати замовлення?</h2>
    <p>📍 <b>Самовивіз до дверей</b></p>
    <p class="mt-2">Адресна доставка до дверей у Шаргородській або Мурафській громадах — доплата 100 ₴. </p>
   </section>
  </div><p class="mt-6 border-t border-white/25 pt-4 text-center text-sm text-white/80">SHAR CRYSTAL WATER · Чиста вода поруч</p>
 </footer></main>`+nav()+drawer()+profile()}

function drawer(){
 if(!S.open)return '';
 const rows=Object.entries(S.cart).map(([id,q])=>{const p=PRODUCTS.find(x=>x.id==id);return `<div class="py-3 border-b border-sky-100"><div class="flex items-center justify-between gap-3"><div class="min-w-0"><b>${p.name||`${CATS[p.cat]} ${p.l} л`}</b><div class="text-sm text-sky-600">${p.p} ₴</div></div><div class="flex items-center gap-2 shrink-0"><button class="w-7 h-7 rounded-full bg-sky-100" onclick="qty('${id}',-1)">−</button>${q}<button class="w-7 h-7 rounded-full bg-sky-100" onclick="qty('${id}',1)">+</button></div></div></div>`}).join('');
 return `<div class="fixed inset-0 z-40 bg-black/40" onclick="S.open=false;render()"></div><aside class="fixed right-0 top-0 bottom-0 z-50 w-full max-w-sm bg-white p-5 flex flex-col shadow-2xl">
 <div class="flex justify-between items-center mb-3"><h2 class="text-xl font-bold text-sky-800">Кошик</h2><button onclick="S.open=false;render()" class="text-2xl">×</button></div>
 <div class="flex-1 overflow-auto">${rows||'<div class="empty-state"><video class="empty-mascot" autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="mascot-right.webm" type="video/webm"></video><p>Тут пусто, давай це виправимо</p><span class="text-sm mt-1">Обери водичку — і кошик не сумуватиме 💧</span></div>'}</div>
 <div class="pt-3 text-lg font-bold flex justify-between"><span>Разом</span><span>${total()} ₴</span></div>
 <button class="btn mt-3 ${count()?'':'opacity-40 pointer-events-none'}" onclick="go('checkout')">Оформити замовлення</button></aside>`}

function checkout(){
 return header()+`<main class="max-w-xl mx-auto p-4"><button class="text-sky-700 mb-2" onclick="go('shop')">← До товарів</button>
 <form onsubmit="toPay(event)" class="bg-white rounded-3xl p-6 shadow border border-sky-100 space-y-3">
 <h2 class="text-2xl font-bold text-sky-800">Оформлення замовлення</h2>
 <input name="fio" required placeholder="ПІБ" class="inp" value="${S.user.name||''}">
 <input name="phone" required type="tel" placeholder="Телефон (+380...)" pattern="[+0-9 ()-]{10,}" class="inp">
 <input name="email" type="email" placeholder="Email (необов’язково)" class="inp">
 <label class="block font-semibold text-sky-800">Спосіб доставки</label>
 <select name="delivery" id="deliveryType" class="inp" onchange="toggleDelivery()"><option value="np">Нова пошта — у відділення по Україні</option><option value="local">Місцева доставка до дверей — Шаргородська / Мурафська громада</option><option value="pickup">Самовивіз із магазину — безкоштовно</option></select>
 <div id="npFields" class="rounded-2xl border border-red-100 bg-gradient-to-br from-red-50 via-white to-sky-50 p-4 space-y-3 shadow-sm">
 <div class="flex items-center gap-3"><img src="${NP}" alt="Нова пошта" class="w-12 h-12 rounded-xl bg-white p-2 shadow border border-red-100"><div><h3 class="font-bold text-slate-800 leading-tight">Нова пошта</h3><p class="text-xs text-slate-500">Доставка у відділення по Україні</p></div><span class="ml-auto text-xs font-semibold text-red-600 bg-red-100 rounded-full px-2.5 py-1 whitespace-nowrap">1–3 дні</span></div>
 <input id="npCity" name="city" required placeholder="Місто, область" class="inp"><input id="npBranch" name="branch" required placeholder="Відділення Нової пошти (напр. №5)" class="inp"><p class="text-xs text-slate-500">Доставка здійснюється за тарифами перевізника.</p></div>
 <div id="pickupFields" class="hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-4 space-y-3"><div class="font-bold text-emerald-800">📍 Самовивіз із магазину</div><p class="text-sm text-emerald-700">Після оформлення замовлення відкриється Google Maps із маршрутом до магазину.</p><a href="https://maps.app.goo.gl/E4i312AogYiWkNFw8?g_st=ic" target="_blank" rel="noopener noreferrer" class="inline-flex rounded-xl bg-emerald-600 px-4 py-2 font-semibold text-white">Відкрити адресу магазину на карті</a><p class="text-xs text-emerald-700">Самовивіз без доплати.</p></div><div id="localFields" class="hidden rounded-2xl border border-sky-200 bg-sky-50 p-4 space-y-3"><div class="font-bold text-sky-800">🚚 Самовивіз до дверей</div><p class="text-sm text-sky-700">Для Шаргородської або Мурафської громади. Адресна доставка до дверей — доплата 100 ₴.</p><input type="hidden" name="localType" id="localType" value="home"><div id="localAddressFields" class="space-y-3"><label class="block text-sm font-semibold">Громада</label><select name="community" id="homeCommunity" class="inp"><option value="Шаргородська громада">Шаргородська громада</option><option value="Мурафська громада">Мурафська громада</option></select><input name="address" id="homeAddress" placeholder="Населений пункт, вулиця, будинок" class="inp"></div><div id="localPickupInfo" class="hidden rounded-xl bg-emerald-100 p-3 text-sm text-emerald-800">📍 Забрати замовлення можна за адресою: <b>вул. Будівельників, 7</b>. Самовивіз без доплати.</div></div>
 <input type="hidden" name="pay" value="card"><div class="flex items-center gap-2 rounded-xl bg-sky-50 border border-sky-100 px-3 py-2.5 text-sm text-sky-800"><span>💳</span><span>Оплата онлайн: карткою Visa / Mastercard, Apple Pay або Google Pay</span></div>
 <div class="flex justify-between font-bold text-lg pt-2"><span>До сплати:</span><span id="checkoutTotal">${total()} UAH</span></div><button class="btn w-full">Перейти до оплати</button></form></main>`}
function toggleDelivery(){
 const type=document.getElementById('deliveryType')?.value||'np';const local=type==='local',pickup=type==='pickup';
 const np=document.getElementById('npFields'),lf=document.getElementById('localFields'),pf=document.getElementById('pickupFields');if(!np||!lf)return;
 np.classList.toggle('hidden',type!=='np');lf.classList.toggle('hidden',!local);if(pf)pf.classList.toggle('hidden',!pickup);
 ['npCity','npBranch'].forEach(id=>{const e=document.getElementById(id);e.required=type==='np';e.disabled=type!=='np'});
 toggleLocalType();
}
function toggleLocalType(){
 const local=document.getElementById('deliveryType')?.value==='local';const type='home';const home=local;
 const af=document.getElementById('localAddressFields'),pi=document.getElementById('localPickupInfo');if(!af||!pi)return;
 af.classList.toggle('hidden',!home);pi.classList.toggle('hidden',home||!local);
 const a=document.getElementById('homeAddress');a.required=home;a.disabled=!home;
 const c=document.getElementById('homeCommunity');c.disabled=!home;
 const t=document.getElementById('checkoutTotal');if(t)t.textContent=(total()+(home?100:0))+' UAH';
}

function payment(){
 return header()+`<main class="max-w-md mx-auto p-4"><form onsubmit="doPay(event)" class="bg-white rounded-3xl p-6 shadow border border-sky-100 space-y-3">
 <h2 class="text-2xl font-bold text-sky-800">Оплата</h2>
 <div class="grid grid-cols-2 gap-2"><button type="button" onclick="doPay()" style="background:#fff" class="border-2 border-gray-200 hover:border-sky-400 rounded-xl py-2 flex justify-center transition"><img src="${APAY}" alt="Apple Pay" class="h-8"></button><button type="button" onclick="doPay()" style="background:#fff" class="border-2 border-gray-200 hover:border-sky-400 rounded-xl py-2 flex justify-center transition"><img src="${GPAY}" alt="Google Pay" class="h-8"></button></div>
 <p class="text-center text-sm text-sky-500">або карткою Visa / Mastercard</p>
 <input required inputmode="numeric" maxlength="19" placeholder="Номер картки" class="inp" oninput="this.value=this.value.replace(/\\D/g,'').replace(/(.{4})/g,'$1 ').trim()">
 <input required placeholder="ПІБ власника (латиницею)" class="inp" style="text-transform:uppercase">
 <div class="grid grid-cols-2 gap-2"><input required maxlength="5" placeholder="ММ/РР" class="inp" oninput="this.value=this.value.replace(/\\D/g,'').replace(/^(\\d{2})(\\d)/,'$1/$2')"><input required type="password" maxlength="3" inputmode="numeric" placeholder="CVC" class="inp"></div>
 <div class="flex justify-between font-bold text-lg pt-2"><span>До сплати:</span><span>${S.order?.sum ?? total()} UAH</span></div>
 <button class="btn w-full">Сплатити ${S.order?.sum ?? total()} UAH</button>
 <p class="text-xs text-sky-500 text-center">Демо: платіж не виконується, дані картки ніде не зберігаються.</p></form></main>`}

function done(){
 return `<div class="hero flex items-center justify-center p-4 text-center"><div class="relative z-10 glass rounded-3xl p-8 max-w-sm">
 <div class="text-5xl">✅</div><h2 class="text-2xl font-bold text-sky-800 mt-2">Дякуємо за замовлення!</h2>
 <p class="mt-2">Замовлення №${S.order.id} на суму <b>${S.order.sum} UAH</b> ${S.order.pay=='cod'?'буде оплачено при отриманні':'оплачено'}.</p>
 <p class="text-sm text-sky-700 mt-2 flex items-center justify-center gap-2">${S.order.delivery=='pickup' ? '📍 Самовивіз із магазину' : S.order.delivery=='local' ? '🚚 Адресна доставка до дверей: '+S.order.community+', '+S.order.address : 'Нова пошта: '+S.order.city+', відділення '+S.order.branch}</p>
 ${S.order.accessories?.length?'<p class="text-sm text-sky-700 mt-3">Аксесуари для уточнення: '+S.order.accessories.join(', ')+'</p>':''}<button class="btn mt-5" onclick="go('shop')">Повернутись до магазину</button><button class="block mx-auto mt-3 text-sky-700 underline" onclick="S.tab='orders';go('cab')">Мої замовлення</button></div></div>`}


function water(c){
 const g=c.getContext('webgl');if(!g)return;
 const rs=()=>{c.width=c.clientWidth/2;c.height=c.clientHeight/2;g.viewport(0,0,c.width,c.height)};rs();
 const sh=(t,s)=>{const o=g.createShader(t);g.shaderSource(o,s);g.compileShader(o);return o};
 const pr=g.createProgram();
 g.attachShader(pr,sh(g.VERTEX_SHADER,'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));
 g.attachShader(pr,sh(g.FRAGMENT_SHADER,`precision mediump float;uniform float t;uniform vec2 r;
 void main(){float tm=t*.35+23.;vec2 uv=gl_FragCoord.xy/r.y;vec2 p=mod(uv*12.566,6.2831853)-250.;vec2 i=p;float c=1.,k=.005;
 for(int n=0;n<5;n++){float tt=tm*(1.-(3.5/float(n+1)));i=p+vec2(cos(tt-i.x)+sin(tt+i.y),sin(tt-i.y)+cos(tt+i.x));
 c+=1./length(vec2(p.x/(sin(i.x+tt)/k),p.y/(cos(i.y+tt)/k)));}
 c/=5.;c=1.17-pow(c,1.4);vec3 col=vec3(pow(abs(c),8.));col=clamp(col+vec3(0.,.3,.5),0.,1.);
 gl_FragColor=vec4(col,1.);}`));
 g.linkProgram(pr);g.useProgram(pr);
 const b=g.createBuffer();g.bindBuffer(g.ARRAY_BUFFER,b);g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),g.STATIC_DRAW);
 const a=g.getAttribLocation(pr,'a');g.enableVertexAttribArray(a);g.vertexAttribPointer(a,2,g.FLOAT,false,0,0);
 const ut=g.getUniformLocation(pr,'t'),ur=g.getUniformLocation(pr,'r');
 const f=ms=>{if(!c.isConnected)return;g.uniform1f(ut,ms/1000);g.uniform2f(ur,c.width,c.height);g.drawArrays(g.TRIANGLES,0,3);S.raf=requestAnimationFrame(f)};
 cancelAnimationFrame(S.raf);f(0);
}
const oKey=()=>'scw_orders_'+S.user.email;
const loadOrders=()=>{try{return JSON.parse(localStorage.getItem(oKey())||'[]')}catch(e){return[]}};
const saveOrder=o=>{try{const a=loadOrders();a.unshift({...o,date:new Date().toISOString(),ttn:'2045'+String(o.id*7919).padStart(10,'0')});localStorage.setItem(oKey(),JSON.stringify(a))}catch(e){}};
function repeat(i){const o=loadOrders()[i];S.cart={};o.items.forEach(x=>S.cart[x.id]=x.q);syncBundleHandles();S.page='shop';S.open=true;render()}
function ordersHtml(){
 const a=loadOrders();
 const card=(o,i)=>`<div class="bg-white rounded-2xl border border-sky-100 shadow-sm p-4 mb-3">
 <div class="flex items-center justify-between"><div><b class="text-sky-800">Замовлення №${o.id}</b><div class="text-xs text-slate-500">${new Date(o.date).toLocaleString('uk-UA',{dateStyle:'medium',timeStyle:'short'})}</div></div><span class="text-xs font-semibold text-emerald-700 bg-emerald-100 rounded-full px-2.5 py-1">Оплачено ✓</span></div>
 <div class="mt-3 divide-y divide-sky-50">${o.items.map(x=>{const p=PRODUCTS.find(y=>y.id==x.id);return `<div class="flex justify-between py-1.5 text-sm"><span>${CATS[p.cat]} ${p.l} л × ${x.q}</span><span class="font-semibold">${x.p*x.q} ₴</span></div>`}).join('')}</div>
 <div class="mt-2 flex items-center gap-2 text-xs text-slate-500">${o.delivery=='pickup' ? '📍 Самовивіз із магазину' : o.delivery=='local' ? '🚚 Адресна доставка до дверей: '+o.community+', '+o.address : 'Нова пошта: '+o.city+', відділення '+o.branch}</div>
 <div class="mt-3 flex items-center justify-between"><b class="text-lg text-sky-700">${o.sum} UAH</b><div class="flex gap-2"><button class="px-3 py-2 rounded-xl bg-sky-100 text-sky-700 text-sm font-semibold" onclick="S.tab='track';render()">Відстежити</button><button class="btn !py-2 text-sm" onclick="repeat(${i})">Повторити</button></div></div></div>`;
 return a.length?a.map(card).join(''):empty('🧾','Ви ще нічого не замовляли')}
S.tab='orders';
S.dark=(()=>{try{const t=localStorage.getItem('scw_theme');if(t)return t=='dark'}catch(e){}return matchMedia('(prefers-color-scheme:dark)').matches})();
document.documentElement.classList.toggle('dark',S.dark);
function toggleTheme(){S.dark=!S.dark;document.documentElement.classList.toggle('dark',S.dark);try{localStorage.setItem('scw_theme',S.dark?'dark':'light')}catch(e){}render()}
const lsGet=(k,d)=>{try{return JSON.parse(localStorage.getItem(k))||d}catch(e){return d}};
const lsSet=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const empty=(i,t)=>`<div class="empty-state"><video class="empty-mascot" autoplay muted loop playsinline preload="auto" aria-hidden="true"><source src="mascot-right.webm" type="video/webm"></video><p>Тут пусто, давай це виправимо</p><span class="text-sm mt-1">${t}</span></div>`;
const STEPS=['Замовлення прийнято','Комплектується на складі','Передано до Нової пошти','Прямує до відділення','Очікує у відділенні'];
const TABS=[['orders','🧾','Мої замовлення'],['track','📍','Відстеження замовлення'],['fav','❤️','Обране'],['rev','⭐','Відгуки'],['sup','💬','SCW-підтримка']];
function tabTrack(){
 const a=loadOrders();if(!a.length)return empty('📍','Немає замовлень для відстеження');
 return a.slice(0,5).map(o=>{const st=Math.min(4,Math.floor((Date.now()-new Date(o.date))/60000));
 return `<div class="bg-white rounded-2xl border border-sky-100 p-4 mb-3"><div class="flex justify-between items-center"><b class="text-sky-800">Замовлення №${o.id}</b><span class="text-xs text-slate-500">ТТН ${o.ttn||'—'}</span></div><div class="mt-3">${STEPS.map((s,i)=>`<div class="flex gap-3"><div class="flex flex-col items-center"><div class="w-6 h-6 rounded-full flex items-center justify-center text-xs ${i<st?'bg-sky-600 text-white':i==st?'bg-sky-600 text-white ring-4 ring-sky-200 animate-pulse':'bg-slate-200 text-slate-400'}">${i<=st?'✓':i+1}</div>${i<4?`<div class="w-0.5 h-6 ${i<st?'bg-sky-600':'bg-slate-200'}"></div>`:''}</div><div class="pb-4 text-sm ${i<=st?'font-semibold text-sky-800':'text-slate-400'}">${s}</div></div>`).join('')}</div><div class="text-xs text-slate-500 flex items-center gap-2">${o.delivery=='pickup' ? '📍 Самовивіз із магазину' : o.delivery=='local' ? '🚚 Адресна доставка до дверей: '+o.community+', '+o.address : 'Нова пошта: '+o.city+', відділення '+o.branch}</div></div>`}).join('')+'<p class="text-xs text-slate-400 text-center">Демо: статус змінюється щохвилини. У робочому проєкті — з API Нової пошти за ТТН.</p>'}
function tabFav(){
 if(!PRODUCTS.some(p=>S.fav[p.id]))return empty('❤️','Натисніть сердечко на товарі, щоб додати в обране');
 const v=S.view,q=S.q;S.view='fav';S.q='';const r=cards();S.view=v;S.q=q;return `<div class="grid grid-cols-2 md:grid-cols-3 gap-4">${r}</div>`}
const rKey=()=>'scw_rev_'+S.user.email,cKey=()=>'scw_chat_'+S.user.email;
function addReview(e){e.preventDefault();const f=Object.fromEntries(new FormData(e.target)),a=lsGet(rKey(),[]);a.unshift({...f,date:new Date().toISOString()});lsSet(rKey(),a);render()}
function delReview(i){const a=lsGet(rKey(),[]);a.splice(i,1);lsSet(rKey(),a);render()}
function tabRev(){
 const a=lsGet(rKey(),[]);
 return `<form onsubmit="addReview(event)" class="bg-white rounded-2xl border border-sky-100 p-4 space-y-3 mb-4"><b class="text-sky-800">Залишити відгук</b>
 <select name="prod" class="inp">${PRODUCTS.map(p=>`<option>${CATS[p.cat]} ${p.l} л</option>`).join('')}</select>
 <select name="rate" class="inp">${[5,4,3,2,1].map(n=>`<option value="${n}">${'★'.repeat(n)}${'☆'.repeat(5-n)}</option>`).join('')}</select>
 <textarea name="text" required rows="3" placeholder="Ваші враження про воду та доставку" class="inp"></textarea><button class="btn w-full">Надіслати відгук</button></form>`
 +(a.length?a.map((r,i)=>`<div class="bg-white rounded-2xl border border-sky-100 p-4 mb-3"><div class="flex justify-between"><b class="text-sm text-sky-800">${r.prod}</b><button class="text-xs text-slate-400" onclick="delReview(${i})">Видалити</button></div><div class="text-amber-400 text-lg">${'★'.repeat(r.rate)}${'☆'.repeat(5-r.rate)}</div><p class="text-sm mt-1"></p><p class="text-sm">${r.text.replace(/</g,'&lt;')}</p><div class="text-xs text-slate-400 mt-1">${new Date(r.date).toLocaleDateString('uk-UA')}</div></div>`).join(''):empty('⭐','Ви ще не залишали відгуків'));}
function sendMsg(t,e){if(e)e.preventDefault();t=(t||'').trim();if(!t)return;const a=lsGet(cKey(),[]);a.push({me:1,t});lsSet(cKey(),a);render();
 setTimeout(()=>{const b=lsGet(cKey(),[]);b.push({t:/замовлен|де мо|доставк/i.test(t)?'Статус замовлення можна подивитись у розділі «Відстеження замовлення». Якщо потрібна допомога — оператор SCW-підтримки відповість найближчим часом.':'Дякуємо за звернення! Оператор SCW-підтримки відповість найближчим часом.'});lsSet(cKey(),b);if(S.page=='cab'&&S.tab=='sup')render()},900)}
function tabSup(){
 const a=[{t:'Вітаємо в SCW-підтримці 💧 Напишіть ваше запитання — ми допоможемо із замовленням, оплатою чи доставкою.'},...lsGet(cKey(),[])];
 return `<div class="bg-white rounded-2xl border border-sky-100 overflow-hidden"><div class="flex items-center gap-3 p-3 border-b border-sky-100"><img src="${DROP}" class="h-9" alt=""><div><b class="text-sky-800">SCW-підтримка</b><div class="text-xs text-slate-500">Демо-чат: відповіді автоматичні</div></div></div>
 <div id="chat" class="p-3 space-y-2 overflow-y-auto" style="height:320px">${a.map(m=>`<div class="flex ${m.me?'justify-end':''}"><div class="max-w-[80%] rounded-2xl px-3 py-2 text-sm ${m.me?'bg-sky-600 text-white':'bg-sky-50'}">${m.t.replace(/</g,'&lt;')}</div></div>`).join('')}</div>
 <div class="px-3 pb-2 flex gap-2 overflow-x-auto">${['Де моє замовлення?','Змінити адресу доставки','Питання щодо оплати'].map(q=>`<button class="whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-sky-100 text-sky-700" onclick="sendMsg('${q}')">${q}</button>`).join('')}</div>
 <form onsubmit="sendMsg(this.m.value,event)" class="p-3 pt-1 flex gap-2"><input name="m" required autocomplete="off" placeholder="Ваше повідомлення…" class="inp"><button class="btn !px-4">➤</button></form></div>`}
function cab(){
 const body={orders:ordersHtml,track:tabTrack,fav:tabFav,rev:tabRev,sup:tabSup}[S.tab]();
 return header()+`<main class="max-w-3xl mx-auto p-4 pb-28"><div class="flex flex-wrap items-center gap-3 bg-white rounded-2xl border border-sky-100 p-4">
 <div class="w-12 h-12 rounded-full bg-sky-600 text-white flex items-center justify-center text-xl font-bold">${(S.user.name||'?')[0].toUpperCase()}</div>
 <div class="flex-1 min-w-0"><b class="text-sky-800 block truncate">${S.user.name}</b><span class="text-xs text-slate-500">${S.user.email}</span></div>
 <button onclick="toggleTheme()" class="px-3 py-1.5 rounded-full bg-sky-100 text-sky-700 text-sm font-semibold">${S.dark?'☀️ Світла':'🌙 Темна'}</button><button class="text-sky-700 underline text-sm" onclick="logout()">Вийти</button></div>
 <div class="flex gap-2 my-4 overflow-x-auto pb-1">${TABS.map(([k,i,l])=>`<button onclick="S.tab='${k}';render()" class="whitespace-nowrap px-4 py-2 rounded-full text-sm font-semibold ${S.tab==k?'bg-sky-600 text-white':'bg-white text-sky-700 border border-sky-200'}">${i} ${l}</button>`).join('')}</div>${body}</main>`+nav()+drawer()}
function render(){
 const v={home,auth,shop,checkout,payment,done,cab};
 if(!S.user&&!['home','auth','shop'].includes(S.page))S.page='auth';
 $('#app').innerHTML=v[S.page]()+(['home','auth'].includes(S.page)?`<button onclick="toggleTheme()" class="fixed top-3 right-3 z-50 w-10 h-10 rounded-full bg-white/80 backdrop-blur text-lg shadow" style="background:#ffffffcc">${S.dark?'☀️':'🌙'}</button>`:'');const ch=$('#chat');if(ch)ch.scrollTop=ch.scrollHeight;const wc=$('#wc');if(wc)water(wc);const mc=$('#mascots');if(mc)mc.classList.toggle('on',S.page==='shop');
}
function doAuth(e){e.preventDefault();const f=Object.fromEntries(new FormData(e.target));
 S.user={email:f.email,name:f.name||f.email.split('@')[0]};
 try{localStorage.setItem('scw_user',JSON.stringify(S.user))}catch(x){}
 const pa=S.pendingAdd;S.pendingAdd=null;
 if(pa){S.cart[pa.id]=(S.cart[pa.id]||0)+pa.n;S.page='shop';S.open=true;render();scrollTo(0,0)}else go('shop')}
function needAuth(id,n){S.pendingAdd={id,n:n||1};S.mode='login';go('auth')}
function logout(){S.user=null;S.cart={};try{localStorage.removeItem('scw_user')}catch(x){}go('home')}
function pickQty(id,d){S.pickQty[id]=Math.max(1,Math.min(99,(S.pickQty[id]||1)+d));render()}
function syncBundleHandles(){/* Аксесуари не додаються автоматично до кошика. */}
 function addMany(id,btn){if(!S.user){needAuth(id,S.pickQty[id]||1);return}
 const n=S.pickQty[id]||1;
 if(!btn||btn.dataset.rolling){if(!btn)finishAddMany(id,n);return}
 if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){finishAddMany(id,n);return}
 btn.dataset.rolling='1';
 const original=btn.innerHTML;
 btn.classList.add('cart-road-btn');
 btn.innerHTML='<span class="cart-road-track" aria-hidden="true"><span class="cart-road-lines"></span><span class="cart-road-emoji">🛒</span></span><span class="cart-road-label">Вирушаємо!</span>';
 const track=btn.querySelector('.cart-road-track'),label=btn.querySelector('.cart-road-label'),ride=btn.querySelector('.cart-road-emoji');
 track.animate([{opacity:0,transform:'scaleX(.7)'},{opacity:1,transform:'scaleX(1)'}],{duration:180,fill:'forwards'});
 ride.animate([{left:'2%',transform:'translateY(-50%) rotate(-8deg)'},{left:'calc(100% - 30px)',transform:'translateY(-50%) rotate(8deg)'}],{duration:760,easing:'cubic-bezier(.2,.75,.25,1)',fill:'forwards'}).onfinish=()=>{
  label.textContent='Додано ✓';
  const ripple=document.createElement('span');ripple.className='cart-ripple';btn.appendChild(ripple);
  ripple.animate([{transform:'scale(.7)',opacity:0},{transform:'scale(1)',opacity:1},{transform:'scale(1.05)',opacity:0}],{duration:380,easing:'ease-out'});
  ['✨','💧','✦'].forEach((symbol,i)=>{const sp=document.createElement('span');sp.className='cart-sparkle';sp.textContent=symbol;sp.style.left=(25+i*23)+'%';sp.style.top='50%';btn.appendChild(sp);sp.animate([{transform:'translateY(8px) scale(.4)',opacity:0},{transform:'translateY(-13px) scale(1.15)',opacity:1,offset:.55},{transform:'translateY(-24px) scale(.6)',opacity:0}],{duration:430,delay:i*55,easing:'ease-out'}).onfinish=()=>sp.remove()});
  btn.animate([{transform:'scale(1)'},{transform:'scale(1.035)'},{transform:'scale(1)'}],{duration:320,easing:'ease-out'});
  setTimeout(()=>{btn.innerHTML=original;delete btn.dataset.rolling;btn.classList.remove('cart-road-btn');finishAddMany(id,n)},460);
 };
 }
 function finishAddMany(id,n){S.cart[id]=(S.cart[id]||0)+n;S.open=true;render();const b=document.querySelector('#badge'),c=document.querySelector('#cartBtn');if(b)b.classList.add('pop');if(c){c.animate([{transform:'scale(1)'},{transform:'scale(1.12) rotate(-5deg)'},{transform:'scale(1) rotate(0)' }],{duration:420,easing:'ease-out'})}}
function qty(id,d){S.cart[id]=(S.cart[id]||0)+d;if(S.cart[id]<=0)delete S.cart[id];render()}
function addHandle(id){if(!S.user){needAuth(id,1);return}S.cart[id]=(S.cart[id]||0)+1;S.open=true;render()}
function add(id,btn){if(!S.user){needAuth(id,1);return}
 if(btn&&window.matchMedia('(prefers-reduced-motion: reduce)').matches){S.cart[id]=(S.cart[id]||0)+1;S.open=true;render();return}
 if(btn){btn.animate([{transform:'scale(1)',filter:'brightness(1)'},{transform:'scale(1.045)',filter:'brightness(1.2)'},{transform:'scale(1)',filter:'brightness(1)'}],{duration:420,easing:'ease-out'});
  const drop=document.createElement('span');drop.textContent='💧';drop.style.cssText='position:absolute;z-index:5;pointer-events:none;font-size:22px;left:50%;top:50%;transform:translate(-50%,-50%)';
  if(getComputedStyle(btn).position==='static')btn.style.position='relative';btn.appendChild(drop);
  drop.animate([{transform:'translate(-50%,-50%) scale(.4)',opacity:0},{transform:'translate(-50%,-100%) scale(1.2)',opacity:1,offset:.45},{transform:'translate(-50%,-180%) scale(.5)',opacity:0}],{duration:460,easing:'ease-out'}).onfinish=()=>drop.remove();
 }
 S.cart[id]=(S.cart[id]||0)+1;S.open=true;render();const badge=$('#badge');if(badge)badge.classList.add('pop');
}
function toPay(e){e.preventDefault();S.pendingCheckout=Object.fromEntries(new FormData(e.target));S.accessoryInterest=S.accessoryInterest||[];showAccessoryOffer()}
function showAccessoryOffer(){
 const old=document.getElementById('accessoryOffer');if(old)old.remove();
 const modal=document.createElement('div');modal.id='accessoryOffer';modal.className='fixed inset-0 z-[80] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4';
 modal.innerHTML=`<section class="w-full max-w-lg max-h-[90vh] overflow-auto rounded-3xl bg-white p-5 sm:p-7 shadow-2xl border border-sky-100">
 <div class="text-center"><div class="text-4xl mb-2">🧴</div><h2 class="text-2xl font-extrabold text-sky-900">Можливо, вам знадобляться аксесуари для води?</h2><p class="text-sm text-slate-600 mt-2">Додайте потрібне до свого замовлення — або продовжуйте без аксесуарів.</p></div>
 <div class="grid grid-cols-2 gap-3 mt-5">
 ${[['bottle','Бутлі','5 л / 11 л / 19 л',0],['pump','Помпи','Механічні / електричні',1],['cap','Кришки','Для бутлів',2],['holder','Тримачі для бутлів','Для бутлів',3]].map(([id,name,desc,photo])=>`<button type="button" onclick="toggleAccessoryInterest('${id}',this)" data-accessory="${id}" class="rounded-2xl border-2 ${S.accessoryInterest.includes(id)?'border-sky-500 bg-sky-50':'border-sky-100'} p-2 sm:p-3 text-center hover:border-sky-400 transition overflow-hidden"><img src="${ACCESSORY_PHOTOS[photo]}" alt="${name}" class="w-full h-28 sm:h-36 object-cover rounded-xl mb-2"><b class="text-sky-900 block">${name}</b><span class="block text-xs text-slate-500 mt-1">${desc}</span><span class="block text-xs text-sky-600 mt-1">${S.accessoryInterest.includes(id)?'Обрано ✓':'Обрати'}</span></button>`).join('')}
 </div><p class="text-xs text-slate-500 mt-4">Вартість аксесуарів буде уточнена перед підтвердженням замовлення.</p>
 <div class="grid sm:grid-cols-2 gap-2 mt-5"><button type="button" onclick="continueWithAccessories()" class="btn w-full">Так, додати до замовлення</button><button type="button" onclick="continueWithoutAccessories()" class="w-full rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 hover:bg-slate-50">Ні, дякую</button></div></section>`;
 document.body.appendChild(modal);
}
function toggleAccessoryInterest(id,el){const i=S.accessoryInterest.indexOf(id);if(i>=0)S.accessoryInterest.splice(i,1);else S.accessoryInterest.push(id);el.classList.toggle('border-sky-500');el.classList.toggle('bg-sky-50');el.querySelector('span:last-child').textContent=S.accessoryInterest.includes(id)?'Обрано ✓':'Обрати'}
function finishCheckout(){const f=S.pendingCheckout||{};const addOnNames={bottle:'Бутлі',pump:'Помпи',cap:'Кришки',holder:'Тримачі для бутлів'};S.order={...f,id:Math.floor(100000+Math.random()*900000),sum:total()+(f.delivery=='local'&&f.localType=='home'?100:0),items:Object.entries(S.cart).map(([id,q])=>({id,q,p:PRODUCTS.find(x=>x.id==id).p})),accessories:S.accessoryInterest.map(id=>addOnNames[id])};S.pendingCheckout=null;const m=document.getElementById('accessoryOffer');if(m)m.remove();if(f.pay=='cod')finish();else go('payment')}
function continueWithAccessories(){finishCheckout()}
function continueWithoutAccessories(){S.accessoryInterest=[];finishCheckout()}
function doPay(e){if(e)e.preventDefault();finish()}
function finish(){
 if(S.busy)return;S.busy=1;
 const o=document.createElement('div'),cod=S.order.pay=='cod';
 o.className='fixed inset-0 z-[70] flex flex-col items-center justify-center text-center text-white';o.style.background='linear-gradient(160deg,#0369a1,#0ea5e9)';
 o.innerHTML=`<div class="relative w-28 h-28"><div class="absolute inset-0 rounded-full border-4 border-white/30 border-t-white" style="animation:spin .9s linear infinite"></div><div class="absolute inset-0 flex items-center justify-center text-4xl" style="animation:fl 1.2s ease-in-out infinite">💧</div></div><p class="mt-6 text-lg font-semibold">${cod?'Оформлюємо замовлення…':'Обробка платежу…'}</p><p class="text-sky-100 text-sm">${S.order.sum} UAH</p>`;
 document.body.appendChild(o);
 setTimeout(()=>{
  let c='';for(let i=0;i<22;i++){const a=i/22*6.283,r=110+Math.random()*80;c+=`<i class="absolute left-1/2 top-1/2 -ml-2 -mt-2 w-4 h-4 rounded-full bg-white/80" style="--x:${Math.cos(a)*r}px;--y:${Math.sin(a)*r}px;animation:bu 1.1s ease-out ${Math.random()*.2}s both"></i>`}
  o.innerHTML=`<div class="relative w-28 h-28 flex items-center justify-center"><span class="absolute inset-0 rounded-full bg-white/40" style="animation:rp 1.2s ease-out"></span>${c}<div class="relative w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-2xl" style="animation:pu .6s both"><svg viewBox="0 0 52 52" class="w-16 h-16"><path d="M14 27l8 8 16-17" fill="none" stroke="#0284c7" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="48" stroke-dashoffset="48" style="animation:dr .5s .4s ease-out forwards"/></svg></div></div><p class="mt-8 text-2xl font-bold" style="animation:fu .6s .5s both">${cod?'Замовлення прийнято!':'Оплата успішна!'}</p><p class="text-sky-100" style="animation:fu .6s .7s both">Дякуємо, що обрали SHAR CRYSTAL WATER</p>`;
  setTimeout(()=>{saveOrder(S.order);S.cart={};S.busy=0;o.remove();if(S.order.delivery==='pickup'){window.location.href='https://maps.app.goo.gl/E4i312AogYiWkNFw8?g_st=ic'}else{go('done')}},2200)},1800)}
// Пропозиція товару після 2 хвилин бездіяльності
let idlePromptTimer=null;
let idlePromptDismissed=false;
function closeIdlePrompt(){const el=document.getElementById('idlePrompt');if(el)el.remove();}
function showIdlePrompt(){
 if(idlePromptDismissed || document.getElementById('idlePrompt') || ['auth','checkout','payment','done'].includes(S.page)) return;
 const p=PRODUCTS.find(x=>x.id==='m10');
 if(!p)return;
 const modal=document.createElement('div');modal.id='idlePrompt';
 modal.className='fixed inset-0 z-[90] bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4';
 modal.innerHTML=`<section role="dialog" aria-modal="true" aria-labelledby="idlePromptTitle" class="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl border border-sky-100 text-center">
 <div class="text-5xl mb-3">💧</div><h2 id="idlePromptTitle" class="text-2xl font-extrabold text-sky-900">Порадити, що взяти?</h2>
 <p class="text-slate-600 mt-2">Рекомендуємо перший товар — мінералізовану воду в бутлі 10 л.</p>
 <div class="rounded-2xl bg-sky-50 p-4 mt-4 text-left"><div class="flex items-center justify-between gap-3"><div><b class="text-sky-900">Мінералізована вода, 10 л</b><div class="text-sky-700 font-bold text-lg mt-1">${p.p} грн</div></div><div class="text-4xl">🧴</div></div></div>
 <div class="grid sm:grid-cols-2 gap-3 mt-5"><button type="button" id="idleYes" class="btn w-full">Так, давайте</button><button type="button" id="idleNo" class="w-full rounded-xl border border-slate-200 py-3 font-semibold text-slate-600 hover:bg-slate-50">Ні, знайду сам</button></div>
 </section>`;
 document.body.appendChild(modal);
 modal.querySelector('#idleYes').addEventListener('click',()=>{if(!S.user){closeIdlePrompt();idlePromptDismissed=true;needAuth(p.id,1);return}S.cart[p.id]=(S.cart[p.id]||0)+1;S.pickQty[p.id]=1;closeIdlePrompt();idlePromptDismissed=true;S.page='shop';S.open=true;render();window.scrollTo(0,0)});
 modal.querySelector('#idleNo').addEventListener('click',()=>{closeIdlePrompt();idlePromptDismissed=true});
}
function resetIdlePromptTimer(){
 if(idlePromptTimer)clearTimeout(idlePromptTimer);
 if(document.getElementById('idlePrompt'))return;
 idlePromptTimer=setTimeout(showIdlePrompt,120000);
}
['pointerdown','pointermove','keydown','scroll','touchstart','click'].forEach(ev=>document.addEventListener(ev,()=>{if(!document.getElementById('idlePrompt'))resetIdlePromptTimer()},{passive:true}));
resetIdlePromptTimer();
render();


/* ===== Наступний JavaScript-блок з оригінального сайту ===== */


/* Бутель реагує на кошик: додали товар -> палець угору, видалили -> сумує */
(function(){
  var slot=document.getElementById('mascotRight'); if(!slot||typeof render!=='function') return;
  var vid=slot.querySelector('video'), bubble=document.getElementById('mascotBubble');
  var THUMBS_T=4.96, SAD_T=2.54;            // секунди в mascot-right.webm: палець угору / примружені очі
  var addTexts=['Гарний вибір! 👍'];
  var delTexts=['Ой… шкода 😢','Ми ж не встигли потоваришувати 🥺','Повернись по водичку… 😢'];
  var timer=null, restoreT=0, active=false, lastDel=-1;
  function pick(a){var i=Math.floor(Math.random()*a.length);if(a===delTexts){if(i===lastDel)i=(i+1)%a.length;lastDel=i}return a[i]}
  function seek(t){try{vid.currentTime=t}catch(e){}}
  function finish(){
    bubble.classList.remove('show'); slot.classList.remove('happy','sad');
    seek(restoreT); var p=vid.play(); if(p&&p.catch)p.catch(function(){});
    active=false;
  }
  function react(kind){
    clearTimeout(timer);
    if(!active) restoreT=vid.currentTime||0;
    active=true;
    slot.classList.remove('happy','sad'); void slot.offsetWidth;
    if(kind==='add'){
      slot.classList.add('happy'); bubble.textContent=pick(addTexts);
      seek(THUMBS_T); var p=vid.play(); if(p&&p.catch)p.catch(function(){});
    }else{
      slot.classList.add('sad'); bubble.textContent=pick(delTexts);
      seek(SAD_T); vid.pause();
    }
    bubble.classList.add('show');
    timer=setTimeout(finish, kind==='add'?1900:2600);
  }
  var prevCnt=count(), prevPage=S.page, _render=render;
  render=function(){
    _render.apply(this,arguments);
    var c=count();
    if(S.page==='shop'&&prevPage==='shop'&&c!==prevCnt) react(c>prevCnt?'add':'remove');
    prevCnt=c; prevPage=S.page;
  };
})();
