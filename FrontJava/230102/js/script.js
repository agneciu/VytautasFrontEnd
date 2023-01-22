// const obj = {
//     email: "myemail@gmail.com",
//     myName: "Vardenis",
//     someMethod() {
//         console.log("hello");
//     },
//     innerObject: {
//         someProperty: "hello",
//     }
// };

// // const { myName: anotherName, email, someMethod, innerObject: { someProperty } } = obj; // nusikopijuojame myName is objekto, naudojant jo rakta


// // console.log(email);
// // console.log(anotherName);
// // console.log(someProperty);
// // someMethod();

// const user = {
//     email: "myemail@gmail.com",
//     name: "Vardenis",
//     age: 27,
// };

// //create a function that logs user.email and user.name

// logUser(user);

// function logUser({name, age, email}) {
//     name = "othername";
//     console.log(email);
//     console.log(name);
//     console.log(age);
// };

// //sukurkite funkcija, kuri priima objekta su "prekiu kaina", "siuntimo kaina" ir "administraciniu mokesciu"
// //ir islogina PVM (21 procentas), nuo sudetos sumos
// //funkcija turi destrukturizuoti tris atributus

// //iskviesti funkcija du kartus
// //1. sukurti objekto konstanta ir ja paduoti i funkcija
// //2. paduoti inline objekta i funkcija nenaudojant konstantos

// const shopping = {
//     price: 12,
//     shippingPrice: 3,
//     administrativePrice: 2,
// }

// paymentWithVAT(shopping);

// function paymentWithVAT({price, shippingPrice, administrativePrice}) {
//     console.log(price , shippingPrice , administrativePrice);
//     console.log((price + shippingPrice + administrativePrice) * 1.21);
// };

// paymentWithVAT({
//     price: 120,
//     shippingPrice: 30,
//     administrativePrice: 20,
// })

//


// import { logStuff, x } from "./other.js";// named export
// import myvar from "./other.js";// default export

// logStuff(x);
// logStuff(myvar);

import {logMe} from "./logger.js";
import {TEXT_1, TEXT_2, TEXT_3} from "./constants.js";

logMe(TEXT_1, TEXT_2, TEXT_3);
