// user objektą, kuris turi name ir email
// jis paduodamas į funkciją
// funkcijoje jis destruktūrizuojamas ir pasiimamas tik email.
// išlogginti email

// const user = {
//     name: "Jonas",
//     email: "jonas@gmail.com",
// };

// function logEmail(user) {
//     const { email } = user;
//     console.log(email);
// } 

// logEmail(user);


// const obj = {
// a: 'text',
// b: 'text 2',
// c: 'text 3',
// };

// const { a,  ...restObj } = obj; // ...restObj surenka visa likusi objekta


// console.log(a);
// console.log(obj);
// console.log(restObj);

//isbandykime funkcijoje

// const user = {
//     email: "email@email.com",
//     name:"username",
//     password: "password",
// };

// // function logEmailAndReturnRest({email, ...restUser}) {
// //     console.log(email);
// //     return restUser
// // };

// // const result = logEmailAndReturnRest(user);

// // console.log("result", result);

// const { ...clone } = user; // sukuriame objekto klona

// console.log('user', user);
// console.log('clone', clone);
// console.log(user === clone); //false

//sukurti produkto objekta, kuris turi pavadinima, likuciu kieki ir kaina
//funkcijos argumentuose destrukturizuoti produkta ir issiimti likucius, likusi objekta grazinti
// funkcijoje issiloginti likuciuis
//islogginti likusi objekta, kuris grizta kaip rezultatas


//rest operatorius 

// const product = {
//     name: "food",
//     stock: "6",
//     price: "30",
// };

// function logProductStock ({ stock, ...restProduct }) {
//     console.log(stock);
//     return restProduct
// };

// const result = (logProductStock(product)); 

// console.log(result);

//spread operatorius

// const obj = {
//     a: "text",
//     b: "text2",
// };


// const copy = { ...obj};// dazniau naudojamas kopijavimo metodas

// const obj2 = {
//     ...obj, //klonuoja objekta is objekto, isskleidzia jo turini
//     c: "text3",
//     a: obj.a + "(extended a)",
// };

// const { ...rest} = obj2;

// console.log("obj", obj);
// console.log("copy", copy);
// console.log("obj2", obj2);

// Sukurti du objektus:

// object user:
//   name string
//   email string
// ir

// object personalInfo:
//   address string
//   age number
 

// Parašyti funkciją "createCustomer", kuri priima šiuos du objektus kaip argumentus ir grąžina customer objektą, sukurtą joje.

 

// paleidus funkciją, gautą objektą išlogginti.


// const user = {
//     name: "vardenis",
//     email: "vardenis@vardenis.lt",
// };

// const personalInfo = {
//     address: "Vilnius",
//     age: 21,
// };

// function createFunction(user, personalInfo) {
// const customer = {
//     ...user,
//     ...personalInfo,
// };
// return customer
// };


// const result = createFunction(user, personalInfo);
// console.log(result);
// let time = 0;


// function tick () {
//     time++;
//     console.log(time);
// }



// const currentInterval = setInterval(tick, 1000); /// ms -> 1 sekunde yra 1 000 ms, suskuria intervala

// function stop () {
//     clearInterval(currentInterval); // sustabdo laikmati
// };

// import timerState from "./state.js";

// const elements = {
//  startButton: document.querySelector("#start-btn"),
//  stopButton: document.querySelector("#stop-btn"),
//  timerBox: document.querySelector("#timer"),
// };

// function updateTimerText(timeElapsed) {
//     elements.timerBox.textContent = timeElapsed;

//     //0 iki 59 sekundziu
//     const seconds = timeElapsed % 60;
//     //0 iki 59 minutes
//     const minutes = Math.floor(timeElapsed / 60) % 60;
//     //0 iki n valandos (ne circular watch)
//     const hours = Math.floor(Math.floor(timeElapsed / 60) / 60);

//     elements.timerBox.textContent = `${hours}:${minutes}:${seconds}`;

    
// };


// elements.startButton.addEventListener("click", function () {
//     timerState.start(updateTimerText);
// });
// elements.stopButton.addEventListener("click", function () {
//     timerState.stop();
// });

const age = 17;

let votingText;
if (age < 18) {
    votingText = "You can vote";
} else {
    votingText = "You cannot vote";
};

const t_votingText = age < 18 ? "You can vote" : "You cannot vote";

const variableOne = age > 18 ? 'You can vote' : 'You cannot vote';
console.log(variableOne);

const login = "Director";
let message;
if (login == "Employee") {
    message = "Hello";
} else if (login == "Director") {
    message = "Greetings";
} else if (login == "") {
message = "No login";}
else {
   message = "";
};

const t_message = login == "Employee" ? "Hello" : login == "Director" ? "Greetings" : login == "" ? "No login" : "";
console.log(t_message);