const books = [
  { title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7 },
  { title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4 },
  { title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2 },
  { title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9 },
  { title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8 },
  { title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1 },
  { title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5 },
];

// zadanie 6

const zad6Filter = (arr) => arr.filter((book) => book.pages % 2 == 0 & book.genre.endsWith("y"));
const sumLetters = (book) => book.reduce((letters, book) => letters + book.title.replace(/\s/g, '').length, 0);
const composition6 = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);

let res6 = composition6(zad6Filter, sumLetters);
console.log("Zadanie 6: ", res6(books));

// zadanie 7

const zad7Filter = (arr) => arr.filter((book) => /\d+/.test(book.title) && book.pages % 2 == 1 && book.rating > 5);
const sumPages = (book) => book.reduce((ratingsAbove5) => ratingsAbove5 + 1, 0);

const composition7 = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);

let res7 = composition7(zad7Filter, sumPages);
console.log("Zadanie 7: ", res7(books));

// zadanie 8

const sortBooks = (arr) => arr.sort((min, max) => max.title.length - min.title.length);
const titles = (arr) => arr.map(({ title }) => title);
const composition8 = (...functions) => (arr) => functions.reduce((acc, fn) => fn(acc), arr);

let res8 = composition8(sortBooks, titles);
console.log(res8(books)[1]);