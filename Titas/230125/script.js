const favouriteColor = ['black'];

favouriteColor.push('green');
favouriteColor.push('brown');
favouriteColor.unshift('white');
favouriteColor.pop();
favouriteColor.shift();

favouriteColor[0] = "red";

const someValue = "firstName"; 
const obj = { firstName: "Verdenis"};
obj.firstName = "Vardenis";
obj[someValue] = "test";

console.log(obj[someValue]);

console.log(favouriteColor);

const testArr = [];

testArr[5] = "black";

console.log(testArr);

// // kazkoks apavadinimas(abc) of arejus
// for (let color of ['black', 'yellow']) {
//     console.log(color)
// }

let userFavouriteColors= '';

favouriteColor.forEach((color, index) => {
    userFavouriteColors += `${index === 0 ? '' : ','}${color}` ;
});

const favouriteColorsWithoutRed = favouriteColor.filter((color) => {
    return color === 'red';

})

console.log(favouriteColor);
console.log(`Favourite colors of user are: ${userFavouriteColors}`);

//for cikle sklaiusteliuose nurodome boolean salyga, veiks kol salyga bus true, prie false sustos
// const maxIterations = 5;
// for(let index = 0; index < maxIterations; index++) {
//     console.log(Math.random());
// };

// console.log(maxIterations)

// let currentIteration = 0;
// while(currentIteration < 5) {
//     console.log(Math.random());
//     currentIteration++ //tik tada ciklas sustos, kitu atveju currentIteration reiksme nesikeis
// }

// do {
// console.log(Math.random())
// currentIteration++
//  } while (currentIteration < 5);

//do while, pirma padaro, o paskui tikrina. garantuoja, kad ciklas bent viena karta suveiks