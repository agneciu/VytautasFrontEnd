//.push(2) prideda elementus i array baiga
//.unshift(3) prideda elementus i array pradzia
//.pop(); paskitini array nari panaikins, i sklaisutus niekas neina
//.shift() isemimas elementu is pradzios pacios
//[] kaip pasitikslinti nari koks ten yra
//.at() grazins pasirinkta eilej elementa is array
//lenght-1 grazina paskutini indeksa
//at.(-1) paskutini ideksa parodys
//.reverse paduoda atvirkscia array

// 1. Write a loop/cycle that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

// const hashtag = () => {
//     for (let i = "#"; i.length < 8; i += "#")
//     console.log(i);
// }

// hashtag();


// 2. Write a function that uses console.log to print all the numbers from 1 to 100, with two exceptions.
// For numbers divisible by 3, print "Fizz" instead of the nubmer,
// and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// const numberFunction = () => {
//     for (let i = 1; i <=100 ; i++) {
//     const devidesByThree = i % 3;
//     const devidesByFive = i % 5;
//     if ( devidesByThree == 0) {
//         console.log( "Fizz");}
//     else if ( devidesByFive == 0) {
//         console.log( "Buzz");
//     } else {
//         console.log(i);
//     }
    
// } }

// numberFunction();

// 2.1 Once you have that working, modify your function to print "FizzBuzz" for members that are divisible by both 3 and 5 
//( and still print "Fizz" or "Buzz" for numbers divisible by only one of those)

// const numberFunction = () => {
//     for (let i = 1; i <=100 ; i++) {
//     const devidesByThree = i % 3;
//     const devidesByFive = i % 5;
//     if ( devidesByThree == 0 && devidesByFive == 0) {
//         console.log( "FizzBuzz");}
//     else if ( devidesByThree == 0) {
//         console.log( "Fizz");
//     } else if ( devidesByFive == 0) {
//         console.log( "Buzz");
//     }
//     else {
//         console.log(i);
//     }
// } };

// numberFunction();

// 3. Write a range function that takes two arguments, start and end, and returns an array containing 
//all the numbers from start up to (and including) end. for example: range(1, 3) // [1, 2, 3]

const rangeFunction = (start, end) => {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result
}

// console.log(rangeFunction(1,5));


// 4. Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
//For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as 
//argument and produces a new array that has the same elements
// in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as 
//argument by reversing its elements. Neither may use the standard reverse method.

// const myArray = [1,3,5,7,9];

// const reverseArray = (myArray) => { 
//  const backwardsArray = [];

// while (i = myArray.pop())

// myArray.push(i)

// return backwardsArray

// };

// console.log(reverseArray());

const reverseArray = (array) => {
     const result =  [];

     for (let i = 0; i < array.length; i++) {
        result.unshift(array[i]);

     } 
     return result
};

const reverseArrayInPlace = (array) => {
 let currentIteratedValue;
 for (let i = 0; i < Math.floor(array.lenght / 2); i++) {
    currentIteratedValue = array [i];
    const switchWith = array[array.lenght - 1 - i];
    array[i] = switchWith;
    array[array.lenght - 1 - i ] = currentIteratedValue;
 } 

};

const arrayToBeModified =  [5, 3, 99];
reverseArrayInPlace(arrayToBeModified);
console.log(arrayToBeModified);

