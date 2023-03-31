"use strict";
var Input = document.getElementById("Input");
var ButtonTahmin = document.getElementById("TahminEt");
var ButtonYeniOyun = document.getElementById("YeniOyun");
var Sonuc = document.getElementById("Sonuc");
var ButtonKolay = document.getElementById("Kolay");
var ButtonNormal = document.getElementById("Normal");
var ButtonZor = document.getElementById("Zor");

var HakSayisi = 0;
var RastgeleSayi = 0;



ButtonKolay.onclick = Easy;
ButtonNormal.onclick = Normal;
ButtonZor.onclick = Hard;
ButtonTahmin.onclick = Tahmin;
ButtonYeniOyun.onclick = YeniOyun;


function randomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Easy()
{
    HakSayisi = 20;
    ButtonYeniOyun.disabled = true;
    ButtonTahmin.disabled = false;
    ButtonKolay.disabled = true;
    ButtonNormal.disabled = true;
    ButtonZor.disabled = true;
}

function Normal()
{
    HakSayisi = 10;
    ButtonYeniOyun.disabled = true;
    ButtonTahmin.disabled = false;
    ButtonKolay.disabled = true;
    ButtonNormal.disabled = true;
    ButtonZor.disabled = true;
}

function Hard()
{
    HakSayisi = 5; 
    ButtonYeniOyun.disabled = true;
    ButtonTahmin.disabled = false;
    ButtonKolay.disabled = true;
    ButtonNormal.disabled = true;
    ButtonZor.disabled = true;
}

function YeniOyun() 
{
    RastgeleSayi = randomInt(0, 99);
    Sonuc.innerHTML = "";
    Input.value = "";
    ButtonYeniOyun.disabled = true;
    ButtonTahmin.disabled = true;
    ButtonKolay.disabled = false;
    ButtonNormal.disabled = false;
    ButtonZor.disabled = false;
}

function Tahmin()
{
    ButtonKolay.disabled = true;
    ButtonNormal.disabled = true;
    ButtonZor.disabled = true;
    var GirilenSayi = parseInt(Input.value);
    var Mesaj = "";

    if(GirilenSayi < RastgeleSayi)
    {
       Mesaj = "Daha Büyük Bir Sayı Giriniz...";
    }

    else if(GirilenSayi > RastgeleSayi)
    {
        Mesaj = "Daha Küçük Bir Sayı Giriniz...";
    }

    else if(GirilenSayi == RastgeleSayi)
    {
        Mesaj = "Tebrikler Doğru Cevap";
        ButtonTahmin.disabled = true;
        ButtonYeniOyun.disabled = false;
    }

    else if(Input.value == "")
    {
        Mesaj = "Lütfen Sayı Giriniz...";
    }

    else
    {
        Mesaj = "Lütfen Sayı Giriniz...";
    }

    HakSayisi--;
    Sonuc.style.color = "#e1ccae";
    Sonuc.style.marginTop = "2rem";
    Sonuc.innerHTML = Mesaj;
    Sonuc.innerHTML += "<br />";
    Sonuc.innerHTML += "Kalan hak sayısı : " + HakSayisi;

    if(HakSayisi == 0)
    {
      Mesaj = "Hakkınız Tükenmiştir...";
      Sonuc.innerHTML = Mesaj;
      ButtonTahmin.disabled = true;
      ButtonYeniOyun.disabled = false;
      Sonuc.innerHTML += "<br />";
      Sonuc.innerHTML += `Cevap: ${RastgeleSayi} Olucaktı`;
    }
}

let amount = document.getElementById('Input');
amount.addEventListener('Input', function()
{ 
    const n = amount.value.replace('','');
    if ( n >= 1 && n <= 100 ) 
{
    amount.value = amount.value.replace('','') + ''     
} 

else 
{
    amount.value = n.slice(0, -1) + ''  
}
})