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
    hasMovieAdaptation: true,
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

// destructuring

const book = getBook(2);

// normal way
// const bookTitle = book.title;
// const bookAuthor = book.author;

// bookTitle;
// bookAuthor;

// destructuring way
var { title, author, publicationDate, genres, pages, hasMovieAdaptation } =
  book;
console.log(title, author, publicationDate);

// normal way of getting array
// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// destructuring way
// ...otherGenres is rest operator for array that contains remaining elements of array
const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// spread operator on array
// it makes all existing elements on array as a simple direct print of each element so that we can easily add new element at the baginning or end of array
const newGenres = ["newGenre", ...genres];
newGenres;

// spread operator on object
// it makes all existing property on object as a simple direct print of each property so that we can easily add new property at the object
// it also allows all existing property to overwrite easily
const updatedBook = {
  ...book,
  // adding a new property
  moviePublicationDate: "2001-12-19",
  // overwriting an existing property
  pages: 1000,
  author: "Jonathan Llemit Jr.",
};
updatedBook;

// there's a correction on video
var { title, author, publicationDate, genres, pages } = updatedBook;

// arrow function
const getYear = (strDate) => strDate.split("-")[0];

console.log(getYear(publicationDate));

// template literals
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published on ${getYear(
  publicationDate
)}. The book has ${hasMovieAdaptation ? "" : "not "}been adapted as a movie.`;
summary;

// ternaries
const pagesRange = pages >= 1000 ? "over a thousand" : "less than 1000";
pagesRange;

console.log(`The book has ${pagesRange} pages`);

// normal function
// function getYear(strDate) {
//   return strDate.split("-")[0];
// }

// short circuiting operators
console.log(true && "Some String");
console.log(false && "Some String");
console.log(hasMovieAdaptation && "This book has a movie");
