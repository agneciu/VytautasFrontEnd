// const selectElement = document.querySelector("#ice-cream");

// function selectListener(event) {
//   console.log("even", event);
//   console.log("event.target", event.target);
//   console.log("event.target.value", event.target.value);
//   console.log("slectElement", selectElement);
// }

// selectElement.addEventListener("change", selectListener);

// window.addEventListener("resize", function (evt) {
//   console.log("resize");
// });


//paspaudus ant bet kurio inputo, i paragrafa butu prideda eilute, kas buvo pakeista

// const changeLogElement = document.querySelector("#change-log");
// const ageSelectElement = document.querySelector("#age");
// const genderSelectElement = document.querySelector("#gender");

// function changeListener(event) {
//     const selectName = event.target.name;
//     const selectValue = event.target.value;

//     const text = `User has changed ${selectName} select with a value ${selectValue}`;
//     console.log(text);

//     changeLogElement.innerText += "\n" + text;
// } 


// ageSelectElement.addEventListener("change", changeListener);
// genderSelectElement.addEventListener("change", changeListener);

//

// document.querySelector("#my-input").addEventListener("input", function (event) {
//     console.log(event.target.value)
// })

// let x, y;

// x = 2;
// y = 3;

// function add() {
//     sum = x + y;
// }

// pureAdd(2,3);

// function pureAdd(a, b) {
//     return a +b;
// }

// Devide and Multiply

const firstEl = document.querySelector("#firstNumber");
const secondEl = document.querySelector("#secondNumber");
const multiplyBtn = document.querySelector("#multiply-btn");
const divideBtn = document.querySelector("#divide-btn");
const result = document.querySelector("#result");

multiplyBtn.addEventListener("click", function () {
    const firstValue = getElementValue(firstEl);
    const secondValue = getElementValue(secondEl);
    const resultEl = multiply(firstValue, secondValue);
    console.log(resultEl);
    result.innerText = resultEl;


})

divideBtn.addEventListener("click", function () {
    const firstValue = getElementValue(firstEl);
    const secondValue = getElementValue(secondEl);
    const resultEl = divide(firstValue, secondValue);
    console.log(resultEl);
    result.innerText = resultEl;
})

function getElementValue(element) {
    const elementValue = Number(element.value);
    return elementValue;
}

function multiply(firstValue, secondValue) {
    return firstValue * secondValue;
}

function divide(firstValue, secondValue) {
    return firstValue / secondValue;
}

