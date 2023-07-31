const changecolor=()=>{
    Random_Number=Math.floor(Math.random()*16777215);//Creating a random number for generating text
    Random_Code="#"+Random_Number.toString(16);//Creating the color code of the random number
    document.body.style.backgroundColor=Random_Code;
    document.getElementById("color-text").innerHTML=Random_Code;
    navigator.clipboard.writeText(Random_Code);//Copy the color code to clipboard
}
document.getElementById("btn").addEventListener('click',changecolor)
changecolor();