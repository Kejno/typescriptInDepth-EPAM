import { ReferenceItem, RefBook, UniversityLibrarian, Shelf } from './classes';
import { Category } from './enums';
import { PersonBook, BookRequiredFields, UpdatedBook, СreateCustomerFunctionType } from './types';
import {
    purge,
    createCustomer,
    getBooksByCategory,
    logCategorySearch,
    getBooksByCategoryPromise,
    logSearchResults,
} from './functions';
import { Book, Magazine } from './inerfaces';

/* eslint-disable no-underscore-dangle */
showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// ============================================

// Task 02.01
// logFirstAvailable(getAllBooks());
// logBookTitles(getBookTitlesByCategory(Category.Javascript));

// const result = getBookAuthorByIndex(1);
// console.log(result);

// const result = calcTotalPages();
// console.log('result', result);

// Task 03.01
// const myID: string = createCostumerID('Ann', 10);
// console.log(myID);

// let idGenerator: (name: string, id: number) => string = (name: string, id: number) => `${name}-${id}`;

// idGenerator = createCostumerID;

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 34);
// createCustomer('Anna', 34, 'Kyiv');

// console.log(getBookTitlesByCategory());
// console.log('logFirstAvailable', logFirstAvailable());
// console.log('getBookByID(1)', getBookByID(1));

// const myBooks = сheckoutBooks('ann', 1, 2, 3);
// console.log('myBooks', myBooks);

// Task 03.03

// const checkedOutBooks = getTitles('Lea Verou');
// console.log(checkedOutBooks);

// let result = bookTitleTransform('JavaScript');
// console.log('result', result);
// result = bookTitleTransform(100);
// console.log('result', result);

// Task 04.01

// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 250,
// markDamaged(reason: string) {
//     console.log(`Damaged: ${reason}`);
// },
//     markDamaged: (reason: string) => {
//         console.log(`Damaged: ${reason}`);
//     },
// };

// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02

// let logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing back cover');

// Task 04.03
// let favoriteAuthor: Author = {
//     email: 'anna@exmple.com',
//     name: 'Anna',
//     numBooksPublished: 10,
// };

// let favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@mail.ru',
//     department: 'Fiction',
//     assistCustomer: null,
// };

// const offer: any = {
//     book: {
//         title: 'Essential Typescript',
//     },
// };

// console.log(offer.magazine());

// Task 04.05
// console.log(getBookProp(getAllBooks()[0], 'title'));

// Task 05.01
// const ref: ReferenceItem = new ReferenceItem('Title', 2020);
// console.log('ref', ref);
// ref.printItem();
// ref.publisher = 'Supper Publisher';
// console.log(ref.publisher);

// Task 05.02
// const refBook: RefBook = new RefBook('WorldPedia', 2001, 3);
// console.log(refBook);
// refBook.printItem();

// Task 05.03
// refBook.printCitation();

// Task 05.04
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris');

// Task 05.05
// const personBook: PersonBook = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.CSS,
//     email: 'artem@example.com',
//     name: 'Artem',
//     title: 'Book Title',
//     markDamaged: null,
//     pages: 1000,
// };

// Task 06.05
// let flag = true;

// if (flag) {
//     import('./classes').then(module => {
//         const reader = new module.Reader();
//         console.log(reader);
//     });
// } else {
//     console.log('No data');
// }

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software },
];

// const books = purge(inventory);
// console.log('books', books);

// Task 07.02
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// const book: Book = bookShelf.getFirst();
// console.log(book.title);

const magazines: Magazine[] = [
    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
    { title: 'Five Points', publisher: 'GSU' },
];

// const magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
// magazines.forEach(book => magazineShelf.add(book));
// const mag: Magazine = magazineShelf.getFirst();
// console.log(mag.title);

// Task 07.03
// magazineShelf.printTitles();
// const magazine = magazineShelf.find('Five Points');
// console.log('magazine', magazine);

// Task 07.04
// const book: BookRequiredFields = {
//     id: 1,
//     author: 'Artem',
//     available: false,
//     category: Category.CSS,
//     markDamaged: p => console.log(p),
//     pages: 200,
//     title: 'Unknown Title',
// };

// const uBook: UpdatedBook = {
//     id: 1,
//     author: 'Mama',
// };

// const params: Parameters<СreateCustomerFunctionType> = ['Artem'];
// createCustomer(...params);

// Task 08.01
// const l = new UniversityLibrarian();
// console.log('l', l);

// Task 08.02
// const fLibrarian = new UniversityLibrarian();
// console.log('l', fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');
// fLibrarian['printLibrarian']();

// Task 08.03
// fLibrarian.assistFaculty = null;
// fLibrarian.teachCommunity = null;

// Task 08.04

// const e = new RefBook('No Title', 2020, 10);
// e.printItem();

// Task 08.05
// const fLibrarian = new UniversityLibrarian();
// console.log('l', fLibrarian);
// fLibrarian.name = 'Anna';
// fLibrarian.assistCustomer('Boris');

// Task 08.06
// const fLibrarian = new UniversityLibrarian();
// fLibrarian.name = 'Anna';
// console.log(fLibrarian.name);
// fLibrarian.assistCustomer('Boris');

// Task 08.07
// const e = new RefBook('No Title', 2020, 10);
// e.copies = 10;
// console.log(e);

// Task 09.01
// console.log('BeGIN');
// getBooksByCategory(Category.Javascript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('BeGIN');
// getBooksByCategoryPromise(Category.Javascript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length;
//     })
//     .then(numberOgBooks => console.log(numberOgBooks))
//     .catch(console.log);
// getBooksByCategoryPromise(Category.Software).then(console.log).catch(console.log);
// console.log('End');

// Task 09.03
console.log('Begin');
logSearchResults(Category.Javascript);
logSearchResults(Category.Software).catch(e => console.log(e));
console.log('End');
