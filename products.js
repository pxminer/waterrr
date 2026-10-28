// Каталог товарів SHAR CRYSTAL WATER. Ціни в гривнях.
const PRODUCTS = [
...[[1,25],[2,35],[6,80],[10,120],[19,180]].map(([l,p])=>({id:'d'+l,cat:'drink',l,p})),
...[[6,110],[10,160],[19,240]].map(([l,p])=>({id:'m'+l,cat:'min',l,p})),
{id:'clover-dispenser',cat:'accessories',name:'Водороздавальник Clover',l:0,p:750},
{id:'temperature-cooler',cat:'accessories',name:'Кулер для води з регулятором температури',l:0,p:5980},
{id:'salt-tablets-aqua-pro',cat:'accessories',name:'Сольові таблетки AQUA PRO, 25 кг',l:0,p:780},
{id:'manual-water-pump',cat:'accessories',name:'Помпа для кулера',l:0,p:260},
{id:'handle-yellow',cat:'accessories',name:'Ручка для бутля — жовта',l:0,p:10,handleColor:'yellow'},
{id:'handle-blue',cat:'accessories',name:'Ручка для бутля — синя',l:0,p:10,handleColor:'blue'},
{id:'cap-blue',cat:'accessories',name:'Кришка для бутля — синя',l:0,p:5,capColor:'blue'},
{id:'cap-yellow',cat:'accessories',name:'Кришка для бутля — жовта',l:0,p:5,capColor:'yellow'}];
