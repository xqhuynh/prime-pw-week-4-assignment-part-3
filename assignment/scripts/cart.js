console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Function to add items to basket
let basket = [];
const addItem = (item) => {
  let newBasket = basket.push(item);
  if (newBasket > 0) {
    return true;
  } else {
    return false;
  }
};

// Test addItem function
console.log(`Basket is: ${basket}`);
console.log(`Add pizza should be true: `, addItem("pizza"));
console.log(`Add hotdog should be true: `, addItem("hotdog"));
console.log(`Add hamburger should be true: `, addItem("hamburger"));
console.log(`Item/s in basket: ${basket.join(" , ")}`);

// Function to log each individual item in basket
const listItems = () => {
  let foodItems = "";
  for (let item of basket) {
    foodItems += item;
    console.log(item);
  }
};

// Test listItems functin. Console log each item on new line
listItems(basket);

// Function to reset 'basket' to empty array
const empty = () => (basket = []);

// Test empty function
empty();
console.log(`Basket should be empty:`, basket);

// Test function - basket currently empty. Add item/s to basket
console.log(`Add new item. Should be true:`, addItem("candy"));
console.log(`Add new item. Should be true:`, addItem("cereal"));
console.log(`Add new item. Should be true:`, addItem("trailmix"));
console.log(`Items in basket: ${basket}`);

// Test log array item on new line
listItems(basket);

// Test empty function
empty(basket);
console.log(`Empty array: `, basket);
