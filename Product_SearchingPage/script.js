// const url='https://fakestoreapi.com/products';
// const container=document.getElementById('container');
// const Product_result=async()=>{
//     try {
//         const result=await fetch(url);
//         return result.json();

//     } catch (error) {
//         return error
//     }

// }
// const fetched_data=async()=>{
//        let Products=await Product_result();
//        const GenerateProduct=(product)=>{
//         return ` <div class="list">
//         <div class="product-img"><img src=${image} alt=""></div>
//         <div class="product-desc">
//           <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
//           <p>Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
//           <button class="btn">$109.95</button>
//         </div>
//    </div>`;
//        }
//        const renderproduct=(Products)=>{
//          container.innerHTML="";
//          Products.forEach(product => {
//             product.innerHTML=GenerateProduct(product);
//          });
//        }
//        renderproduct();
//     }

// fetched_data();

(async () => {
    const url = 'https://fakestoreapi.com/products';
    const container = document.getElementById('container');
    const Product_result = async () => {
        try {
            const result = await fetch(url);
            return result.json();

        } catch (error) {
            return error
        }
    };
    const Products = await Product_result();
    const ProductGenerate = (product) => {
        return `<div class="list">
            <div class="product-img"><img src="${product.image}"></div>
            <div class="product-desc">
              <h2>${product.title}</h2>
              <p>${product.description}</p>
              <button class="btn">${product.price}</button>
            </div>
      </div>`
    };

    const ShowProduct = (Products) => {
        container.innerHTML = "";
        Products.forEach((product) => {
            container.innerHTML += ProductGenerate(product);
        });
    }
    ShowProduct(Products);
})()

