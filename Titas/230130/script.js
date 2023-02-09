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

//FILTER

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
    id: Math.random(),
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

    console.log("------------NEW-TASK--------------");

    //MAP

    const userFirstNames = users.map((users) => {
        // return user.firstName;
        return `${users.firstName} ${users.lastName}`;
    });

    console.log(userFirstNames);

const hasDocument = users.filter((users) => {
    if (users.hasIdentificationDocument) {
        return true;
    }
});

console.log(hasDocument);

const hasIdAndFirstName = hasDocument.map((hasDocument) => {
    return `id: ${hasDocument.id} name: ${hasDocument.firstName}`
});

console.log(hasIdAndFirstName);
console.log("------------NEW-TASK--------------");

// REDUCE
//acc - accumulator
//expected output [underAgeUsersArray, restOfUsersArray] 
//
const userGroups = users.reduce((acc, user) => {
    if(user.age >= 21) {
        
        acc[1].push(user);
    }
    else {
        
        acc[0].push(user);
    }
    return acc;
}, [[],[]]);

const userGroupsAsObject = users.reduce((acc, user) => {
if (user.age >= 21) {
    acc.adults.push(user);
} else {
    acc.underaged.push(user);
}
return acc;
},{ underaged: [], adults: []})

console.log(userGroupsAsObject);

const helloText = users.reduce((welcomingText, user, index) => {
    return `${welcomingText}${index ? ',' : ' '} ${user.firstName}`;
}, "Hello: ");

console.log(helloText)

const adultFilter = users.filter((users) => {
    if (users.age >= 21) {
        return true;
    };
});

const newProject = adultFilter.reduce((acc, adultFilter) => {
if (adultFilter.isBanned === true) {
    acc.banned.push(adultFilter);
} if (adultFilter.hasIdentificationDocument === true) {
    acc.withDocs.push(adultFilter);
}

return acc

}, {banned: [], withDocs: []}); 

console.log(adultFilter);
console.log(newProject);



