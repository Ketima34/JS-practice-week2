// 1- List of products in the shop : each product having a unique id, name and unit price:
const PRODUCTS = [
  { id: 1, name: "Apple", price: 2.5 },
  { id: 2, name: "Banana", price: 1.5 },
  { id: 3, name: "Orange", price: 3 },
  { id: 4, name: "Rice", price: 1.5 },
  { id: 5, name: "Chocolate", price: 3 },
];

// 2-  Shopping cart : which contain the items the customer wants to buy and their quantity
// Exemple : Here the cart contains 2 apples and 1 orange  and the cart amount is 8 dollars
const SHOPPING_CART = [
  { id: 1, quantity: 2 },
  { id: 3, quantity: 1 },
];

/**
 *  TODO  : Complete this function to get the total amount of the current shopping cart.
 * @returns the Shopping cart total amount
 */
function getCartTotalAmount() {

  let result = 0;
  let Price =0;
      for( var x of SHOPPING_CART){
        Price = PRODUCTS.find(s=> s.id === x.id);
        result += x.quantity * Price.price;
      }
  
  // Write your code here
  return result;
}

/**
 *  TODO  : Complete this function to add a product to the shopping cart
 *
 *  - CASE 1 : if the product id already exists in the cart, just increment its quantity
 *      example :  addProductToCart(1)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 3 }]
 *
 *  - CASE 2 : if the product id does NOT exist in the cart, add a new item, with a quantity 1
 *      example :  addProductToCart(2)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 2 }, { id: 2, quantity: 1 }]
 *
 * @param {*} productId  the product id to add
 */
function addProductToCart(productId ) {
  let notnewProduct = SHOPPING_CART.find(s=> s.id === productId  );
  if(!notnewProduct){
   SHOPPING_CART.push({"id": productId ,"quantity": 1})
  }else{
    notnewProduct.quantity += 1;   

  }
  

  // Write your code here
}

/**
 *  TODO  : Complete this function to remove a product from the shopping cart
 *
 *  - CASE 1 : if the product id already exists in the cart,  and quantity if >=2    :  just decrement its quantity
 *      example :  removeProductToCart(1)    :   [{ id: 1, quantity: 2 }]   ------>   [{ id: 1, quantity: 1 }]
 *
 *  - CASE 2 : if the product id already exists in the cart,  and quantity is 1    :  remove the item from the card
 *      example :  removeProductToCart(1)    :   [{ id: 1, quantity: 1 }]   ------>   []
 *
 *  - CASE 2 : if the product id does NOT exist : do nothing !
 
 *
 * @param {*} productId  the product id to add
 */
function removeProductFromCart(productId) {
  // Write your code here
    let exitItem = SHOPPING_CART.find(s=> s.id === productId  );
  if(exitItem && exitItem.quantity >=2 ){
    exitItem.quantity -= 1;    
  }else if(exitItem && exitItem.quantity>0 ){
   
     delete exitItem.id;
     delete exitItem.quantity;
  }else{
    console.log("item not exit");
  }
}

// --------------------------------------------------------
// TESTS ZONE
// --------------------------------------------------------

// test 1  -
console.log(getCartTotalAmount()); //  Shoud be  8

// test 2  -
addProductToCart(1);
console.log(JSON.stringify(SHOPPING_CART)); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1}]

// test 3  -
addProductToCart(2);
console.log(JSON.stringify(SHOPPING_CART)); //  Shoud be    [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]

// test 4  -
removeProductFromCart(1);
console.log(JSON.stringify(SHOPPING_CART)); //  Shoud be    [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]

// test 5  -
removeProductFromCart(2);
console.log(JSON.stringify(SHOPPING_CART)); //  Shoud be    [{"id":1,"quantity":2},{"id":3,"quantity":1}]
