import { getDataFromLocalStorage } from "./getDataFromLocalStorage.js";
import { setDataToLocalStorage } from "./setDataToLocalStorage.js";
import { setUpLocalStorage } from "./setUpLocalStorage.js";
import { localStorageKeys } from "./localStorageKeys.js";

const groceryInput = document.querySelector("#grocery-input");
const addButton = document.querySelector("#add-btn");
const groceryList = document.querySelector("#grocery-list");
const deleteAllButton = document.querySelector("#remove-all-btn");


setUpLocalStorage();

let groceries = [];

function addGroceries() {
    groceryList.innerText = "";



    groceries.forEach((newGroceries, index) => {
      const newContainer = document.createElement("div");
      newContainer.classList.add("grocery-container");
      const newItem = document.createElement("p");
      newItem.textContent = newGroceries.name;
      newItem.classList.add('grocery-added')
      newItem.textContent = newGroceries;
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
        const groceryItems = getDataFromLocalStorage(localStorageKeys.groceries);
        const editableGroceryIndex = groceryItems.findIndex((groceryFromLocalStorage) => {
          if (groceryFromLocalStorage.id === newGroceries.id) {
            return true;
          }
        })
        console.log(editableGroceryIndex);
        groceryInput.value = newGroceries;
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
        
      });
      
      groceryList.append(newContainer);
    });
    
  }

  addButton.addEventListener("click", () => {
    const newGroceries = {
      id: Math.random(),
      name: groceryInput.value,
    };

    if (addButton.textContent === "Add") {
      groceries.push(groceryInput.value);
      groceryInput.value = "";
    } else {
      groceries.push(groceryInput.value);
      addButton.textContent = "Add";
      groceryInput.value = "";
    }
    addGroceries(newGroceries);
    const groceryItems = getDataFromLocalStorage(localStorageKeys.groceries);

    setDataToLocalStorage(localStorageKeys.groceries, [...groceryItems,newGroceries]);
    
  });
  
  deleteAllButton.addEventListener("click", () => {
    groceries = [];
    addGroceries();
    
  });
  
  addGroceries();


const groceriesFromLocalStorage = getDataFromLocalStorage(localStorageKeys.groceries);
groceriesFromLocalStorage.forEach((grocery) => {
  addGroceries(grocery);
});











  
