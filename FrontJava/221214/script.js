// //sukursime inputa, kur ivedus teksta ir paspaudus mygtuka,
// // tekstas atskiras kaip div elementas apacioje
// //o paspaudus ant jo, jis istrinamas

// const inputEl = document.querySelector("#todo-input");
// const btnEl = document.querySelector("#todo-btn");
// const todoListEl = document.querySelector("#todo-list");

// function deleteTodo(elementToDelete) {
//     console.log ("ivyksta delete");
//     todoListEl.removeChild(elementToDelete);
// }

// btnEl.addEventListener("click", function() {
//     const inputText = inputEl.value;
//     const todoEl = document.createElement("li");
//     todoEl.textContent = inputText;
//     inputEl.value = "";

//     todoListEl.append(todoEl);

//     todoEl.addEventListener("click", function () {
//         deleteTodo(todoEl);
//     })
// })

// // btnEl.addEventListener("click" ,  createTodo);

// function myFunction() {
//     console.log("myFunction");
// }

// const otherFunctionVariable = myFunction;
// otherFunctionVariable();
// myFunction();

// const annonymousFunctionInAVariable = function () {
//     console.log("bevarde");
// }

// annonymousFunctionInAVariable();

// let strangeFunction = function() {
//     console.log("this is strange");

//     strangeFunction = function() {
//         console.log("this is even stranger");
//     }
// };

// strangeFunction();
// strangeFunction();

/*

Programa pradeda veikti paspaudus pliusiuką.

- pasiimam tekstą iš inputo

- tikrinam ar tekstas yra

   - Jei nėra:

     - atsiranda raudonas border ant inputo.

     - return



   - Jei yra:

    - Sukuriam naują elementą su dviem mygtukais.

    - Į elementą įdedam tekstą.

    - Prie mygtukų prikabinam atskiras funkcijas. Jos aprašomos kitame flow.

    - Įdėti elementą į DOM. (dokumento medį)



*/

const inputEl = document.querySelector("#todo-input");
const todoButtonEl = document.querySelector("#todo-btn");
const todoListEl = document.querySelector("#todo-list");
const doneListEl = document.querySelector("#done-list");

todoButtonEl.addEventListener("click", addTodo);

function addTodo() {
  inputEl.style.border = "";

  const inputValue = inputEl.value;

  if (!inputValue) {
    inputEl.style.border = "1px solid red";
    return;
  }
  inputEl.value = "";
  const todo = createNewTodo(inputValue);
  todoListEl.append(todo);
}

function createNewTodo(text) {
  const textNode = document.createTextNode(text);
  const newTodo = document.createElement("li");
  const doneButton = document.createElement("button");
  doneButton.textContent = "V";
  const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  newTodo.append(textNode, doneButton, closeButton);

  function deleteTodo() {
    newTodo.remove();
  }

  closeButton.addEventListener("click", deleteTodo);

  doneButton.addEventListener("click", function() {
    deleteTodo();
    createNewDoneel(text);

  })

  return newTodo;
}

function createNewDoneel(title) {
    const newDoneEl = document.createElement("li");
    const textNode = document.createTextNode(title);
    const closeButton = document.createElement("button");
  closeButton.textContent = "X";
  newDoneEl.append(textNode, closeButton);
  doneListEl.append(newDoneEl);

  function deleteDoneEl() {
    newDoneEl.remove();
  }

  closeButton.addEventListener("click", deleteDoneEl);
}
