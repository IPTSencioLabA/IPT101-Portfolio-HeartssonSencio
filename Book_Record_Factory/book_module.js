import { book } from "./book_object.js";

export function formatBookStatus(targetBook, status = "available") {
  const formattedStatus = String(status).toUpperCase();

  return `[${formattedStatus}] "${targetBook.title}" by ${targetBook.author} (${targetBook.year}) - read: ${targetBook.read}`;
}

export function getBookLabel(status = "available") {
  return formatBookStatus(book, status);
}