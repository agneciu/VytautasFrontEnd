// Sukurti klasę pavadinimu "Cylinder"
//  - Ji turi turėti 2 atributus, kuriuos gauna konstruktoriuje: "height" ir "radius"
//  - Ji turi turėti 2 metodus: "getVolume" ir "getSurfaceArea"
//     - "getVolume" metodas turi grąžinti cilindro turį. Formulė: "pi * radius * radius * height"
//     - "getSurfaceArea" metodas turi grąžinti cilindro paviršiaus plotą. Formulė: "2 * pi * radius * (radius + height)"

class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }

  getVolume() {
    return Math.PI * this.radius * this.radius * this.height;
  }

  getSurfaceArea() {
    return 2 * Math.PI * this.radius * (this.radius + this.height);
  }
}

const newCylinder = new Cylinder(10, 15);

console.log(newCylinder);
newCylinder.getVolume();
newCylinder.getSurfaceArea();
console.log(newCylinder.getVolume());

console.log("-------task 2--------");

// Sukurti dvi klases:
//  - Knyga (Book)
//  - Biblioteka (Library)

// Klasės aprašymai:

// Knyga turi savybes: pavadinimas (string), autorius (string), puslapiu skaicius (number), metai (number), leidykla (string).

// Biblioteka turi savybes: pavadinimas (string), adresas (string), knygos (array).

// Biblioteka turi metodus:
//  - addBook(book) - prideda knyga i bibliotekos knygu sarasa

//  - removeBook(book) - istrina knyga is bibliotekos knygu saraso (jei nezinote kaip daryti - praleiskite)

//  - bookCount() - grazina bibliotekos knygu skaiciu

//  - bookList() - grazina bibliotekos knygu sarasa

//  - bookListByAuthor(author) - grazina bibliotekos knygu sarasa (array) pagal autoriu
//     /*
//      *
//      * Sufleris:
//      * for (let book in this.bookList) {
//      *    if (book.author === author) {
//      *        // ...sprendimas cia...
//      *    }
//      * }
//      *
//      */

//  - bookListByPublisher(publisher) - grazina bibliotekos knygu sarasa pagal leidykla
//     Identiskas sprendimas kaip ir bookListByAuthor(author)

//  - bookListByYear(year) - grazina bibliotekos knygu sarasa pagal metus
//     Identiskas sprendimas kaip ir bookListByAuthor(author)

//  - bookListWithPagesGreaterThan(pageCount) - grazina bibliotekos knygu sarasa su puslapiu skaiciumi didesniu uz pageCount

//  - bookListWithPagesLessThan(pageCount) - grazina bibliotekos knygu sarasa su puslapiu skaiciumi mazesniu uz pageCount

// Sukūrus klases sukurkite knygas:

// const hemingway = new Book('For Whom the Bell Tolls', 'Ernest Hemingway', 350, 1940, 'Charles Scribner\'s Sons');
// const tolkien = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1216, 1954, 'Allen & Unwin');
// const tolkien2 = new Book('The Hobbit', 'J. R. R. Tolkien', 310, 1937, 'Allen & Unwin');
// const tolkien3 = new Book('The Silmarillion', 'J. R. R. Tolkien', 400, 1977, 'Allen & Unwin');
// const orwell = new Book('1984', 'George Orwell', 328, 1949, 'Secker & Warburg');
// const orwell2 = new Book('Animal Farm', 'George Orwell', 112, 1945, 'Secker & Warburg');
// const remarque = new Book('All Quiet on the Western Front', 'Erich Maria Remarque', 352, 1929, 'Harcourt, Brace and Company');
// const remarque2 = new Book('Three Comrades', 'Erich Maria Remarque', 320, 1936, 'Harcourt, Brace and Company');
// const remarque3 = new Book('Arch of Triumph', 'Erich Maria Remarque', 320, 1945, 'Harcourt, Brace and Company');
// const remarque4 = new Book('The Road Back', 'Erich Maria Remarque', 320, 1954, 'Harcourt, Brace and Company');
// const herbert = new Book('Dune', 'Frank Herbert', 604, 1965, 'Chilton Books');
// const herbert2 = new Book('Dune Messiah', 'Frank Herbert', 512, 1969, 'Chilton Books');
// const herbert3 = new Book('Children of Dune', 'Frank Herbert', 512, 1976, 'Chilton Books');
// const herbert4 = new Book('God Emperor of Dune', 'Frank Herbert', 512, 1981, 'Chilton Books');

// Sukurkite biblioteką:

// const library = new Library('Biblioteka', 'Vilnius');

// ir į ją įdėkite knygas.

// Išbandykite bibliotekos metodus:

// console.log(library.bookCount()); // 14
// console.log(library.bookList()); // grazina visu knygu sarasa
// console.log(library.bookListByAuthor('J. R. R. Tolkien')); // grazina tolkien knygu sarasa
// console.log(library.bookListByPublisher('Allen & Unwin')); // grazina tolkien knygu sarasa
// console.log(library.bookListByYear(1949)); // grazina orwell knygu sarasa
// console.log(library.bookListWithPagesGreaterThan(500)); // grazina herbert knygu sarasa

// class Book {
//  constructor (name, author, pageCount, year, publisher) {
//     this.name = name;
//     this.author = author;
//     this.pageCount = Number(pageCount);
//     this.year = Number(year);
//     this.publisher = publisher;
//  }
// }

// const hemingway = new Book('For Whom the Bell Tolls', 'Ernest Hemingway', 350, 1940, 'Charles Scribner\'s Sons');
// const tolkien = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1216, 1954, 'Allen & Unwin');
// const tolkien2 = new Book('The Hobbit', 'J. R. R. Tolkien', 310, 1937, 'Allen & Unwin');
// const tolkien3 = new Book('The Silmarillion', 'J. R. R. Tolkien', 400, 1977, 'Allen & Unwin');
// const orwell = new Book('1984', 'George Orwell', 328, 1949, 'Secker & Warburg');
// const orwell2 = new Book('Animal Farm', 'George Orwell', 112, 1945, 'Secker & Warburg');
// const remarque = new Book('All Quiet on the Western Front', 'Erich Maria Remarque', 352, 1929, 'Harcourt, Brace and Company');
// const remarque2 = new Book('Three Comrades', 'Erich Maria Remarque', 320, 1936, 'Harcourt, Brace and Company');
// const remarque3 = new Book('Arch of Triumph', 'Erich Maria Remarque', 320, 1945, 'Harcourt, Brace and Company');
// const remarque4 = new Book('The Road Back', 'Erich Maria Remarque', 320, 1954, 'Harcourt, Brace and Company');
// const herbert = new Book('Dune', 'Frank Herbert', 604, 1965, 'Chilton Books');
// const herbert2 = new Book('Dune Messiah', 'Frank Herbert', 512, 1969, 'Chilton Books');
// const herbert3 = new Book('Children of Dune', 'Frank Herbert', 512, 1976, 'Chilton Books');
// const herbert4 = new Book('God Emperor of Dune', 'Frank Herbert', 512, 1981, 'Chilton Books');

// console.log(hemingway);

// // class Library extends Book {
// //     constructor(name, author, pages, year, publisher) {
// //         super(name, author, pages, year, publisher)
// //     }
// // }

// let books = [];

// class Library  {
//  constructor (nameOfLibrary, address) {
//     this.nameOfLibrary = nameOfLibrary;
//     this.address = address;
//     this.books = [];
//  }

//  addBook(book) {
//    this.books.push(book);
//    return this.books
//  }

// //  removeBook(book) {
// //     this.bookd.(book);
// //  }

//  bookCount() {
//  return this.books.lenght;
//  }

//  bookList() {
//    return this.books;

//  }

//  bookListByAuthor(author) {
//     for(let book of this.books) {
//         if(book.author === author) {
//             this.books.push(book);
//         } else {
//             this.books.splice(book);
//         }
//         return this.books;
//     }

//  }

//  bookListByPublisher(publisher) {
//     for(let book of this.books) {
//         if(book.publisher === publisher) {
//             this.books.push(book);
//         } else {
//             this.books.splice(book);
//         }
//         return this.books;
//     }
//  }

//  bookListByYear(year) {
//     for(let book of this.books) {
//         if(book.year === year) {
//             this.books.push(book);
//         } else {
//             this.books.pop(book);
//         }
//         return this.books;
//     }
//  }

//  bookListWithPagesGreaterThan(pageCount) {

//  }

//  bookListWithPagesLessThan(pageCount) {

//  }

// }

// const library = new Library('Biblioteka', 'Vilnius');
// console.log(library);
// console.log(library.addBook(hemingway));
// console.log(library.addBook(herbert3));
// console.log(library.addBook(herbert2));
// console.log(library.addBook(herbert));
// console.log(library.addBook(remarque));
// console.log(library.addBook(remarque3));
// console.log(library.bookCount());
// console.log(library.bookList());
// console.log(library.bookListByAuthor('Erich Maria Remarque'));

// class Book {
//  constructor (name, author, pageNumber, year, publisher) {
//     this.name = name;
//     this.author = author;
//     this.pageNumber = pageNumber;
//     this.year = year;
//     this.publisher = publisher;
//  }
// }

// const hemingway = new Book('For Whom the Bell Tolls', 'Ernest Hemingway', 350, 1940, 'Charles Scribner\'s Sons');
// const tolkien = new Book('The Lord of the Rings', 'J. R. R. Tolkien', 1216, 1954, 'Allen & Unwin');
// const tolkien2 = new Book('The Hobbit', 'J. R. R. Tolkien', 310, 1937, 'Allen & Unwin');
// const tolkien3 = new Book('The Silmarillion', 'J. R. R. Tolkien', 400, 1977, 'Allen & Unwin');
// const orwell = new Book('1984', 'George Orwell', 328, 1949, 'Secker & Warburg');
// const orwell2 = new Book('Animal Farm', 'George Orwell', 112, 1945, 'Secker & Warburg');
// const remarque = new Book('All Quiet on the Western Front', 'Erich Maria Remarque', 352, 1929, 'Harcourt, Brace and Company');
// const remarque2 = new Book('Three Comrades', 'Erich Maria Remarque', 320, 1936, 'Harcourt, Brace and Company');
// const remarque3 = new Book('Arch of Triumph', 'Erich Maria Remarque', 320, 1945, 'Harcourt, Brace and Company');
// const remarque4 = new Book('The Road Back', 'Erich Maria Remarque', 320, 1954, 'Harcourt, Brace and Company');
// const herbert = new Book('Dune', 'Frank Herbert', 604, 1965, 'Chilton Books');
// const herbert2 = new Book('Dune Messiah', 'Frank Herbert', 512, 1969, 'Chilton Books');
// const herbert3 = new Book('Children of Dune', 'Frank Herbert', 512, 1976, 'Chilton Books');
// const herbert4 = new Book('God Emperor of Dune', 'Frank Herbert', 512, 1981, 'Chilton Books');

// console.log(herbert);

// class Library  {
//  constructor (name, address, books =[]) {
//     this.name = name;
//     this.address = address;
//     this.books = books; // kai books bus undefined bus automatiskai priskiriamas array// address = "unknown" - addresas tampa neprivalomu

//  }
//  addBook(book) {
//        this.books.push(book);
//      }

//  removeBook(book) {
//     const result = [];
//     for (let listBook of this.books) {
//         if (listBook.name !== book.name) {
//             result.push(listBook);
//         }
//     }
//     this.books = result; //pakeiciam i nauja aarray be isimtu knygu
//  }

//  bookCount() {
//  return this.books.length;
//  }

//  bookList() {
//     return this.books;
//  }

//  bookListByAuthor(author) {
//     const result = [];
//     for (let book of this.books) {
//         if (book.author === author) {
//             result.push(book);
//         }
//     }
//     return result;
//  }

// }

// const vilniausBiblioteka = new Library ("Martyno Mazvydo biblioteka", "kazkokia gatve");

// vilniausBiblioteka.addBook(hemingway);
// vilniausBiblioteka.addBook(herbert4);

// vilniausBiblioteka.removeBook(hemingway);
// console.log(vilniausBiblioteka.bookCount(),vilniausBiblioteka.bookList());

// Sukurkime tris klases: produktai, krepselio produktai ir krepselis.

// Produktas turi savybes: id (number), pavadinimas (name), kaina (price), nuotraukos url (imagUrl), aprasymas(description) ir likutis(stock).
//  - id turi buti random sugeneruotas, kiekvienam produktui unikalus skaicius.
//     - šiam pratimui sukurkime produktus su id nuo 1 iki n.

// Krepselio produktas turi savybes: pavadinimas(name), kaina(price), nuotraukos url(imageUrl), aprasymas(description), kiekis(quantity) ir visa suma (totalPrice).
// SVARBU!: likutis ir kiekis nėra tie patys atributai!
//     Krepselio produktas turi paveldimuma (extends) is produktu klases.
//     Krepselio produktas konstruktoriuje priima produkta (klase) ir kieki. new CartProduct(product, quantity)
//         jei kiekis yra didesnis uz produkto likuti, tai kiekis turi buti lygus produkto likuciui.

//     Krepselio produktas turi du metodus:
//     1. didinti kieki (kiekis++)
//         - jis turi atnaujinti ir visa suma (totalPrice)
//     2. mažtinti kieki (kiekis--)
//         - jis turi atnaujinti ir visa suma (totalPrice)
//     3. nustatyti kieki (kiekis = number)
//         - jis turi atnaujinti ir visa suma (totalPrice)

// Krepselis turi savybes: krepselio produktus (cart products - array), bendra krepselio suma (totalCartPrice) ir bendra kiekis (totalCartQuantity).

// Krepselis turi metodus:
// 1. prideti produktus i krepseli (addProduct)
//     - jei krepselio produkto kiekis lygus 0, tai i krepseli preke neprisideda
//     - jei krepselyje jau yra toks produktas, tai turi didinti jo kieki
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)
// 2. pasalinti produktus is krepselio (removeProduct)
//     - jei krepselyje yra toks produktas, tai turi mazinti jo kieki
//     - jei krepselyje yra toks produktas ir jo kiekis yra 0, tai turi pasalinti produktas is krepselio
//       - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)
// 3. pirkti produktus (buyProducts)
//     - console.log visus produktus
//     - console.log bendra krepselio suma (totalCartPrice)
//     - console.log bendra kieki (totalCartQuantity)
//     - turi pasalinti visus produktus is krepselio
//     - atnaujinti bendra krepselio suma (totalCartPrice)
//     - atnaujinti bendra kieki (totalCartQuantity)

// Produktu pavyzdiai su duomenimis:

// const products = [
//     {
//         id: 1,
//         name: 'Product 1',
//         price: 100,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 10
//     },
//     {
//         id: 2,
//         name: 'Product 2',
//         price: 200,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 20
//     },
//     {
//         id: 3,
//         name: 'Product 3',
//         price: 300,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 30
//     },
//     {
//         id: 4,
//         name: 'Product 4',
//         price: 400,
//         imageUrl: 'https://picsum.photos/200/300',
//         description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl. Donec auctor, nisl eget ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nisl.',
//         stock: 40
//     },
// ];

class Product {
  constructor(name, price, imageURL, description, stock) {
    this.id = Math.random() * 10 ** 16;
    this.name = name;
    this.price = price;
    this.imageURL = imageURL;
    this.description = description;
    this.stock = stock;
  }
}

const example = new Product("A book", 24.99, "a", "Avery good book", 10);
const example2 = new Product("A bike", 400.99, "b", "Avery good bike", 5);
const example3 = new Product("A pillow", 10.99, "c", "Avery good pillow", 1);

console.log(example);

class CartProduct extends Product {
  constructor(product, quantity) {
    super(
      product.name,
      product.price,
      product.imageURL,
      product.description,
      product.stock
    );

    const validQty = quantity > product.stock ? product.stock : quantity;

    this.assignQtyAndTotalPrice(validQty);
  }

  increaseCount() {
    const newQty = this.quantity + 1;

    if (newQty > this.stock) {
      return; //tai vadinamas guard
    }

    this.assignQtyAndTotalPrice(newQty);
  }

  decreaseCount() {
    const newQty = this.quantity - 1;

    if (newQty < 0) {
      return; //tai vadinamas guard
    }

    this.assignQtyAndTotalPrice(newQty);
  }

assignQuantity(quantity) {
    if (quantity > this.stock || quantity < 0) {
        return; //tai vadinamas guard
      }
      this.assignQtyAndTotalPrice(quantity);
}

  assignQtyAndTotalPrice(quantity) {
    this.quantity = quantity;
    this.totalPrice = (this.price * 10 * quantity) / 10;
  }
}

const cartProduct = new CartProduct(example, 13);
cartProduct.increaseCount();
console.log(cartProduct);
cartProduct.decreaseCount();
console.log(cartProduct);
cartProduct.assignQuantity(3);
console.log(cartProduct);

class Cart {
    constructor() {
        this.products =[];
        this.totalCartPrice = 0;
        this.totalCartQuantity = 0;
    }

addProduct(product) {

let isAssignedQty = false;

    for (let innerProduct of this.products) {
        if (innerProduct.id === product.id){
            const newQty = innerProduct.quantity + product.quantity; 
            innerProduct.assignQuantity(newQty);
            isAssignedQty = true;
        }
    }


if (!isAssignedQty){
    this.products.push(product);
}  

this.updateCartTotalPriceAndQty();
}

removeProducts(product) {

const newProducts = [];

  this.products.forEach((innerProduct) => {
    if (innerProduct.id === product.id) {
      return;
    }
    newProducts.push(innerProduct);
  });

  this.products = newProducts;
  this.updateCartTotalPriceAndQty()
};

buyProducts() {
  this.products.forEach(console.log);
  console.log("Total Price", this.totalCartPrice);
  console.log("Total Quantity", this.totalCartQuantity)
  this.products = [];
  this.updateCartTotalPriceAndQty();
}

updateCartTotalPriceAndQty() {
    let newCartQty = 0;
    let newCartTotalPrice = 0;
    for (let product of this.products) {
        newCartTotalPrice += product.totalPrice;
        newCartQty += product.quantity;
    }

    this.totalCartPrice = newCartTotalPrice;
    this.totalCartQuantity = newCartQty;
}

}

const myCart = new Cart();
myCart.addProduct(cartProduct);
myCart.addProduct(cartProduct);

myCart.removeProducts(cartProduct);

console.log(myCart);

myCart.buyProducts();
console.log(myCart);
