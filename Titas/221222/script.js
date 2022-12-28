// console.log('---------DELETION-----------');
// const dog = {
//     name: 'doggy' ,
//     car: 'Audi'
// };

// delete dog.car;

// console.log(dog);

// const dynamicKey = 'name';

// delete dog.car ;
// delete dog[dynamicKey];

// console.log(dog);

// ////Equality (lygybe)
// console.log('---------EQUALITY-----------');
// //kaip palyginti objektus?

// const object1 = {};
// const object2 = {};

// console.log(object1 === object2);

// //recursive function calls itself until it doesn't, taht's why we need if to stop it
// let step = 0;
// function recursive() {

//     if (step === 10) {
//         return;
//     }

//     step++;
//     console.log(step);
//     recursive()
// }

// recursive();

/////
// Create a wizard for user to register:
// 1. Wizard should be be in four steps:
// a. step 1 three fields:
//     i. first name (required)
//     ii. last name (required)
//     iii. email (required)
// b. step 2 three fields:
//     i. primary address (required)
//     ii. secondary address (optional)
//     iii. shirt size (required)
// c. step 3 two fields:
//     i. password (required)
//     ii. repeat password (required)
// d. step 4 should display final object
// 2. User can click on 'Continue' button to move forward in steps
// 3. If user is not in step 1 then 'Back' button should be displayed to move backwards in steps
// 4. Validation should be inplemented for each step:
// a. for required fields, their border should be changed to red if validation doesn't pass
// b. step 3 should also check if passwords match, if they don't then additionally display error message above 'Passwords should match!'
// c. email validation should also check if email is of valid format
// 5. Errors should be cleared on step changed

const step0Content = document.querySelector(".step-0");
const step1Content = document.querySelector(".step-1");
const step2Content = document.querySelector(".step-2");
const step3Content = document.querySelector(".step-3");

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const emailInput = document.querySelector("#email");

const primaryAddressInput = document.querySelector("#primaryAddress");
const secondaryAddressInput = document.querySelector("#secondaryAddress");
const shirtSizeInput = document.querySelector("#shirtSize");

// const passwordInput = document.querySelector("#password");
// const repeatPasswordInput = document.querySelector("#repeatPassword");

const backBtn = document.querySelector("#back-btn");
const continueBtn = document.querySelector("#confirm-btn");

//result object
const result = {
  step: 0,
  user: {},
};
const hiddenClass = "hidden";
const errorClass = "error";

continueBtn.addEventListener("click", onContinue);
backBtn.addEventListener("click", onBack);

function onContinue(event) {
    event.preventDefault();
    switch (result.step) {
        case 0:
    if (
      !firstNameInput.value ||
      !lastNameInput.value ||
      !emailInput.value ||
      emailInput.validity.typeMismatch
    ) {
      if (!firstNameInput.value) {
        applyErrorToInput(firstNameInput);
      }
      if (!lastNameInput.value) {
        applyErrorToInput(lastNameInput);
      }
      if (!emailInput.value || emailInput.validity.typeMismatch) {
        applyErrorToInput(emailInput);
      }
    } else {
      // sukurs firstName eilute user'y
      result.user.firstName = firstNameInput.value;
      result.user.lastName = lastNameInput.value;
      result.user.emailInput = emailInput.value;
      //pakeliam step'a is nuolio i viena
      result.step += 1;
      displayWizzardStep(1);
    } break;
  } if (result.step === 1) {
    if (!primaryAddressInput.value || !shirtSizeInput.value)
      if (!primaryAddressInput.value) {
        applyErrorToInput(primaryAddressInput);
      }
    if (!shirtSizeInput.value) {
      applyErrorToInput(shirtSizeInput);
    } else {
      result.user.primaryAddress = primaryAddressInput.value;
      result.user.shirtSize = shirtSizeInput.value;

      if (secondaryAddressInput.value) {
        result.user.secondaryAddress = secondaryAddressInput.value;
      }
    }
  }
}

function applyErrorToInput(input) {
  input.classList.add("error");
}

function displayWizzardStep(step) {
  switch (step) {
    case 0:
      step0Content.classList.remove(hiddenClass);
      step1Content.classList.add(hiddenClass);
      step2Content.classList.add(hiddenClass);
      step3Content.classList.add(hiddenClass);
      backBtn.classList.add(hiddenClass);
      break;

    case 1:
      step0Content.classList.add(hiddenClass);
      step1Content.classList.remove(hiddenClass);
      step2Content.classList.add(hiddenClass);
      step3Content.classList.add(hiddenClass);
      backBtn.classList.remove(hiddenClass);
      break;

    case 2:
      step0Content.classList.add(hiddenClass);
      step1Content.classList.add(hiddenClass);
      step2Content.classList.remove(hiddenClass);
      step3Content.classList.add(hiddenClass);
      backBtn.classList.remove(hiddenClass);
      break;

    case 3:
      step0Content.classList.add(hiddenClass);
      step1Content.classList.add(hiddenClass);
      step2Content.classList.add(hiddenClass);
      step3Content.classList.remove(hiddenClass);
      backBtn.classList.remove(hiddenClass);
  }
  //   if (step === 0) {
  //     step0Content.classList.remove(hiddenClass);
  //     step1Content.classList.add(hiddenClass);
  //     step2Content.classList.add(hiddenClass);
  //     step3Content.classList.add(hiddenClass);
  //     backBtn.classList.add(hiddenClass);
  //   }
  //   if (step === 1) {
  //     step0Content.classList.add(hiddenClass);
  //     step1Content.classList.remove(hiddenClass);
  //     step2Content.classList.add(hiddenClass);
  //     step3Content.classList.add(hiddenClass);
  //     backBtn.classList.remove(hiddenClass);
  //   }

  //   if (step === 2) {
  //     // toggle kaip jungiklis - jeigu yra klase - nuima, jeigu nera prideda
  // step0Content.classList.add(hiddenClass);
  // step1Content.classList.add(hiddenClass);
  // step2Content.classList.remove(hiddenClass);
  // step3Content.classList.add(hiddenClass);
  // backBtn.classList.remove(hiddenClass);
  //   }

  //   if (step === 3) {
  // step0Content.classList.add(hiddenClass);
  // step1Content.classList.add(hiddenClass);
  // step2Content.classList.add(hiddenClass);
  // step3Content.classList.remove(hiddenClass);
  // backBtn.classList.remove(hiddenClass);
  //   }
}

function clearErrors() {
firstNameInput.classList.remove(errorClass);
lastNameInput.classList.remove(errorClass);
emailInput.classList.remove(errorClass);
firstNameInput.classList.remove(errorClass);
firstNameInput.classList.remove(errorClass);
}

function onBack(event) {
    event.preventDefault();
    displayWizzardStep(result.step - 1);
    result.step -= 1;
}

// const containerOne = document.querySelector("#container1");
// const containerTwo = document.querySelector("#container2");
// const containerThree = document.querySelector("#container3");
// const containerFour = document.querySelector("#container4");

// containerTwo.style.display='none';
// containerThree.style.display='none';
// backBtn.style.display = 'none';

// submitBtn.addEventListener('click',changeForm);
// backBtn.addEventListener ('click', backForm);

// function changeForm() {
//    if(isFirstFormValid()){
//     proceedForm();
//    } else {
//     showErrors();
// } }

// function proceedForm() {
//     console.log("hello");
//     containerOne.style.display='none';
//     containerTwo.style.display='block';
//     backBtn.style.display = 'block';
//     if(isSecondFormValid()) {

// } else {
//     showErrors();
// }
// }

// function backForm() {

// }

// function showErrors() {
//     if (!firstName.value) {
//         applyErrorToField(firstName);
//     }
//     if (!lastName.value) {
//         applyErrorToField(lastName);
//     }
//     if (!email.value || email.validity.typeMismatch) {
//         applyErrorToField(email);
//     }

// }

// function applyErrorToField(field) {
//     field.style.border = "1px solid red";
// }

// function isFirstFormValid() {
//     if (!firstName.value || !secondaryAddress.value || email.validity.typeMismatch) {
//         return false;
//     }

//     clearErrors();
//     return true;
// }

// function clearErrors() {
//     clearErrorFromField(firstName);
//     clearErrorFromField(lastName);
//     clearErrorFromField(email);
// }

// function clearSecondErrors() {
//     clearErrorFromField(primaryAddress);
//     clearErrorFromField(lastName);
//     clearErrorFromField(shirtSize);
// }

// function isSecondFormValid() {
//     if (!primaryAddress.value || !lastName.value || !shirtSize.value) {
//         return false;
//     }

//     clearSecondErrors();
//     return true;
// }

// function clearErrorFromField(field) {
//     field.style.border = "1px solid gray";
// }
