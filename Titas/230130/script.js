const user = [
    {
        id: Math.random(),
        firstName: "Joshua",
        lastName: "Timber",
        age:19,

    },
    {
        id: Math.random(),
        firstName: "Kate",
        lastName: "Sims",
        age:17,

    },
    {
        id: Math.random(),
        firstName: "John",
        lastName: "Smith",
        age:26,

    },
];

//filter yra predikatas (t.y. funkcija kuri grazina boolean reiksme)

// const userWithAgeOver21 = user.filter((user) => {
//     if(user.age >= 21) {
//         return true;
//     }
// });

// const underAgedUsers = user.filter((user) => {
//     if (user.age <= 21) {
//         return true;
//     }
//     return false;
// })

// console.log(userWithAgeOver21);
// console.log("---------------------------");
// console.log(underAgedUsers);
// console.log("---------------------------");
// console.log(user);
console.log("------------NEW-TASK--------------");


const users = [{
    id: Math.random(),
    firstName: 'Jessica',
    lastName: 'Silver',
    age: 21,
    hasIdentificationDocument: true,
    isBanned: false, },
     { 
    id: Math.random(),
    firstName: 'Tom',
    lastName: 'Wood', 
    age: 30,
    hasIdentificationDocument: false,
    isBanned: false, },
    {
    id: Math.random()
    firstName: 'Allen',
    lastName: 'Green',
    age: 26,
    hasIdentificationDocument: true,
    isBanned: true, },
    {
    id: Math.random(),
    firstName: 'Joshua',
    lastName: 'Timber',
    age: 19,
    hasIdentificationDocument: true,
    isBanned: false, },];

    const specialConditions = users.filter((users) => {
        if (users.age >= 20 && users.hasIdentificationDocument === true && users.isBanned === false) {
            return true;
        }
    });

    console.log(specialConditions);

