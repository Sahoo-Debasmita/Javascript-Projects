// Array of questions
const Quiz_question = [{
    'qn': 'What does HTML stand for?',
    'A': 'Hyper Tag Markup Language',
    'B': 'Hyper Text Markup Language',
    'C': 'Hyperlinks Text Mark Language',
    'D': 'Hyperlinking Text Marking Language',
    'correct': 'B'
},
{
    'qn': 'Which of these is a genuine tag keyword',
    'A': 'Header',
    'B': 'Bold',
    'C': 'Body',
    'D': 'Image',
    'correct': 'C'
},
{
    'qn': 'Arrays in JavaScript are defined by which of the following statements?',
    'A': ' It is an ordered list of values',
    'B': 'It is an ordered list of objects',
    'C': ' It is an ordered list of string',
    'D': 'It is an ordered list of functions',
    'correct': 'A'
},
{
    'qn': 'Which of the following is not javascript data types?',
    'A': 'Null type',
    'B': 'Undefined type',
    'C': ' Number type',
    'D': 'All of the mentioned',
    'correct': 'D'
}
]
// Variable declaration part
let index = 0; 
const length=Quiz_question.length;
let right=0; let wrong=0;
const question = document.getElementById("Question");
const box=document.getElementById('box')
const options=document.querySelectorAll("label");
const inputs=document.querySelectorAll("input");
// Will show the questions and the corresponding options
const showquestion = () => {
    if(index===length){
       return End_Quiz();
    }
    reset(); 
    const quiz_info = Quiz_question[index];
    question.innerHTML = `${index + 1}.${quiz_info.qn}`;
    options[0].innerHTML=quiz_info.A;
    options[1].innerHTML=quiz_info.B;
    options[2].innerHTML=quiz_info.C;
    options[3].innerHTML=quiz_info.D;
}
// Submit the answer, evaluate it and move forward
const submit=()=>{
    const quiz_info = Quiz_question[index];
    let answer=getanswer();
    if(answer===quiz_info.correct){
        right++;
    } else{
        wrong++;
    }
    index++;
    showquestion();
}
// return the checked options value
const getanswer=()=>{
    let ans;
    inputs.forEach((e)=>{
    if(e.checked){
       ans=e.value;
    }
    })
    return ans;
}
//Reset the previously selected options
const reset=()=>{
    inputs.forEach((check)=>{
        check.checked=false;
    })
}
//End the test by showing the result and a Thanks note
const End_Quiz=()=>{
  box.innerHTML=`<div style="text-align:Center"> <h1>Thank you for attending</h1>
    <h2>You scored ${right} out of ${length} </h2> </div>`
}
//Calling the first question everytime the page load
showquestion();