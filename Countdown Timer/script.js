const EndDate="15 Aug 2023 00:00 AM";
document.getElementById("End-date").innerHTML=EndDate;
const DayInput=document.getElementsByTagName("input")
const clock=()=>{
const End=new Date(EndDate);
const Now =new Date();
const Difference=(End-Now)/1000;
if(Difference<0) return;// Will return when the date is on
DayInput[0].value=Math.floor(Difference/3600/24); //No of Days Left
DayInput[1].value=Math.floor(Difference/3600)%24; // NO of Hours Left
DayInput[2].value=Math.floor(Difference/60)%60; //No of Minutes Left
DayInput[3].value=Math.floor(Difference%60);//No of Seconds Left
}
clock()
setInterval(clock,1000)
// 1 Day= 24hr 1Hr=60min= 3600 sec 