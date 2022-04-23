console.log("***** Cart Functions *****");
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Function to add items to basket
let basket = [];
function addItem(item) {
  let overLimit = isFull(basket);
  if (overLimit === false) {
    basket.push(item);
    return true;
  } else {
    return false;
  }
}

// Test addItem function. Return 'true if item added. Return 'false' if over basket limi
console.log(`Basket is: ${basket}`);
console.log(`Add pizza should be true: `, addItem("pizza"));
console.log(`Add hotdog should be true: `, addItem("hotdog"));
console.log(`Add hamburger should be true: `, addItem("hamburger"));
console.log(`Add tuna sandwich should be true: `, addItem("tuna sandwich"));
console.log(`Add apple should be true: `, addItem("apple"));
console.log(`Add pear should be false: `, addItem("pear"));
console.log(`Item/s in basket: ${basket.join(" , ")}`);

// Function to log each individual item in basket
function listItems() {
  let foodItems = "";
  for (let item of basket) {
    foodItems += item;
    console.log(item);
  }
}

// Test listItems function. Call function. Each item should be on new line`
listItems(basket);

// Function to reset 'basket' to empty array
function empty() {
  basket = [];
}

// Stretch Goals
console.log("***** Stretch Goals *****");

// isFull function
function isFull() {
  const maxItems = 5;
  if (basket.length < maxItems) {
    return false;
  } else {
    return true;
  }
}

// removeItem function
function removeItem(item) {
  let itemRemoved = basket.indexOf(item); // locates index of item
  if (itemRemoved === -1) {
    // Check to see if itemRemoved is in array & return null if not in array
    return null;
  } else {
    let spliceItem = basket.splice(itemRemoved, 1); // itemRemoved is index, 1 is # of element to be removed
    return spliceItem;
  }
}

// Test removeItem function
console.log(`Current items in basket: ${basket.join(", ")}`);
removeItem("pizza");
console.log(`New array after removing pizza: ${basket.join(", ")}`);
removeItem("apple");
console.log(`New array after removing apple: ${basket.join(", ")}`);
removeItem("fruits");
console.log(
  `Fruits item not in array. Items in basket remain the same: ${basket.join(
    ", "
  )}`
);
console.log(
  "Should return true if item is null: ",
  removeItem("fruits") === null
);

// Test empty function to clear basket
empty();
console.log(`Basket should be empty: `, basket);
