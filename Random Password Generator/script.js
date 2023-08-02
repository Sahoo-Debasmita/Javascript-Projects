const slider=document.getElementById('slider');
let slider_value=document.getElementById('slider-value');
const Button=document.getElementById('btn');
const lowercase=document.getElementById('lowercase');
const uppercase=document.getElementById('uppercase');
const showbox=document.getElementById('passbox');
const Numbers=document.getElementById('Numbers');
const Symbols=document.getElementById('Symbols');
let lowerchars="abcdefghijklmnopqrstuvwxyz";
let upperchars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberchars="0123456789";
let symbols="@#$%&*";

// Changing Password Length with slider Value 
slider_value.innerHTML=slider.value;
slider.addEventListener('input',()=>{
    slider_value.innerHTML=slider.value;
});

// Generate Button Functionality
Button.addEventListener('click',()=>{
    showbox.value=GeneratePassword();
});

const GeneratePassword=()=>{
    let genpassword="";
    let allchars="";
    // Checking the checked part and concatinating
    allchars+=lowercase.checked?lowerchars:"";
    allchars+=uppercase.checked?upperchars:"";
    allchars+=Numbers.checked?numberchars:"";
    allchars+=Symbols.checked?symbols:"";

    for(let i=0;i<slider.value;i++){
        genpassword+=allchars.charAt(Math.floor(Math.random()*allchars.length));
    }
    return genpassword;
}
