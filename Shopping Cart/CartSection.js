let label=document.getElementById('label');
let shoppingCart=document.getElementById('shopping-cart');

let basket=JSON.parse(localStorage.getItem('Data'))||[];
let calculate=()=>{
    let CartItem=document.getElementById('cartamount');
    CartItem.innerHTML=basket.map((x)=>x.item).reduce((first,next)=>first+next,0)
};
calculate()

let GenerateCards=()=>{
    if(basket.length!=0){
     return (shoppingCart.innerHTML=basket.map((x)=>{
        let {id,img}=x;
        let search=shopItemsdata.find((y)=>y.id===id)||[];
        return shoppingCart.innerHTML=`
        <div class="Cart-Item">
        <img src="${search.img}" width="150">
        <div Class="details">
        <div Class="title-price">
        <h4>
        <p>${search.name}</p>
        <p>$ ${search.price}</p>
        </h4>
        <i class="bi bi-x-lg"></i>
        </div>
        <div Class="Cart-buttons"></div>
        </div>
        </div>`
     }).join(""))
    }
    else{
     shoppingCart.innerHTML=``;
    label.innerHTML=`<h2>Cart Is Empty</h2>
    <a href="index.html">
    <button type="button" Class="Hbtn">Go Back to Home</button> 
    </a>`
    }
}
GenerateCards();