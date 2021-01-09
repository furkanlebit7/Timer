function setUpdateTime(){
const hour = document.querySelector("#hour");
const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const date = document.querySelector("#date");
const day = document.querySelector("#day");

let tarih = new Date();


let currentHour = tarih.getHours();
let currentMinute = tarih.getMinutes();
let currenSecond = tarih.getSeconds();

if(currentHour>=0 && currentHour<=9)currentHour="0" + currentHour;
if(currentMinute>=0 && currentMinute<=9)currentMinute="0" + currentMinute;
if(currenSecond>=0 && currenSecond<=9)currenSecond="0" + currenSecond;

hour.innerHTML=currentHour;
minute.innerHTML=currentMinute;
second.innerHTML=currenSecond;

let currentDate = tarih.getFullYear();
let currentMonth = tarih.getMonth()+1;
let currentDay = tarih.getDate();

if(currentDate>=0 && currentDate<=9)currentDate="0" + currentDate;
if(currentMonth>=0 && currentMonth<=9)currentMonth="0" + currentMonth;
if(currentDay>=0 && currentDay<=9)currentDay="0" + currentDay;

date.innerHTML=`${currentDay}/${currentMonth}/${currentDate}`;

let whichDay="";
switch (tarih.getDay()) {
    case 1:whichDay="Pazartesi";break;
    
    case 2:whichDay="Salı";break;
    
    case 3:whichDay="Çarşamba";break;
    
    case 4:whichDay="Perşembe";break;
    
    case 5:whichDay="Cuma";break;
    
    case 6:whichDay="Cumartesi";break;
    
    case 7:whichDay="Pazar";break;
}
day.innerHTML=whichDay;
}

window.onload = function(){
    setInterval(setUpdateTime,1000)
}