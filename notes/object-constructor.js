function Book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.isRead = isRead;
  this.info = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.isRead ? "has been read" : "not yet read"
    }`;
  };
}

const bleach = new Book("Bleach", "Tite Kubo", 10000, true);
console.log(bleach.info());

function Person(name) {
  this.name = name;
}

Person.prototype.sayName = function() {
  console.log(`Hello,I'm ${this.name}!`);
};

function Player(name, marker) {
  this.name = name;
  this.marker = marker;
}

Player.prototype.getMarker = function() {
  console.log(`My marker is "${this.marker}"`);
};

Object.getPrototypeOf(Player.prototype)

Object.setPrototypeOf(Player.prototype,Person.prototype)

Object.getPrototypeOf(Player.prototype);

const player1 = new Player("steve","x")
const player2 = new Player("also steve","o")

player1.sayName(); 
player2.sayName();

player1.getMarker(); 
player2.getMarker(); 