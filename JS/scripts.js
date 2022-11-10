let svoris = prompt("What's Your weight? (kg)");
let ugis = prompt ("What's Your height? (cm))");

let svorisKg = Number(svoris);
let ugisCm = Number(ugis);

let ugisCmKv = ugisCm**2;
const daugiklis = 10_000;

let KMI = svorisKg / ugisCmKv * daugiklis;

console.log(KMI);

alert(`Jusu KMI yra ${KMI}`);