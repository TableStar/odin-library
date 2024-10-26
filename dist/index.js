"use strict";
const myLibrary = [
    {
        title: "The Twin Towers",
        author: "J.R.R Tolkien",
        pages: 500,
        isRead: false,
    },
];
class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}
Book.prototype.toggleRead = function () {
    this.isRead = !this.isRead;
};
const renderBook = () => {
    const bookContainer = document.querySelector(".book-container");
    if (myLibrary) {
        const newBooks = myLibrary.map((book) => {
            const div = document.createElement("div");
            div.className = "books";
            div.innerHTML = `<div class="book-stats">
                <h2>${book.title}</h2>
                <p>Author: ${book.author}</p>
                <p>Deskripsi</p>
                <p>Total Pages: ${book.pages}</p>
                <p>${book.isRead
                ? "You have read this book"
                : "You haven't read this book"}</p>
        </div>
                <div class="book-buttons">
                    <button class="remove-button">Remove</button>
                    <button class="read-button">Read</button>
                </div>`;
            return div;
        });
        bookContainer.append(...newBooks);
    }
};
renderBook();
