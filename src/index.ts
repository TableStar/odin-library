interface BookInterface {
  title: string;
  author: string;
  pages: number;
  isRead: boolean;
}

const myLibrary: BookInterface[] = [
  {
    title: "The Twin Towers",
    author: "J.R.R Tolkien",
    pages: 500,
    isRead: false,
  },
];

class Book implements BookInterface {
  constructor(
    public title: string,
    public author: string,
    public pages: number,
    public isRead: boolean
  ) {}
}

interface Book {
  toggleRead: () => void;
}

Book.prototype.toggleRead = function () {
  this.isRead = !this.isRead;
};

const addBookToLib = () => {
  const title = (<HTMLInputElement>document.querySelector("#title")).value;
  const author = (<HTMLInputElement>document.querySelector("#author")).value;
  const pages = (document.querySelector("#pages") as HTMLInputElement).value;
  const read = (
    document.querySelector(`input[name="isRead"]:checked`) as HTMLInputElement
  ).value;

  const newBook = new Book(title, author, parseInt(pages), JSON.parse(read));
  myLibrary.push(newBook);
  renderBook();
};

const clearFormField = () => {
  (<HTMLInputElement>document.querySelector("#title")).value = "";
  (<HTMLInputElement>document.querySelector("#author")).value = "";
  (document.querySelector("#pages") as HTMLInputElement).value = "";
  (document.querySelectorAll(`input[name="isRead"]`) as NodeList).forEach(
    (radio) => ((radio as HTMLInputElement).checked = false)
  );
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
                <p>${
                  book.isRead
                    ? "You have read this book"
                    : "You haven't read this book"
                }</p>
        </div>
                <div class="book-buttons">
                    <button data-index=${i} class="remove-button">Remove</button>
                    <button data-index=${i} class="read-button">Read</button>
                </div>`;
      return div;
    });

    bookContainer!.innerHTML = "";
    bookContainer!.append(...newBooks);
  }
};

const dialog = document.querySelector("dialog");
const addButton = document.querySelector("#add");
const resetButton = document.querySelector("#reset");
const closeFormButton = document.querySelector(".close-button");
const addBookButton = document.querySelector("#save");

addButton?.addEventListener("click", () => {
  dialog?.showModal();
});

addBookButton?.addEventListener("click", (e) => {
  e.preventDefault();
  addBookToLib();
  clearFormField();
  dialog?.close();
});

resetButton?.addEventListener("click", () => {
  clearFormField();
});

closeFormButton?.addEventListener("click", () => {
  clearFormField();
  dialog?.close();
});

renderBook();
