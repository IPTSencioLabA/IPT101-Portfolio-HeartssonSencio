import { book } from "./book_object.js";
import { formatBookStatus, getBookLabel } from "./book_format.js";

console.log(book.title);
console.log(getBookLabel());
console.log(book.toggleRead());
console.log(formatBookStatus(book, "in review"));