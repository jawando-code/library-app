console.log("Hello")
const mylibrary = [];


function Book(title,author,pages, read,id) {

    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
        this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = crypto.randomUUID()
    
}

function addBookToLibrary(book) {
    mylibrary.push(book)
}

let book1 = new Book("LOTR", "J.R. Tolkein", "569",)


let libraryDisplay = document.querySelector('.left-container');
let book = document.createElement("div");
let addBook = document.querySelector("add-book");
