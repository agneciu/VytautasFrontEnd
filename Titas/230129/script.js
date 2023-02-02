const groceryInput = document.querySelector("#grocery-input");
const addButton = document.querySelector("#add-btn");
const groceryList = document.querySelector("#grocery-list");
const deleteAllButton = document.querySelector("#remove-all-btn");

let groceries = [];

function addGroceries() {
    groceryList.innerText = "";

    groceries.forEach((grocery, index) => {
      const newContainer = document.createElement("div");
      newContainer.classList.add("grocery-container");
      const newItem = document.createElement("p");
      newItem.classList.add('grocery-added')
      newItem.textContent = grocery;
      groceryList.append(newContainer);
      newContainer.append(newItem);

      const editButton = document.createElement("button");
      const editSpan = document.createElement("span");
      editSpan.textContent = "edit";
      editButton.classList.add('edit');
      editSpan.classList.add("material-symbols-outlined");
      editButton.append(editSpan);
      newContainer.append(editButton);

      editButton.addEventListener("click", () => {
        groceryInput.value = grocery;
        addButton.textContent = "Edit";
        groceries.splice(index, 1);
      });
      
      const deleteButton = document.createElement("button");
      const deleteSpan = document.createElement("span");
      deleteButton.classList.add('delete');
      deleteSpan.classList.add("material-symbols-outlined");
      deleteSpan.textContent = "delete";
      deleteButton.append(deleteSpan);
      newContainer.append(deleteButton);

      deleteButton.addEventListener("click", () => {
        groceries.splice(index, 1);
        addGroceries();
        localStorage.setItem("groceries", JSON.stringify(groceries));
      });
      
      groceryList.append(newContainer);
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
    addGroceries();
    localStorage.setItem("groceries", JSON.stringify(groceries));
  });
  
  deleteAllButton.addEventListener("click", () => {
    groceries = [];
    addGroceries();
    localStorage.setItem("groceries", JSON.stringify(groceries));
  });
  
  addGroceries();













  
//   const localStorageKeys = {
//     groceries: 'groceries',
// }

//   const getDataFromLocalStorage = (key) => {
//     return JSON.parse(window.localStorage.getItem(key));
// }

// const setDataToLocalStorage = (key, data) => {
//   window.localStorage.setItem(key, JSON.stringify(data));
// }
  
// const groceriesFromLocalStorage = getDataFromLocalStorage(localStorageKeys.groceries);
// groceriesFromLocalStorage.forEach((grocery) => {
//     createGroceryItem(grocery);
// })

// const setupLocalStorage = () => {
//   const groceriesFromLocalStorage = getDataFromLocalStorage(localStorageKeys.groceries);
//   if (!groceriesFromLocalStorage) {
//       setDataToLocalStorage(localStorageKeys.groceries, []);
//   }
// }