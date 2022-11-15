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

console.log("A", "" + 1 + 0); // 10
console.log("B", "" - 1 + 0); // -1
console.log("C", true + false); // 1
console.log("D", 6 / "3"); // 2
console.log("E", "2" * "3"); // 6
console.log("F", 4 + 5 + "px"); // "9px" 
console.log("G", "$" + 4 + 5); // "$45"
console.log("H", "4" - 2); // 2
console.log("I", "4px" - 2); // NaN
console.log("J", "  -9  " + 5); // -9 5
console.log("K", "  -9  " - 5); //-14
