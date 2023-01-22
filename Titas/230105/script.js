// 1. Write a function which accepts an argument and returns the type. Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function type(arg)  {
    return typeof arg
};

console.log(type(5));
console.log(type(true));// works

// 2. Write a function that accepts a number as a parameter and check the number is prime or not. Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

function isPrime(number) {
    if (number <= 1) {
        return false
    } else if (number === 2) {
        return true
    } else if (number === 3){
        return true
    }
    let i = 2; 
    i < number;  
    i-- 
      if (number % i === 0) {return false};
    
    return true;
  }

console.log(isPrime(1)); 
console.log(isPrime(2)); 
console.log(isPrime(4)); //neteisingas, visi kiti gaunasi

// 3. Write a function that will accept two strings and will convert first argument to a currency requested in second argument:
//     a. First argument will be currency that needs to be converted. for example: '$10'
//     b. Second argument will be currency that first argument needs to be converted to. For example: 'dollars', 'euros'
//    Constraints: 
//     a. Lets assume the first letter in the first argument will always start with currency prefix ($, €)
//     b. Function should only convert euros to dollars and vice-versa
//     c. Use these conversion rates:
//         i. €1 = $1.05
//         ii. $1 = €0.95


function currencyConvertor(primaryCurrency, targetCurrency) {
    const rate = {
        euros: 1.05,
        dollars: 0.95,
    };

    if (primaryCurrency[0] === "$") {
        return (primaryCurrency.slice(1) * rate[targetCurrency]).toFixed(2) + targetCurrency;
    } else if (primaryCurrency[0] === "€") {
        return (primaryCurrency.slice(1) * rate[targetCurrency]).toFixed(2) + targetCurrency;
    } else {
        return "Invalid currency prefix"
    };
};

console.log(currencyConvertor("$10", "euros"));




// 4. Write a function that accepts an argument that is a function and invokes it. Passed function should log in the console 'Hello'.



// function invokeMe(anotherFunction) {
//     anotherFunction();
// };

// const greetings = () => console.log("Hello");
// invokeMe(greetings);


const startEngine = (onSuccess, onFail) => {
    //do the logic of starting up
    const engineStarted = true;


    return engineStarted ? onSuccess() : onFail ();

    if(engineStarted) {
        onSuccess();
    } else {
        onFail();
        }

};

const onSuccess = () => {
    console.log("Engine is on");
};

const onFail = () => {
    console.log("Engine is on");
};

startEngine(onSuccess, onFail);


// 5. Write a function that converts Fahrenheit to Celcius. Note: formula for convertion: (x - 32) * 0.5556.

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 0.5556
};

console.log(fahrenheitToCelsius(56));

// 6. Write a function that calculates area of a given rectangle. Note: formula for calculation: x*y.

function ractangleArea(x , y) {
    return x * y;
};

console.log(ractangleArea(5,5));

// 7. Write a function to find the area and perimeter of a circle. Note: formula for perimeter (x stands for radius( apskritimo spindulys ) and π stands for Pi): 2 * π * x. formula for area: π * x * x.
//    Constraints:
//     a. It should return a string in this format: 'Circle of radius 10 has permiter of 62.83 and area of 314.15'

function calculateThings (x) {
    const circlePerimeter = Math.floor((2 * x * Math.PI)*100)/100 ;
    const circleArea = Math.floor((Math.pow(x, 2) * Math.PI)*100)/100 ;

    return `Circle of radius ${x} has a perimeter of ${circlePerimeter} and area of ${circleArea}`
}

console.log(calculateThings(15));


// 8. Write a function that takes two arguments and generates a random number in between them. For example: getRandomNumber(1, 10) should return me a number that is between 1 and 10.

function getRandomNumber(min , max) {
    return Math.floor(Math.random()* max + min);

    // return Math.floor(Math.random() * (min - max + 1) + min)
}

console.log(getRandomNumber(1, 8));

// BONUS: Write a function to find factorial of a number. Note factorial number formula (if x = 1 or x = 0, then its factorial is 1): x * (x - 1) * (x - 2) * ... 
//     Example case result: getFactorial(0) should return 120 because 5 * (5 - 1) * (5 - 2) * (5 - 3) * (5 - 4) = 120
//     Some material to get accustomed with factorials:
//         a. English version ( https://en.wikipedia.org/wiki/Factorial )
//         b. Lithuanian version ( https://lt.wikipedia.org/wiki/Faktorialas )
//     Tips: just like in math you will have to use recursive functions to calculate factorial. If you need you can read more about it in here https://www.javascripttutorial.net/javascript-recursive-function/

// getFactorial(5) -> 120, because 5 * 4 * 3 * 2 = 120 

// const getFactorial = (number) => {
//  if (number <= 1) {
//     return 1;
//  }
//  return number *  getFactorial(number - 1);

// }

// console.log(getFactorial(5));

const getNewFactorial = (number) => {
    let result = 1;
    while (number > 1) {
    result *= number;
    number--;
    }
    return result;
    }

console.log(getNewFactorial(5));

const getOtherFactorial = (number) => {
    let result = 1;
    do {
    result *= number;
    number--;
    } while (number > 1);
    return result;
    }
    
    console.log(getOtherFactorial(6)); 

    const getNewestFactorial = (number) => {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result *= i;

        }
        return result
    }
    

   console.log(getNewestFactorial(3)); 
    