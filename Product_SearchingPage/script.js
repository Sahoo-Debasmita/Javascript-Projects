(async () => {
    const url = 'https://fakestoreapi.com/products';
    const container = document.getElementById('container');
    const searchinput = document.getElementById('SeacrchBar');
    // Fetching the products from the API
    const Product_result = async () => {
        try {
            const result = await fetch(url);
            return result.json();

        } catch (error) {
            return error
        }
    };
    const Products = await Product_result();
    // Generating the fetched product into the page that is in the html card structure
    const ProductGenerate = (product) => {
        return `<div class="list">
            <div class="product-img"><img src="${product.image}"></div>
            <div class="product-desc">
              <h2>${product.title.split(" ").slice(0, 10).join(" ")}</h2>
              <p>${product.description.split(" ").slice(0, 20).join(" ")}</p>
              <button class="btn">$${product.price}</button>
            </div>
      </div>`
    };
    //  Showing the products one by one on the page
    const ShowProduct = (Products) => {
        container.innerHTML = "";
        Products.forEach((product) => {
            container.innerHTML += ProductGenerate(product);
        });
    }
    ShowProduct(Products);
    //  Serching the product according to the input given by user
    const SearchContext = (existingtext, filterdtext) => {
        return existingtext.toString().toLowerCase().includes(filterdtext);
    }
    const search = (event) => {
        const searchtext = event.target.value.toLowerCase();
        const filteredProducts = Products.filter((product) => {
            // Here in return applying OR (||) operator because we want to search the item from all the cases below
            return (
                SearchContext(product.title, searchtext) ||       //Searching the product by matching the title
                SearchContext(product.description, searchtext) || //Serching the product by matching the description
                SearchContext(product.price, searchtext)         // Serching the project by matching the price
            );
        });
        // Adding a gify if the serched product is not found 
        if (filteredProducts.length === 0) {
            image = document.createElement('img');
            image.src = `Images/text_not_found.gif`;
            container.innerHTML = "";
            container.appendChild(image);
        }
        else {
            ShowProduct(filteredProducts);
        }
    }
    // Event listener for product searching in the input box
    searchinput.addEventListener('keyup', search);
})()

