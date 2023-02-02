const dataContainer = document.querySelector("#data");
const input = document.querySelector("#input");
const button = document.querySelector("#button");

const userName = "UserName";



button.addEventListener("click", () => {
    dataContainer.textContent += dataContainer.textContent ? `, ${input.value}` : input.value;
    const dataToStore = JSON.stringify([{ name: 'name'}]) ;
    //window reprezentuoja browseri
    window.sessionStorage.setItem("userName", dataToStore);
})

const userNames = window.sessionStorage.getItem("userName");

console.log(JSON.parse(userNames));

if (userNames) {
    dataContainer.textContent = userNames;
}