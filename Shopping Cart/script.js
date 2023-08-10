let shop = document.getElementById("shop");
let shopItemsdata=[{
id:"shirt",
name:"Casual shirt",
price:40,
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
img:"images/shirt.jpg"
},
{
id:"shoe",
name:"Casual shoes",
price:50,
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
img:"images/shoes.jpg"
},
{
 id:"watch",
name:"Royal Watch",
price:80,
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
img:"images/watch.jpg"
},
{
id:"kurta",
name:"Casula kurta",
price:100,
desc:"Lorem ipsum dolor sit, amet consectetur adipisicing.",
img:"images/Kurta.jpg"
}]
let basket=[];
// Product Generation on the webpage from array
let generateProduct=()=>{
    return (shop.innerHTML=shopItemsdata.map((item)=>{
        // let {id,name,price,desc,img}=item;
        return ` <div class="item" id=product-id-${item.id}>
        <img src=${item.img} alt="" width="220">
        <div class="details">
            <h3>${item.name}</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            <div class="price-quantity">
                <h2>$${item.price}</h2>
                <div class="buttons">
                    <i onclick="decrement(${item.id})" class="bi bi-dash-lg"></i>
                    <div id=${item.id} class="quantity">0</div>
                    <i onclick="increment(${item.id})" class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`
    }).join(""))
};
generateProduct();

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
    console.log(basket);
};

let decrement=(id)=>{
    let selectedItem=id;
    let search=basket.find((item)=>item.id===selectedItem.id);
    if(search.item===0){
       return;
    }else{
        search.item-=1;
    }
    console.log(basket);
};
