// const btn = document.querySelector("#click-btn");
// const input = document.querySelector(".input");
// const inputValue= document.querySelector(".input-value");

// btn.addEventListener("click", logInput);

// function logInput() {
//     const now = new Date().toLocaleString();
//     inputValue.textContent = now;
// }
//---TASK

const helpButton = document.querySelector(".help-btn");
const closeButton = document.querySelector(".close-btn");
const submitButton = document.querySelector(".submit-btn");
const containerWindow = document.querySelector("#container");

helpButton.addEventListener("click", openWindow);
closeButton.addEventListener("click", closeWindow);
submitButton.addEventListener("click", closeWindow);
submitButton.addEventListener("click", submitData);
submitButton.addEventListener("click", isInputValid);

function openWindow() {
  containerWindow.className = "visible";
  console.log("hello");
}

function closeWindow() {
  containerWindow.className = "invisible";
}

const firstNameInp = document.querySelector("#fname");
const lastNameInp = document.querySelector("#lname");
const emailInp = document.querySelector("#email");
const complaintInp = document.querySelector("#complaint");

const nameReceived = document.querySelector("#received-name");
const lastnameReceived = document.querySelector("#received-lastname");
const emailReceived = document.querySelector("#received-email");
const complaintReceived = document.querySelector("#received-complaint");
const complaintDate = document.querySelector("#complaint-date");

function isInputValid() {
    const firstName = firstNameInp.value;
    const lastName = lastNameInp.value;
    const email = emailInp.value;
    const complaint = complaintDate.value;

if (firstName && lastName && email && complaint) {
    return true;
} else {
    return false;
} }



function submitData() {
    
    

}

