const orderList1 = document.querySelector(".order1");
const item1 = document.querySelectorAll(".item1");
let count = 1;

function addToOrder(e) {
  // Removes any spaces in string
  let s = e.textContent;
  s = s.replace(/\s+/g, "");

  // Entire container for food item and all buttons
  const itemContainer = document.createElement("div");
  itemContainer.classList.add(s);
  itemContainer.classList.add("itemContainer");
  orderList1.appendChild(itemContainer);
  const entireItem = document.querySelector("." + s);

  // Food item and count 
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("item");
  itemDiv.textContent = "69 x " + e.textContent;
  entireItem.appendChild(itemDiv);

  // Container for buttons
  const container = document.createElement("div");
  container.classList.add(s + "buttonContainer");
  container.classList.add("buttonContainer");
  entireItem.appendChild(container);
  const buttonContainer = document.querySelector("." + s + "buttonContainer");

  // Container for Increment and Decrement
  const quantityContainer = document.createElement("div");
  quantityContainer.classList.add(s + "quantityContainer");
  buttonContainer.appendChild(quantityContainer);
  const quantityController = document.querySelector("." + s + "quantityContainer");
  
  // Increment Button
  const increment = document.createElement("button");
  increment.classList.add(s + "increment");
  increment.textContent = "+";
  quantityController.appendChild(increment);

  // Decrement Button
  const decrement = document.createElement("button");
  decrement.classList.add(s + "decrement");
  decrement.textContent = "-";
  quantityController.appendChild(decrement);

  // Remove item button
  const remove = document.createElement("button");
  remove.classList.add(s + "remove");
  remove.textContent = "x";
  buttonContainer.appendChild(remove);
}


// Adds the item to the order list
item1.forEach (
  e => e.addEventListener("click", () => {
    addToOrder(e);
    e.disabled = true;
  })
)