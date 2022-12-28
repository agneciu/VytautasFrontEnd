// function onOuterClick(event) {
//     console.log(container.contains(event.target));
//     if (event.target === modal) {
//         //closeModal
//     }
// }

const mainDropdownEl = document.querySelector('#main-dropdown');
const expenseContainerEl = document.querySelector('#expense-container');
const budgetContainerEl = document.querySelector('#budget-container');
const addExpenseEl = document.querySelector('#add-expense');
const currentBudget= document.querySelector('#current-budget');

mainDropdownEl.addEventListener("change" , changeOfSelect);

if (mainDropdownEl.value === "addExpense") {
    budgetContainerEl.style.display = 'none';
}

function changeOfSelect() {
    if (mainDropdownEl.value === "addExpense") {
        console.log('hello');
        expenseContainerEl.style.display = 'block';
        budgetContainerEl.style.display = 'none';
        
    } else {
        budgetContainerEl.style.display = 'block';
        expenseContainerEl.style.display = 'none';
    }
}