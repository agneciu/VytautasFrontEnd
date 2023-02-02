// Acceptance Criteria:
//     1. Display input where user can enter grocery which he wants to purchase
//     2. Display button that when clicked will add grocery to the list of groceries
//         a. Clear input when grocery is added
//     3. Display list of groceries that has been added by the user
//         a. It should display grocery name
//         b. It should display edit icon
//             i. When clicked it should populate input with grocery name that is being edited, change button next to input to be 'Edit' and once 'Edit' button is clicked it should update grocery with new name.
//                 Once groceries are updated it should clear input.
//         c. It should display delete icon
//             i. When clicked it should delete grocery from the list.
//     4. Display delete all button, when clicked it should remove all groceries from the list.
//     5. All groceries should be stored in localStorage so that when user refreshes the page, all the data that is stored should be displayed.

const groceryInp = document.querySelector("#grocery-input");
const listContainer = document.querySelector("#list-container");
const groceryItem = document.querySelector("#grocery-item");
const addButton = document.querySelector("#add-btn");

let groceries = [];

// addButton.addEventListener("click", () => {
//     addingNewItem()  
// });

// <!-- <div class="grocery-item" id="grocery-item"></div>
// <button class="edit-text-btn" id="edit-text-btn">
//   <span class="material-symbols-outlined"> edit </span>
// </button>
// <button class="trash-btn" id="trash-btn">
//   <span class="material-symbols-outlined"> delete </span>
// </button>

function addingNewItem() {
    listContainer.textContent = "";
    groceries.forEach((grocery,index) => {
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



