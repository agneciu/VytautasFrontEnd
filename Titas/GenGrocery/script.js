const groceryInput = document.querySelector("#grocery-input");
const addButton = document.querySelector("#add-btn");
const groceryList = document.querySelector("#grocery-list");
const deleteAllButton = document.querySelector("#delete-all-btn");

let groceries = JSON.parse(localStorage.getItem("groceries")) || [];

function renderGroceries() {
  groceryList.innerHTML = "";
  groceries.forEach((grocery, index) => {
    const li = document.createElement("li");
    li.textContent = grocery;
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", () => {
      groceryInput.value = grocery;
      addButton.textContent = "Edit";
      groceries.splice(index, 1);
    });
    li.append(editButton);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      groceries.splice(index, 1);
      renderGroceries();
      localStorage.setItem("groceries", JSON.stringify(groceries));
    });
    li.append(deleteButton);
    groceryList.append(li);
  });
}

addButton.addEventListener("click", () => {
  if (addButton.textContent === "Add") {
    groceries.push(groceryInput.value);
    groceryInput.value = "";
  } else {
    groceries.push(groceryInput.value);
    addButton.textContent = "Add";
    groceryInput.value = "";
  }
  renderGroceries();
  localStorage.setItem("groceries", JSON.stringify(groceries));
});

deleteAllButton.addEventListener("click", () => {
  groceries = [];
  renderGroceries();
  localStorage.setItem("groceries", JSON.stringify(groceries));
});

renderGroceries();
