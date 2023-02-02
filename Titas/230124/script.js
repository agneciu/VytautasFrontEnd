// Tasks:
// 1. Write a function that will count vowels (balsė) in a given word. Vowels: a, e, i, o, u.
console.log("------TASK1-------");

function vowelCount(word) {
    let numberOfVowels = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let letters of word) {
        if (vowels.includes(letters)) {
        numberOfVowels++;
        };
    };
    return numberOfVowels;
};

console.log(vowelCount("pineapples"));


// 2. Write a function that will return you boolean value based on if given word is palindrome or not. 
// A word is considered to be palindrome only if it retains same if reversed, for example racecar, bannana.

console.log("------TASK2-------");

function isPalindrome(word) {

    // converting string to an array, separating letters 
    const array = word.split('');

    // reverse the array values (letters)
    const reverseArray = array.reverse();

    // convert array to string, joining the letters back together but from the back (since it was reversed)
    const reverseWord = reverseArray.join('');


    // checking if the reversed word is the same as the given word to check
    if(word == reverseWord) {
        console.log('It is a palindrome');
    }
    else {
        console.log('It is not a palindrome');
    }
}

isPalindrome("sigis");

// 3. Write a function to find letter occurences in a word. For example: letterCount('Connect', 'c') -> 2, because letter c occures two times.
console.log("------TASK3-------");

function letterCount(word, letter) {
    const array = word.split('');

    const newArray = array.filter((char) => {
        return char === letter
    }).length; //how does i=> i work??

    return newArray;
}

console.log(letterCount('puff', 'f'));

// 4. Write a function to compute a union of two arrays, and removes all duplicates. For example: union([1, 2, 3], [1, 10, 2, 100]) -> [1, 2, 3, 10, 100]

console.log("------TASK4-------");

const union = [[1, 2, 3], [1, 10, 2, 100]];


const joinAndRemove = (array) => {
    const newUnion = array.flat(1);
    const cleanedUnion = [... new Set(newUnion)];// SUPER COOL // Set removes duplicate elements from the primary array and creates a secondary array without any duplicates
    console.log(cleanedUnion);
}

console.log(joinAndRemove(union));


// 5. Write a function to find a pair of elements from an given array whose sum equals a specific target number. Return an array with those two elements indexes.
// For example: findNumberPairs([10, 20, 10, 40, 50, 60, 70], 50) -> [2, 3]
console.log("------TASK5-------");



const findNumberPairs = (array, target) => {
   let result = [];
   for (let i = 0; i < array.length; i++) {
    for (let g = i + 1; g < array.length; g++) {
        if (array[i] + array[g] === target) {
            result.push(i, g);
            return result;
        };
     };
   };
};

let randomNumbers = [10, 20, 10, 40, 50, 60, 70];
let targetNumber = 50;

console.log(findNumberPairs(randomNumbers, targetNumber));


// 6. Write a function to filter false, null, undefined, 0 and empty string values from an array. It should return a new array.

// const randomArray = [1, "", undefined, null, true, "hello"];


// For next two tasks we will be working with this data: const birds = [ "Parrots", "Falcons", "Eagles", "Emus", "Caracaras", "Egrets" ];
// 7. Write a function to find index of the 'Eagles' item, and use that to remove the 'Eagles' item. Return the end result which should be [ "Parrots", "Falcons", "Emus", "Caracaras", "Egrets" ]
// 8. Make a new array from the above array, called eBirds, that contains only birds from the original array whose names begin with the letter "E".