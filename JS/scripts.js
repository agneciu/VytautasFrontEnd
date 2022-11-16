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

const answer1 = prompt("Definite budget? (y/n)");
const answer2 = prompt("Known champion for it? (y/n)");
const answer3 = prompt("Clear project scope? (y/n)");
const answer4 = prompt("Achievable Timescale? (y/n)");
const answer5 = prompt("Alternative funding? (y/n)");
const answer6 = prompt("Happy to profit? (y/n)");

if (answer1 === "y") {
    if (answer2 === "y") {
        if (answer3 === "y"){
            if (answer4 === "y") {
                alert("Go for it");
            } else {
                alert("Get more time");
            }
        } else {
            if (answer5 === "y") {
                alert("Cash it");
            } else {
                alert("Explain how it matters");
            }
        }
    } else {
        alert("Leave it alone");
    }
} else {
    if (answer5 === "y") {
        alert("Sort out funding");
    } else {
        alert("Leave it alone");
    }
}