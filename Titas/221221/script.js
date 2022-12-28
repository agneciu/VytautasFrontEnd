const keyEl = document.querySelector("#key");
const existingKeys = document.querySelector("#existing-keys");
const valueEl = document.querySelector("#value");
const updateBtn = document.querySelector("#update-btn");
const objectDisplay = document.querySelector("#object-display");

updateBtn.addEventListener("click", addNewKey);

const user ={};

function addNewKey() {
    if (existingKeys.value) {
        user[existingKeys.value]=valueEl.value;
    } else {
        createKey();
    }


}

function createKey() {
    const newKey = keyEl.innerText;
    const newValue = valueEl.value;
    user[newKey]= newValue;
    return newKey
}

function createSelection() {
    const selection = document.createElement("selection")''
}