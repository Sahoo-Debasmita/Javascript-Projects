let label = document.getElementById('label');
let shoppingCart = document.getElementById('shopping-cart');

let basket = JSON.parse(localStorage.getItem('Data')) || [];
let calculate = () => {
    let CartItem = document.getElementById('cartamount');
    CartItem.innerHTML = basket.map((x) => x.item).reduce((first, next) => first + next, 0)
};
calculate()

let GenerateCards = () => {
    if (basket.length != 0) {
        return (shoppingCart.innerHTML = basket.map((x) => {
            let { id, item } = x;
            let search = shopItemsdata.find((y) => y.id === id) || [];
            return shoppingCart.innerHTML = `
        <div class="Cart-Item">
        <img src="${search.img}" width="150">
        <div Class="details">
        <div Class="title-price">
        <h4 Class="name-price">
        <p>${search.name}</p>
        <p Class="Cart-price">$ ${search.price}</p>
        </h4>
        <i class="bi bi-x-lg" onclick="remove(${x.id})"></i>
        </div>
            <div class="buttons">
            <i onclick="decrement(${x.id})" class="bi bi-dash-lg"></i>
            <div id=${x.id} class="quantity">${x.item}</div>
            <i onclick="increment(${x.id})" class="bi bi-plus-lg"></i>
       </div>
       <h3>$${item * search.price}</h3>
        </div>
        </div>`
        }).join(""))
    }
    else {
        shoppingCart.innerHTML = ``;
        label.innerHTML = `<h2>Cart Is Empty</h2>
    <a href="index.html">
    <button type="button" Class="Hbtn">Go Back to Home</button> 
    </a>`
    }
}
GenerateCards();

let increment=(id)=>{
    let selectedItem=id;
    let search=basket.find((item)=>item.id===selectedItem.id);
    if(search===undefined){
        basket.push({
            id:selectedItem.id,
            item:1,
        })
    }else{
        search.item+=1;
    }
    GenerateCards();
    update(selectedItem.id)
    localStorage.setItem('Data',JSON.stringify(basket));
};
// Function for reducing the items 
let decrement=(id)=>{
    let selectedItem=id;
    let search=basket.find((item)=>item.id===selectedItem.id);
    if(search===undefined)return;
    else if(search.item===0){
        return;
    }else{
        search.item-=1;
    }
    update(selectedItem.id);
    basket=basket.filter((x)=>x.item!=0);
    GenerateCards();
    localStorage.setItem('Data',JSON.stringify(basket));
};
// Function for udationg the item numbers
let update=(id)=>{
    let search=basket.find((item)=>item.id===id)
    document.getElementById(id).innerHTML=search.item;
    calculate();
    Total();
}
// Function for completely removing selected items in the cartsetion
let remove=(id)=>{
    let selectedItem=id;
    basket=basket.filter((x)=>x.id!==selectedItem.id);
    localStorage.setItem('Data',JSON.stringify(basket));
    GenerateCards();
    Total();
    calculate();
}
// Function for removeing all the item cards from the cart-section
let Clear=()=>{
    basket=[];
    GenerateCards();
    localStorage.setItem('Data',JSON.stringify(basket));
    calculate();
}
// Counting the total amount of the items present in the basket
let Total=()=>{
    if(basket.length!=0){
    let amount=basket.map((x)=>{
        let {item,id}=x;
        let search=shopItemsdata.find((y)=>y.id==id);
        return item*search.price;
    }).reduce((pre,next)=>pre+next,0);
    label.innerHTML=`<h2>Total Amount: $${amount}</h2>
    <button Class="Checkout">Check Out</button>
    <button Class="remove"  onclick="Clear()">Clear Cart</button>`
    }
    else return;
}
Total();