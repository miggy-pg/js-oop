// OBJECTIVE: Learn functional array methods: MAP, FILTER and REDUCE

// IN THIS FILE, INSTALL QUOKKA EXTENSION AND RUN IT USING CTRL+SHIFT+P 'Select Run Quokka on this Script'

// =====================================================================================
// MAP Function
// : the map method loops over each element in the array
// =====================================================================================
// Example:
const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);
// Output: [2,4,5,8,10]

const books = [
  {
    isbn: "9781593279509",
    title: "Eloquent JavaScript, Third Edition",
    subtitle: "A Modern Introduction to Programming",
    author: "Marijn Haverbeke",
    published: "2018-12-04T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 472,
    description:
      "JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
    website: "http://eloquentjavascript.net/",
  },
  {
    isbn: "9781491943533",
    title: "Practical Modern JavaScript",
    subtitle: "Dive into ES6 and the Future of JavaScript",
    author: "Nicolás Bevacqua",
    published: "2017-07-16T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 334,
    description:
      "To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
    website: "https://github.com/mjavascript/practical-modern-javascript",
  },
  {
    isbn: "9781593277574",
    title: "Understanding ECMAScript 6",
    subtitle: "The Definitive Guide for JavaScript Developers",
    author: "Nicholas C. Zakas",
    published: "2016-09-03T00:00:00.000Z",
    publisher: "No Starch Press",
    pages: 352,
    description:
      "ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
    website: "https://leanpub.com/understandinges6/read",
  },
  {
    isbn: "9781449365035",
    title: "Speaking JavaScript",
    subtitle: "An In-Depth Guide for Programmers",
    author: "Axel Rauschmayer",
    published: "2014-04-08T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 460,
    description:
      "Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    website: "http://speakingjs.com/",
  },
  {
    isbn: "9781449331818",
    title: "Learning JavaScript Design Patterns",
    subtitle: "A JavaScript and jQuery Developer's Guide",
    author: "Addy Osmani",
    published: "2012-08-30T00:00:00.000Z",
    publisher: "O'Reilly Media",
    pages: 254,
    description:
      "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
    website:
      "http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/",
  },
  {
    isbn: "9798602477429",
    title: "You Don't Know JS Yet",
    subtitle: "Get Started",
    author: "Kyle Simpson",
    published: "2020-01-28T00:00:00.000Z",
    publisher: "Independently published",
    pages: 143,
    description:
      "The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
    website:
      "https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started",
  },
  {
    isbn: "9781484200766",
    title: "Pro Git",
    subtitle: "Everything you neeed to know about Git",
    author: "Scott Chacon and Ben Straub",
    published: "2014-11-18T00:00:00.000Z",
    publisher: "Apress; 2nd edition",
    pages: 458,
    description:
      "Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
    website: "https://git-scm.com/book/en/v2",
  },
  {
    isbn: "9781484242216",
    title: "Rethinking Productivity in Software Engineering",
    subtitle: "",
    author: "Caitlin Sadowski, Thomas Zimmermann",
    published: "2019-05-11T00:00:00.000Z",
    publisher: "Apress",
    pages: 310,
    description:
      'Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 "Dagstuhl" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.',
    website: "https://doi.org/10.1007/978-1-4842-4221-6",
    hasMovieAdaptation: true,
  },
];

function getBooks() {
  return books;
}

const all_books = getBooks();

const book_titles = all_books.map((book) => book.title);
console.log(book_titles);
// Output: [ 'Eloquent JavaScript, Third Edition',
//           'Practical Modern JavaScript',
//           'Understanding ECMAScript 6',
//           'Speaking JavaScript',
//           'Learning JavaScript Design Patterns',
//           'You Don\'t Know JS Yet',
//           'Pro Git',
//           'Rethinking Productivity in Software Engineering' ]
// : deconstructs each object to get the titles and then finally returns all the book titles in an array

const essentialData = all_books.map((book) => {
  return {
    title: book.title,
    author: book.author,
  };
});
console.log(essentialData);
// Output: [ { title: 'Eloquent JavaScript, Third Edition',
//             author: 'Marijn Haverbeke' },
//           { title: 'Practical Modern JavaScript',
//             author: 'Nicolás Bevacqua' },
//           { title: 'Understanding ECMAScript 6',
//             author: 'Nicholas C. Zakas' },
//           { title: 'Speaking JavaScript', author: 'Axel Rauschmayer' },
//           { title: 'Learning JavaScript Design Patterns',
//             author: 'Addy Osmani' },
//           { title: 'You Don\'t Know JS Yet', author: 'Kyle Simpson' },
//           { title: 'Pro Git', author: 'Scott Chacon and Ben Straub' },
//           { title: 'Rethinking Productivity in Software Engineering',
//             author: 'Caitlin Sadowski, Thomas Zimmermann' } ]
// : returns a new array with nested objects containing the book title and author

// The same works when we wrap the values(line 132 and 133) in a parenthesis and removing the `return` keyword in the example (line 131)
const essentialData_1 = all_books.map((book) => ({
  title: book.title,
  author: book.author,
}));
console.log(essentialData_1);
// Output: [ { title: 'Eloquent JavaScript, Third Edition',
//             author: 'Marijn Haverbeke' },
//           { title: 'Practical Modern JavaScript',
//             author: 'Nicolás Bevacqua' },
//           { title: 'Understanding ECMAScript 6',
//             author: 'Nicholas C. Zakas' },
//           { title: 'Speaking JavaScript', author: 'Axel Rauschmayer' },
//           { title: 'Learning JavaScript Design Patterns',
//             author: 'Addy Osmani' },
//           { title: 'You Don\'t Know JS Yet', author: 'Kyle Simpson' },
//           { title: 'Pro Git', author: 'Scott Chacon and Ben Straub' },
//           { title: 'Rethinking Productivity in Software Engineering',
//             author: 'Caitlin Sadowski, Thomas Zimmermann' } ]

// =====================================================================================
// FILTER Function
// : the filter method loops each element and returns only the element that meets the condition
// =====================================================================================

// Example:
const longBooks_1 = all_books
  .filter((book) => book.pages > 200)
  .filter((book) => book.subtitle !== "");

console.log(longBooks_1);
// Output: will not input the results because the output contains multiple books objects
// making it long but mainly it will return all the books that contains book pages that are greater than 200

// We can also chain filter methods
const longBooks_2 = all_books
  .filter((book) => book.pages > 200)
  .filter((book) => book.subtitle !== "");

console.log(longBooks_2);
// Output: the returned values are books that contain subtitle

const longBooks_title = all_books
  .filter((book) => book.pages > 200)
  .map((book) => book.title);

console.log(longBooks_title);
// Output: [ 'Eloquent JavaScript, Third Edition',
//           'Practical Modern JavaScript',
//           'Understanding ECMAScript 6',
//           'Speaking JavaScript',
//           'Learning JavaScript Design Patterns',
//           'Pro Git',
//           'Rethinking Productivity in Software Engineering' ]
// : returns all book titles that have pages greater than 200

// =====================================================================================
// REDUCE Function
// : the most versatile and most powerful of all array methods in JS
// : reduce the entire array to just one value
// =====================================================================================

// Take note that the accumulator(0) value can be an array, an object or any value
const pagesAllBooks = all_books.reduce((sum, book) => sum + book.pages, 0);
console.log(pagesAllBooks);
// Output: 2783

// : the `acc` is basically the current value of the final value that we want the array to boil down to
// So, basically the variable pagesAllBooks is equal to `acc` and we want to have the initial value as 0 (line 218 last value `0`)
// Given we have multiple pages value. The first `acc` value will be the first # of pages of the first element (472). `acc` will then be equal to 472.
// It will run to the second element then add 472 to the second # of pages.
// Think of this in Python in a way as for loop initializing a variable that will store the value in each element then adding the variable in each loop

// =====================================================================================
// SORT Function
// : use for sorting (increasing or decreasing order) values
// : sort takes two parameters (a, b) ; `a` is the current value while `b` is the next value
// : SORT changes the original array so given the example line 240. it will change according to the sorted function (Descending or Ascending) form
// ASCENDING: if the value return is negative (a - b) where a = 3, b=7   ::: 3-7 = -4 so the value is negative hence the array is in ASCENDING order
// DESCENDING: if the value return is positive (b - a ) where a = 3, b=7   ::: 7 - 3 = 4 so the value is positive hence the array is in DESCENDINGG order
// =====================================================================================

// Example:
const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
// As you can see, the original array `arr` changed
console.log(arr);
console.log(sorted);
// Output: [1, 3, 6, 7, 9] Ascending order

// By copying the original array, we wont be able to change it. To do this, use slice()
const slice_sorted = arr.slice().sort((a, b) => b - a);
console.log(slice_sorted);
console.log(arr);

const sortedByPages = all_books.slice().sort((a, b) => b.pages - a.pages);
console.log(sortedByPages);
// Output: returns the books in Descending order from highest number of pages to lowest number of pages


export default books