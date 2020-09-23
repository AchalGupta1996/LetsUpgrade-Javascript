// new function getProductByID() is created check it out

let products = [
    {
      id: 1,
      name: "White Tshirt",
      size: "L",
      color: "white",
      price: 1200,
      image: "product1.JFIF",
      description: "Good looking white tshirt",
    },
    {
      id: 2,
      name: "Black Shirt",
      size: "M",
      color: "Black",
      price: 1500,
      image: "product2.jpg",
      description: "Good looking black shirt",
    },
  
    {
      id: 3,
      name: "Checked Shirt",
      size: "S",
      color: "White & Black",
      price: 900,
      image: "product3.jpg",
      description: "Good looking Checked Shirt",
    },
  
    {
      id: 4,
      name: "Black Female Blazer",
      size: "M",
      color: "Black",
      price: 3000,
      image: "product4.jpg",
      description: "Beautifull Blazer",
    },
  
    {
      id: 5,
      name: "Navy Blue Top",
      size: "S",
      color: "Blue",
      price: 1300,
      image: "product5.jpg",
      description: "Good looking Top",
    },
  
    {
      id: 6,
      name: "Indian Dress",
      size: "M",
      color: "Henna",
      price: 1500,
      image: "product6.jpg",
      description: "Good looking Traditional Dress",
    },

    {
        id: 7,
        name: "Black Jacket",
        size: "L",
        color: "Black",
        price: 1300,
        image: "product7.jpg",
        description: "Good looking Jacket",
      },

      {
        id: 8,
        name: "Gray Tshirt",
        size: "M",
        color: "Gray",
        price: 700,
        image: "product8.jfif",
        description: "Good looking Tshirt",
      },

      {
        id: 9,
        name: "Winter Jacket",
        size: "M",
        color: "Black",
        price: 2000,
        image: "product9.jpg",
        description: "Good looking",
      },

      {
        id: 10,
        name: "Four Piece Suit",
        size: "M",
        color: "Cream",
        price: 2500,
        image: "product10.jpeg",
        description: "4 piece suit",
      },

      {
        id: 11,
        name: "Blue suit",
        size: "M",
        color: "Blue",
        price: 1500,
        image: "product11.jfif",
        description: "Blue suit for men",
      },

      {
        id: 12,
        name: "Indian Kurta",
        size: "M",
        color: "Black",
        price: 3500,
        image: "product12.jfif",
        description: "Good looking Kurta for men",
      }
  ];
  
  cart = [];
  
  function displayProducts(productsData, who = "productwrapper") {
    let productsString = "";
  
    productsData.forEach(function (product, index) {
      let { id, name, image, color, description, price, size } = product;
  
      if (who == "productwrapper") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="addToCart(${id})" class="btn btn-primary">Add to Cart</button>
          </p>
        </div>`;
      } else if (who == "cart") {
        productsString += ` <div class="product">
          <div class="prodimg">
            <img src="images/${image}" width="100%" />
          </div>
          <h3>${name}</h3>
          <p>Price : ${price}$</p>
          <p>Size : ${size}</p>
          <p>Color : ${color}</p>
          <p>${description}</p>
          <p>
            <button onclick="removeFromCart(${id})" class="btn btn-primary">Remove from Cart</button>
          </p>
        </div>`;
      }
    });
  
    document.getElementById(who).innerHTML = productsString;
  }
  
  displayProducts(products);
  
  function searchProduct(searchValue) {
    let searchedProducts = products.filter(function (product, index) {
      let searchString =
        product.name + " " + product.color + " " + product.description;
  
      return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
    });
  
    displayProducts(searchedProducts);
  }
  
  // this is a function to get a product based on id from a particular array
  // @param 1 the array u want to get products from
  // @param 2 the id u want to search
  
  function getProductByID(productArray, id) {
    return productArray.find(function (product) {
      return product.id == id;
    });
  }
  
  function addToCart(id) {
    // getting the product
    let pro = getProductByID(products, id);
    // console.log(pro)
    //pro is an object
    
    //   putting in cart
    if(cart.length==0){
    document.getElementById("count").innerText="( " + cart.length + " )";
    cart.push(pro);
    displayProducts(cart, "cart");
    document.getElementById("count").innerText="( " + cart.length + " )";
    document.getElementById("count1").innerText=+ cart.length ;

    }

    else{

      let obj = cart.find((cartprod) => cartprod.id === id);
      if(obj===undefined){
        cart.push(pro);
    displayProducts(cart, "cart");
    document.getElementById("count").innerText="( " + cart.length + " )";
    document.getElementById("count1").innerText=+ cart.length ;

      }
      else{
        alert("product already in cart")
      }

    }
        
  }
  
  function removeFromCart(id) {
    // getting the index based on id
    let index = cart.findIndex(function (product) {
      return product.id == id;
    });
  
    //   removing from cart based on index
    cart.splice(index, 1);
    displayProducts(cart, "cart");
    document.getElementById("count").innerText="( " + cart.length + " )";
    document.getElementById("count1").innerText=+ cart.length ;


  }

  function search(){
    let max=document.getElementById("max").value;
    let min=document.getElementById("min").value;

    let arr=products.filter((ele,i)=>{
      return ele.price>=min && ele.price<=max;
    })
    displayProducts(arr)


  }