import { book } from "./book_object.js";
import { formatBookStatus, getBookLabel } from "./book_module.js";

console.log(book.title);
console.log(getBookLabel());

const previewReadState = book.Read();
console.log("Toggled preview (unchanged):", previewReadState);
console.log(formatBookStatus(book, "in review"));