let Generate;
let score=0;
// Creating Bubble dynamically
const CreateBubble=()=>{
    let Bubble="";
    for(let i=0;i<=250;i++){
        let Bubble_number=Math.floor(Math.random()*10);
    Bubble +=`<div class="bubble">${Bubble_number}</div>`;
    }
    document.getElementById('panel-bottom').innerHTML=Bubble;
}
CreateBubble();
// Counting timer
const Timer=()=>{
    let time=60;
    setInterval(() => {
        if(time>0){
            time--;
            document.getElementById('timer').innerText=time;
        }
        else{
            document.getElementById('panel-bottom').innerHTML="<h2>Game Over!</h2>";
            return;
        }
    }, 1000);
}
Timer()
// Generating Hit
const GetHit=()=>{
    Generate=Math.floor(Math.random()*10);
    document.getElementById('Hit').innerText=Generate;
} 
GetHit()
// Creating Score Part
const ScoreCount=()=>{
    score+=10;
    document.getElementById('score').innerText=score;
}
// Listening click event on bubbles
document.getElementById('panel-bottom').addEventListener('click',(bble)=>{
      let Clicked_Number=Number(bble.target.textContent);
      if(Clicked_Number===Generate){
        ScoreCount();
        GetHit();
      }
})