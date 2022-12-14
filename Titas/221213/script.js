// const num1 = 1;
// const num2 = 2;
// const num3 = 3;
// const num4 = 4;

// function multiply(x, y, j) {
//   if (j) {
//     return x * y * j;
//   }
//   return x * y;
// }

// function addNumbers(x, y) {
//   return x + y;
// }

// function algorithm(number1, number2, number3, number4) {
//   //multiply 2 numbers
//   const multiplyResult = multiply(number1, number2);
//   //add result with a number
//   const sumResult = addNumbers(multiplyResult, number3);
//   //multiply result with a number
//   const result = multiply(sumResult, number4);
//   return result;
// }

//ERRORS

//WE HAVE 5 INPUT FIELDS

// const input1 = document.querySelector('#one');
// const input2 = document.querySelector('#two');
// const input3 = document.querySelector('#three');
// const input4 = document.querySelector('#four');
// const input5 = document.querySelector('#five');

// const error1 = true;
// const error2 = true;
// const error3 = true;
// const error4 = true;
// const error5 = true;

// function addErrors() {

//     if(error1) {
//         input1.style.border = '1px solid red'; 
//     }

//     if(error2) {
//         displayErrorOnField (input2); 
//     }

//     if(error3) {
//         input3.style.border = '1px solid red'; 
//     }

//     if(error4) {
//         input4.style.border = '1px solid red'; 
//     }
//     if(error5) {
//         input5.style.border = '1px solid red'; 
//     }
// }

// function displayErrorOnField (input) {
//     input.style.border = "1px solid orange";
//     input.style.backgroundColor = "black";
// }

// function isFormValid() {
//     if (!input1.value || !input2.value || !input3.value || !input4.value || !input5.value) {
//         return false;
//     } 
//     return true;
// }

// btn.addEventListener('click', addErrors);

const firstNameInput = document.querySelector("#one");
const lastNameInput = document.querySelector("#two");
const firstNameValue = document.querySelector('#first-name');
const lastNameValue = document.querySelector('#last-name');

const btn = document.querySelector('.btn');

const container = document.querySelector("#container");


btn.addEventListener("click" , registerUser);

function registerUser() {
    //create Element
   const firstNameParagraph =  document.createElement("p");
   const firstNameValue = document.createElement("span");
   //insert Element into the document
   container.append(firstNameParagraph);
   firstNameParagraph.textContent = "First Name:";
   firstNameParagraph.append(firstNameValue);
   //add atribute(id, class) to an element
   firstNameValue.id = 'first-name';
   firstNameValue.classList.add('test-class');

   //add content to spam

   firstNameValue.textContent = firstNameInput.value;


}

