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
const addBookToLib = () => {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector(`input[name="isRead"]:checked`).value;
    const newBook = new Book(title, author, parseInt(pages), JSON.parse(read));
    myLibrary.push(newBook);
    renderBook();
};
const clearFormField = () => {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelectorAll(`input[name="isRead"]`).forEach((radio) => (radio.checked = false));
};
const renderBook = () => {
    const bookContainer = document.querySelector(".book-container");
    if (myLibrary) {
        const newBooks = myLibrary.map((book, i) => {
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
                    <button data-index=${i} class="remove-button">Remove</button>
                    <button data-index=${i} class="read-button">Read</button>
                </div>`;
            return div;
        });
        bookContainer.innerHTML = "";
        bookContainer.append(...newBooks);
    }
};
const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add");
const resetButton = document.querySelector("#reset");
const closeFormButton = document.querySelector(".close-button");
const addBookButton = document.querySelector("#save");
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", () => {
    dialog === null || dialog === void 0 ? void 0 : dialog.showModal();
});
addBookButton === null || addBookButton === void 0 ? void 0 : addBookButton.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLib();
    clearFormField();
    dialog === null || dialog === void 0 ? void 0 : dialog.close();
});
resetButton === null || resetButton === void 0 ? void 0 : resetButton.addEventListener("click", () => {
    clearFormField();
});
closeFormButton === null || closeFormButton === void 0 ? void 0 : closeFormButton.addEventListener("click", () => {
    clearFormField();
    dialog === null || dialog === void 0 ? void 0 : dialog.close();
});
renderBook();
