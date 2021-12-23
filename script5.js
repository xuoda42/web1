var btn = document.querySelector('#btn');
var out = document.querySelector('#out');
var cena = document.querySelector('#cena');
var kol = document.querySelector('#kol');
var c=cena.value;
var k=kol.value;

function oc()
{  document.querySelector('#cena').style.borderColor="red";}
function ok()
{  document.querySelector('#kol').style.borderColor="red";}
function nc()
{  document.querySelector('#cena').style.borderColor="black";}
function nk()
{  document.querySelector('#kol').style.borderColor="black";}
function ob()
{  document.querySelector('#cena').style.borderColor="black";document.querySelector('#kol').style.borderColor="black";}

window.addEventListener('DOMContentLoaded', function (event) {
  console.log("DOM fully loaded and parsed");
btn.onclick = function()
 { const reg = /-+?|\b0[0-9]+/;
  const reg1 = /\D+/;
  const reg2 = /^$/;
  var pro = parseInt(cena.value) *parseInt(kol.value);
    if((reg.test(cena.value) ||reg.test(kol.value))===true ) {
      alert("Ошибка: Число отрицательное или равно нулю")
    if(reg.test(cena.value)===true && reg.test(kol.value)===true) {oc();ok();}
   else if(reg.test(cena.value)===true)
   {oc();nk();}
    else if(reg.test(kol.value)===true) {nc();ok();}
}
 else if((reg1.test(cena.value) ||reg1.test(kol.value))===true ) {
  alert(" Ошибка: Вы ввели букву, а не число!")
if(reg1.test(cena.value)===true && reg1.test(kol.value)===true) {oc();ok();}
else if(reg1.test(cena.value)===true)
{oc();nk();}
else if(reg1.test(kol.value)===true) {on();ok();}
}
else if((reg2.test(cena.value) ||reg2.test(kol.value))===true ) {
  alert(" Ошибка: Введите цифру в соответствующее поле!")
if(reg2.test(cena.value)===true && reg2.test(kol.value)===true) {oc();ok();}
else if(reg2.test(cena.value)===true)
{oc();nk();}
else if(reg2.test(kol.value)===true) {on();ok();}
}
    else {out.innerHTML = pro;ob();} }
 });