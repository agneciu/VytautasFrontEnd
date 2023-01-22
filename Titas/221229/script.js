const value = 'some value';
const value2 = 'some value2';

const obj1 = {
    //inline object
    //susidaro is key value pairs
    key: value, //vadinasi property
    key2: value2,
    key3: 1,
    key4: false,
    key5: {
        key1: value,
        key2: {
            key1: value,
            key2: obj1.key5,
        }
    },
    //method (visos funkcijos, kurios gyvena objekte)
    key6: function () {
        console.log('im key6 value');
    },
    'key 7': undefined,// nenaudoti
    key8: null,
    //key10 = 10
};

//objekto reiksmiu skaitymas

obj1.key3 // 1
obj1.key9// undefined (nerado tokio)

if (obj1.key9) {
    //do something with obj1.key9 value
}

//create a key since it was not able to kind one
obj1.key10 = 10;

//issisaugoti sena reiksme
const previousValueOfKey3 = obj1.key3;

//priskirti nauja reiksme
obj1.key3 = 2;

// function:
function func() {
}

func (); // funkcijos iskvietimas
//kaip pasiekti ojb1 viduje esancia funkcija
obj1.key6();

obj1.key5.key2.key2.key1 // vaiksciojimas po objektus

obj1['key 7'];
console.log(obj1['key 7']);


//represents some key
const inputValue = 'car';

obj1[inputValue] = 'red';

obj1.key5.key2.key1 = 'updated value'; //updatint value ojekto objekto viduje

//how to compare objects??

const obj2 ={
    key: value, //vadinasi property
    key2: value2,
    key3: 1,
    key4: false,
    key5: {
        key1: value,
        key2: {
            key1: value,
            key2: obj1.key5,
        }
    },
    //method (visos funkcijos, kurios gyvena objekte)
    key6: function () {
        console.log('im key6 value');
    },
    'key 7': undefined,// nenaudoti
    key8: null,
    //key10 = 10
};

if (obj1 === obj2) {
    console.log('I am the same object');// reiksmes gali but tokios pacios, bet atmintyje gali buti laikoma kitokia info, tai yra nepalyginami dalykai
};

//vienintelis budas kaip palyginti objektus - deep equality

const obj3 = {
    firstName: 'vardenis',
};

const obj4 = {
    firstName: 'vardenis',
}

if (obj3.firstName === obj4.firstName) {
    console.log('These objects are equal');
}

const obj5 = obj1; //pasakome, kad referencai i atminti vienodi
if (obj1 === obj5) {
    console.log('I am the same object');
};

//dbr per obj5 galim keisti obj1

obj5.key = 'obj5 has changed key value';

console.log(obj1);

//funcijos

const arg1 = 1;
const arg2 = 2;

function func1 (arg1, arg2) { //viduj esantys argumentai nieko bendro neturi su const esanciais argumentais
return arg1 + arg2;
};
//funcija negali returnint po returno

//arrow function - visada anonimines funkcijos

const regularFunction = () => {}

function regularFunction() {};

input.addEventListener('change', () => {

    
})


const result = func1(-4, 1);

