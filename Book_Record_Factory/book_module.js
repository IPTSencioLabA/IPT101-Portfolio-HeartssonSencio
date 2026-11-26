import { book } from "./book_object.js";

export function formatBookStatus(targetBook, status) {
  let activeStatus = "available";
  if (status) {
    activeStatus = status;
  }

  const formattedStatus = String(activeStatus).toUpperCase();

  let readLabel = "UNREAD";
  if (targetBook.read) {
    readLabel = "READ";
  }

  return `[${formattedStatus}] "${targetBook.title}" by ${targetBook.author} (${targetBook.year}) - ${readLabel}`;
}

export function getBookLabel(status) {
  return formatBookStatus(book, status);
}