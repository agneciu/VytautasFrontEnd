// let svoris = prompt("What's Your weight? (kg)");
// let ugis = prompt ("What's Your height? (cm))");

// let svorisKg = Number(svoris);
// let ugisCm = Number(ugis);

// let ugisCmKv = ugisCm**2;
// const daugiklis = 10_000;

// let KMI = svorisKg / ugisCmKv * daugiklis;

// console.log(KMI);

// alert(`Jusu KMI yra ${KMI}`);

// console.log(Boolean("")); // false
// console.log(Boolean(0)); // false

// console.log(Boolean("a")); // true
// console.log(Boolean(1)); // true
// console.log(Boolean(-1)); // true

// console.log(Number(true)) // 1
// console.log(Number(false)) // 0

// const pradzia = 18;
// const valandos = Number(prompt("Kiek dabar valandu?")); // 4
// const minutes = Number(prompt("Kiek dabar minuciu?")); // 25

// let minuciuTikrinimas = minutes > 0; // boolean true
// let valandosKeitimas = Number(minuciuTikrinimas); // 1
// let skirtumasValandu = pradzia + valandosKeitimas;
// let likutisValandu = pradzia - skirtumasValandu;

// let likutisMinuciu = (60 - minutes) * valandosKeitimas;

// alert("Iki paskaitos liko ${likutisValandu} val. ir ${likutisMinuciu} min.");

/* jeigu valandos keitimas yra 1, mes rodom minuciu likuti
jeigu valandos keitimas yra 0, mes rodom nulini minuciu likuti */

// console.log("valandos", valandos, typeof valandos);
// console.log("minutes", minutes, typeof minutes);

/*
Turime gauti skirtuma tarp minuciu,
jeigu atimam minutes, valanda turi sumazeti -1,

*/

// console.log(likutisMinuciu);

// const currentHours = Number(prompt("Kiek dabar valandu?)")); // a) 9 b) 9
// const currentMinutes = Number(prompt("Kiek dabar minuciu?")); // a) 0 b) 37

// const additionalHour = Number(shouldReduceHour); // a) 0 b) 1

// const isNotTooLate = Number(currentHours < 18); // c) 1 d) 0

// const hourDifference = (18 - currentHours - additionalHour) * isNotTooLate; // a) 9 b)8
// const minuteDifference = (60 -currentMinutes) * additionalHour * isNotTooLate;

// alert('Liko ${hourDifference} val. ${minuteDifference} min.');

// console.log("A", "" + 1 + 0); // 10
// console.log("B", "" - 1 + 0); // -1
// console.log("C", true + false); // 1
// console.log("D", 6 / "3"); // 2
// console.log("E", "2" * "3"); // 6
// console.log("F", 4 + 5 + "px"); // "9px"
// console.log("G", "$" + 4 + 5); // "$45"
// console.log("H", "4" - 2); // 2
// console.log("I", "4px" - 2); // NaN
// console.log("J", "  -9  " + 5); // -9 5
// console.log("K", "  -9  " - 5); //-14

// let i = 0;

// i += 1; // i=1;

// console.log(i);

//  i++; // i +=1;

//  console.log(i);

// ++i; //i++, bet yra 1 skirtumas

// console.log(i);

//-----------------

// let y = 0;

// y = y + 1; //y++

// console.log(y++); // 0 , y isloginamas rpeis pridedant 1, 1.console.log 2.prideda +
// console.log(++y); // 2 , 1. y += 1; 2. console.log;

//----------------

// == // stringas arba skaicius gali but
// === // abu skaiciai arba abu numeriai

// console.log(1 == "1"); // true, stengiasi suvienodinti, daro konversijas
// console.log(1 === "1"); // false, visada naudojam sita

//----
//  5 > 4; //true
//  "2" > "12" //true, lygina kaip raide (kas eina anksciau, tas didesnis)
//  undefined == null ; //true
//  undefined ===null ; //false null yra defined empty

//-----------

// const metai = prompt("Kurie dabar metai?");
//if viska vercia i Boolean

/*
jeigu salyga x atitinka, veikia vienas kodas
visais kitais atvejais galime rasyti "else";
*/

// let x
// if (metai === "2022") {
//     alert("Tu teisus");
//     x = 0;
// } else {
//     alert("Tu neteisus");
//     x = 1;
// }
// console.log(x);
//-------------

// const color = prompt("Kokia automobilio spalva (raudona, geltona, melyna)?"); //
// const model = prompt("Koks modelis (irasykite metus)?");
// const make = prompt("Koks automobilio gamintojas (Ferrari ir kitos)?");
// const mileage = prompt("Kokia automobilio rida (kiek km nuvaziuota?)?");

// if (color === "raudona") {
//   // yes
//   if (Number(model) > 2010) {
//     alert("Buy");
//     // >2010
//   } else if (Number(mileage) < 50000) {
//     alert("Buy");
//   } else {
//     alert("Don't buy");
//   }
// } else {
//   // no
//   if (color === "geltona") {
//     //yes
//     if (make === "Ferrari") {
//       alert("Buy");
//     } else {
//       alert("Don't buy");
//     }
//   } else {
//     alert("Don't buy");
//   }
// }

//----------

/*

  Formula:



  weight (kg) / [height (m)]2

  Or



  [weight (kg) / height (cm) / height (cm)] x 10,000

*/

// const svoris = Number(prompt("Koks Jusu svoris (kg)?"));
// const ugisKv = Number(prompt("Koks Jusu ugis (m)?")) ** 2;

// const KMI = svoris / ugisKv;

// if (KMI < 18.5) {
//   alert("Under weight");
// } else if (KMI < 25) {
//   alert("Normal");
// } else if (KMI < 30) {
//   alert("Overweight");
// } else if (KMI < 35) {
//   alert("Obesity (Class I)");
// } else if (KMI < 40) {
//   alert("Obesity (Class II)");
// } else {
//   alert("Extreme Obesity");
// }
//-------

/*
Sukurti BMR kalkuliatorių



For men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)




To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
Sedentary (little or no exercise): calories = BMR × 1.2;
Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;
Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;
Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725; and
If you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.



// suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.
// atsakomas koks mūsų aktyvumo lygis
// atsakomas kiek kalorijų mums reikia per dieną
*/

//  const gender = prompt("What's Your gender? (men/women)");
//  const weight = Number(prompt("What's Your weight (kg)?"));
//  const height = Number(prompt("What's Your height? (cm)"));
//  const age = Number(prompt("What's Your age? (years)"));
//  const activityLevel = Number(prompt("What's Your activity level? (0, 1, 2, 3, 4)"));

// let BMR;

// if (gender === "men") {
//     BMR = 66.5 + (13.75 * weight) + (5.003 * height) - (6.75 * age);

// } else {
//     BMR = 655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age);

// }

// if (activityLevel === 0) {
//     alert(BMR * 1.2);
// } else if (activityLevel === 1) {
//     alert(BMR * 1.375);
// } else if (activityLevel === 2) {
//     alert(BMR * 1.55);
// } else if (activityLevel === 3) {
//     alert(BMR * 1.725);
// } else {
//     alert(BMR * 1.9);
// }

//-----------
//

// const cssSelector = "#some-element";
// const element = document.querySelector(cssSelector);

// element.className = "element-style";
// element.className += "active";
// console.log(element.className);

//----

// const heading = document.querySelector("#my-element > h1");
// const text = document.querySelector("#my-element > p");

// console.log(text);

//-----

// const heading = document.querySelector("#my-element h1");

// //heading.className stringas su klasem
// // heading.innerText stringas su tekstu tarp <el> </el>
// let text = heading.innerText;
// heading.innerText = "Labas vakaras";
// console.log(heading.innerText);
// //-----

// if (true) {
//     console.log("true");
// }

// //deklaracija
// function myFunction() {
//     console.log("helloFunction");
// }
// console.log("1");

// //panaudojimas
// myFunction(); //funkcija veikia tik iskvieciama
// console.log("2");

// myFunction();
// myFunction();
// myFunction();

//---- BUTTON WITH CLICKS
// const button = document.querySelector("#my-button");

// let i = 0;

// function myFunction() {
//     i++;
//     button.innerText = i;
// }

//-----DROPDOWN BUTTON

// const DROPDOWN_ACTIVE = "dropdown-menu active";
// const DROPDOWN_HIDDEN = "dropdown-menu";

// const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`);

// function toggle() {
//     if (dropdownElement.className === DROPDOWN_ACTIVE) {

//     } else {
//     dropdownElement.className === DROPDOWN_HIDDEN;
//     }
//  }

//-----

// const DROPDOWN_ACTIVE = "accordeon-content active";
// const DROPDOWN_HIDDEN = "accordeon-content";

// const dropdownElement = document.querySelector(`#accordeon .${DROPDOWN_HIDDEN}`);

// function appear() {
//     if (dropdownElement.className === DROPDOWN_ACTIVE) {

//     } else {
//         dropdownElement.className === DROPDOWN_HIDDEN;
//     }
// }

// appear();

//nerodom accordeo-content turinio
//paspaudus ant "accordeon-header" turi pasimatyti musu "accordeon-content"

// const ACCORDEON = "accordeon-content";
// const ACCORDEON_HIDDEN = "accordeon-content hidden";

// const accordeonContentElement = document.querySelector("#accordeon .accordeon-content");

// function appear() {
//     const isAccordeonContentHidden =
//         accordeonContentElement.className === ACCORDEON_HIDDEN;
//     if (isAccordeonContentHidden) {
//         accordeonContentElement.className === ACCORDEON;
//     } else {
//         accordeonContentElement.className === ACCORDEON_HIDDEN;
//     }
// }--- BURGER REPEAT

// const DROPDOWN_ACTIVE = "dropdown-menu active";
// const DROPDOWN_HIDDEN = "dropdown-menu";

// const dropdownElement = document.querySelector(`#dropdown .${DROPDOWN_HIDDEN}`);

// function toggle() {
//     if (dropdownElement.className === DROPDOWN_ACTIVE){
//         dropdownElement.className = DROPDOWN_HIDDEN;
//     } else {
//         dropdownElement.className = DROPDOWN_ACTIVE;
//     }

// }
//----
// console.log - debugging
// kintamieji
// let ir const deklaravimas
// naršyklės funkcijos
// prompt, alert
// duomenų tipai
// string, number, boolean, null, undefined
// tipų tikrinimas typeof
// operatoriai
// ===, +, -, *, /, >, <, **, !==, >=, <=, %
// if () {},  else if () {}, else {}
// function () {}
// funkcija pasiimti elementą
// const element = document.querySelector(".query")
// elemento parametrai
// element.innerText
// element.className

///--- HOW TO CHNAGE BROWSER MODE (LIGHT/DARK)?

// const bodyElement = document.querySelector("body");

// function changeMode() {
//     if (bodyElement.className === "light") {
//         bodyElement.className = "dark";
//     } else {
//         bodyElement.className = "light";
//     }
// }

//1. salyga - jeigu sviesus fonas, tada fonas pasikeicia i tamsu;
// sviesus fonas yra class="light"
//kad pasikeistu i tamsu body class turi pasikeisti i "dark"

//2. salyga - jeigu fonas tamsus, pasikeicia i sviesu
//tamsus fonas yra class="dark"
//kad pasikeistu i sviesu body class turi pasikeisti i "light"

//--- KMI (BMI) SKAICIUOKLE (patobulinta)

//paimti info is inputu
//patikrinti inputu reiksmes
//atvaizduoti reiksmes
//atlikti skaiciavima (po paspaudimo)
//atvaizduoti rezultata

/*
Visa programa veiks tik paspaudus mygtuka.
0. Cleanup, isvalom viska is praeitu atsakymu, klaidu and t.t.
1. paspaudziamas mygtukas
2. paleidziama funkcija, kuri:
 -pasiima reiksmes is inputu
 -patikrina reiksmes is inputu (ar reiksme daugiau uz nuli)
 -JEIGU reiksmes atitinka SALYGA:
    neatitinka) ismeta klaida
    atitinka) atlieka skaiciavimus

KA TURIME NUTRINTI?
atsakyma,
klaidos teksta


senas reiksmes is inputu,

1. Sukurti BMI kalkuliatorių, kuris parodo ne svorio indeksą, o atsako ar mes turime viršsvorį ar ne.
idx <= 18.5 - "Underweight"
idx <= 25.0 - "Normal"
idx >= 30.0 - "Overweight"
idx >= 40.0 - "Obese"

*/

// console.log("labukas");

// const heightInput = document.querySelector("#height");
// const weightInput = document.querySelector("#weight");

// const heightError = document.querySelector("#height-error");
// const weightError = document.querySelector("#weight-error");

// const result = document.querySelector("#result");

// console.log(heightInput, weightInput, heightError, weightError, result);

// function calcBMI() {
//     cleanupResults();
//     const heightCm = Number(heightInput.value);
//     const weightKg = Number(weightInput.value);

    // const isHeightValid = heightCm > 0;
    // const isWeightValid = weightKg > 0;

//     if (isHeightValid) {
//         if(isWeightValid) {
//             const BMI = (weightKg / heightCm / heightCm) * 10_000;
//             result.innerText = BMI;
//             heightInput.value = "";
//             weightInput.value = "";
//         } else {
//             showWeightError();
//         }
//     } else {
//         showHeightError();
//         if (!isWeightValid) {
//             showWeightError();
//         }
//     }
// }

// function cleanupResults() {
//     heightError.innerText = "";
//     weightError.innerText = "";
//     result.innerText = "";
// }

// function showHeightError() {
//     heightError.innerText = "Error";
// }

// function showWeightError() {
//     weightError.innerText = "Error";
// }
//-------

// if (isHeightValid) {
//     if (isWeughtValid) {
//         //A.
//         //musu success path
//     } else {
//         // svoris nevalidus
//     }
// } else {
//     //aukstis nevalidus
//     if (!isWeightValid) {
//         //svoris nevalidus
//     }
// }

// Kad naudotis IR (&&)Coperatoriumi abi salygos privalo buti igyventos.
// if (isHeightValid && isWeightValid) {
//     // A.
//     console.log(true && true);
// } else {
//     if (!isHeightValid) {
//         // Neteisingas svoris.
//     }
//     if (!isWeightValid) {
//         //Netesingas aukstis.
//     }
// }

// Jei bent viena salyga bus igyvendintas, jis veiks
// if (!isHeightValid || !isWeightValid) {
//     if (!isHeightValid) {
//         // Neteisingas svoris.
//     }
//     if (!isHeightValid) {
//         // Neteisingas svoris.
//     }
// } else {
//     //Success path
//     console.log(true && true);
// }

// !isHeightValid || !isWeightValid yra priesingos isHeightValid && isWeightValid

// 2 operatoriai:
//and - &&      IR
//or - ||     ARBA

//2. Sukurti BMR kalkuliatoriųFor men: BMR = 66.5 + (13.75 * weight in kg) + (5.003 * height in cm) - (6.75 * age)
//For women: BMR = 655.1 + (9.563 * weight in kg) + (1.850 * height in cm) - (4.676 * age)
//To determine your total daily calorie needs, multiply your BMR by the appropriate activity factor, as follows:
//Sedentary (little or no exercise):
// calories = BMR × 1.2;Lightly active (light exercise/sports 1-3 days/week): calories = BMR × 1.375;Moderately active (moderate exercise/sports 3-5 days/week): calories = BMR × 1.55;Very active (hard exercise/sports 6-7 days a week): calories = BMR × 1.725;
//andIf you are extra active (very hard exercise/sports & a physical job): calories = BMR × 1.9.// suvedami atsakymai ar esam vyras/moteris, svoris aukštis ir amžius.// atsakomas koks mūsų aktyvumo lygis// atsakomas kiek kalorijų mums reikia per dieną

// function calcBMR() {
//   //reikia duomenu ugis,svoris, metai,lytis, aktyvumas
//   //reikia pasiimti inputus ir issaugoti juos kaip kintamuosius
//   const heightEl = document.querySelector("#height");
//   console.log(heightEl);

//   const weightEl = document.querySelector("#weight");
//   console.log(weightEl);

//   const ageEl = document.querySelector("#age");
//   console.log(ageEl);

//   const height = Number(heightEl.value);
//   console.log(height);

//   const weight = Number(weightEl.value);
//   console.log(weight);

//   const age = Number(ageEl.value);
//   console.log(age);

//   //  console.log(document.querySelector('input[name="gender"]:checked'));

//   //  const gender = document.querySelector('input[name="gender"]:checked').value;

//   const genderEl = document.querySelector('input[name="gender"]:checked');

//   let gender;

//   if (genderEl) {
//     // alert("error");
//     const gender = genderEl.value;
//     console.log(gender);
//   }

//   const activityEl = document.querySelector('input[name="activity"]:checked');

//   let activity;

//   if (activityEl) {
//     // alert("error");
//     const activity = activityEl.value;
//     console.log(activity);
//   }

//   const isHeightValid = height > 0;
//   const isWeightValid = weight > 0;
//   const isAgeValid = age > 0;
//   const isGenderValid = "man" === gender || "female" === gender;
//   console.log(isGenderValid);

//   const isActivityValid = "sedentary" === activity || "light" === activity || "moderately" === activity || "very" === activity || "extra" === activity;
//   console.log(isActivityValid);

// }
//-----CALCULATOR

// 1. Kažkoks "display"
// 2. Yra 2 rūšių mygtukai: skaičiai ir operatoriai
/**
 *
 * 1. Vartotojas įveda skaičių
 *
 * 2. (optional) Vartotojas gali įvesti ir antrą ir trečią skaičių,
 * jie bus sudedami kaip stringai.
 * T.y. paspaudus "2" ir "5" ir "9" gausime "259".
 *
 * 3. Vartotojas paspaudžia operatorių ir kažkur išsaugoma vertė,
 * o "display" įvestas skaičius neberodomas.
 *
 * 4. Įvedamas kitas skaičius, gali būti daugiau negu vienas,
 * t.y. panašiai kaip antram žingsnyje.
 *
 * 5. Paspaudžiama lygu, kažkur išsaugoma antroji vertė,
 * įvyksta skaičiavimas ir ir rezultatas parodomas "display" vietoje antrosios įvesties.
 *
 *
 * Užduotis: Darom vieną skaičiaus mygtuką, pvz.: 2, daugybos operatorių ir lygu.
 *
 */

const displayEl = document.querySelector("#display");
console.log(displayEl);
let temporaryValue;
let operationType;

function call1() {
  const value = 1;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call2() {
  const value = 2;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call3() {
  const value = 3;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call4() {
  const value = 4;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call5() {
  const value = 5;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call6() {
  const value = 6;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call7() {
  const value = 7;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call8() {
  const value = 8;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call9() {
  const value = 9;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function call0() {
  const value = 0;
  displayEl.innerText += value;
  // console.log(displayEl.innerText);
}

function saveValue() {
  if (
    typeof temporaryValue === "number" &&
    typeof operationType !== "undefined"
  ) {
    let result;

    if (operationType === "multiply") {
      result = temporaryValue * Number(displayEl.innerText);
      console.log(result);
    } else if (operationType === "devide") {
      result = temporaryValue / Number(displayEl.innerText);
      console.log(displayEl.innerText, temporaryValue);
    } else if (operationType === "add") {
      result = temporaryValue + Number(displayEl.innerText);
      console.log(displayEl.innerText, temporaryValue);
    } else if (operationType === "subtract") {
      result = temporaryValue - Number(displayEl.innerText);
      console.log(displayEl.innerText, temporaryValue);
    }
    displayEl.innerText = result;
  }
}

function multiply() {
  saveValue() ;
  temporaryValue = Number(displayEl.innerText);
  // console.log(temporaryValue);
  
}
displayEl.innerText = "";
  operationType = "multiply";


function devide() {
  saveValue() ;
  // console.log(temporaryValue);
  displayEl.innerText = "";
  operationType = "devide";
}

function add() {
  saveValue() ;
  // console.log(temporaryValue);
  displayEl.innerText = "";
  operationType = "add";
}

function subtract() {
  saveValue() ;
  // console.log(temporaryValue);
  displayEl.innerText = "";
  operationType = "subtract";
}

function calculateResult() {
  let result;
  if (operationType === "multiply") {
    result = temporaryValue * Number(displayEl.innerText);
    console.log(result);
  } else if (operationType === "devide") {
    result = temporaryValue / Number(displayEl.innerText);
    console.log(displayEl.innerText, temporaryValue);
  } else if (operationType === "add") {
    result = temporaryValue + Number(displayEl.innerText);
    console.log(displayEl.innerText, temporaryValue);
  } else if (operationType === "subtract") {
    result = temporaryValue - Number(displayEl.innerText);
    console.log(displayEl.innerText, temporaryValue);
  }
  displayEl.innerText = result;

  displayEl.innerText = "";
  temporaryValue = undefined;
  operationValue = undefined;
}

function clearResult() {
  displayEl.innerText = "";
  temporaryValue = undefined;
  operationValue = undefined;
}
