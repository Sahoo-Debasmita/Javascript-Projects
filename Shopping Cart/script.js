let shop = document.getElementById("shop");
let basket=JSON.parse(localStorage.getItem('Data'))||[];
// Product Generation on the webpage from array
let generateProduct=()=>{
    return (shop.innerHTML=shopItemsdata.map((item)=>{
        // let {id,name,price,desc,img}=item;
        let search=basket.find((x)=>x.id===item.id)||[];
        return ` <div class="item" id=product-id-${item.id}>
        <img src=${item.img} alt="" width="220">
        <div class="details">
            <h3>${item.name}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div class="price-quantity">
                <h2>$${item.price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${item.id})" class="bi bi-dash-lg"></i>
                    <div id=${item.id} class="quantity">${search.item===undefined?0:search.item}</div>
                    <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""))
};
generateProduct();

// Function for incrementing the items 
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
    localStorage.setItem('Data',JSON.stringify(basket));
};
// Function for udationg the item numbers
let update=(id)=>{
    let search=basket.find((item)=>item.id===id)
    document.getElementById(id).innerHTML=search.item;
    calculate()
}
let calculate=()=>{
    let CartItem=document.getElementById('cartamount');
    CartItem.innerHTML=basket.map((x)=>x.item).reduce((first,next)=>first+next,0)
}
calculate()