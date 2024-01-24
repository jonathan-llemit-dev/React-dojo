const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

const books = getBooks();

console.log(books);

// getting total reviews count
function getTotalReviewsCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount ?? 0;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

// array map method
// iterating each element of array then apply a certain method
// this method will not mutate a given array but producing a new array based on the result after applying the method
const sampleArray = [1, 2, 3, 4, 5].map((i) => i * 2);
console.log(sampleArray);

// here we use arrow function to apply a certain method for each element of an array
// (book) is the representation of a currently selected element for iteration of map method on array (book) can be renamed anything you want it does not matter.
// the arrow function simple gets the book title of a selected book through iteration and because of map method the called title will gonna
// simply replace the entire selected element thats why the output is only titles.
const titles = books.map((book) => book.title);
console.log(titles);

// here we enclose with ({}) the entire method of map array method
// we use this to get and declare multiple data and use multiple other functions without using a traditional function struction
// we use this to maintain the arrow function
const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewsCount(book),
}));

console.log(essentialData);

// array filter method
// filter method is used to filter out the elements of array based on certain conditions
const longBooks = books.filter((book) => book.pages > 500);
console.log(longBooks);

// here in filter method we can chain multiple filters
const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);

console.log(longBooksWithMovie);

// here we chain combination of filter and map methods for array
const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);

console.log(adventureBooks);

// array reduce method
// this method is used to boil down the entire array into one single value
// here on reduce we have two params the function that will take action on each iteration and the starting value of accumulator
// the accumulator can be renamed anything and its starting value can be number, string, or another array
// when using the accumulator on the function it takes place as the first parameter
// the second parameter inside function is the selected element on the iteration
const pagesAllBooks = books.reduce((acc, book) => acc + book.pages, 0);
console.log(pagesAllBooks);

// array sort method
// unlike map, filter, and reduce this sort method is not functional means that it will mutate the original array
const arr1 = [3, 7, 1, 9, 6];
const sorted1 = arr1.sort((a, b) => a - b);
console.log(sorted1);
console.log(arr1);

// when working with react we usually not like to mutate the data of original array but instead produce an output as a new array
// a simple trick for sort method to avoid mutating data is to use slice method first
const arr2 = [3, 7, 1, 9, 6];
const sorted2 = arr2.slice().sort((a, b) => a - b);
console.log(sorted2);
console.log(arr2);
