console.log("Hello")
const mylibrary = [];

let book1 = new Book("LOTR", "J.R. Tolkein", "569",)
let book2 = new Book("Eddie Quansa", "Alabi Peacock", "215", 'yes')
let book3 = new Book("Harry Potter and The Goblet of Fire",  "J.K. Rowling", "446", 'no')


function Book(title,author,pages, read,id) {

    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    [    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = id
    ]   
}

function addBookToLibrary(book) {
    mylibrary.push(book)
}



let libraryDisplay = document.querySelector('.left-container');
let book = document.createElement("div");
let addBook = document.querySelector(".add");

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("book-dialog");
const closeBtn = document.querySelector("#form-close");
const cancel = document.querySelector("#cancel");
const collection = document.querySelector('.collection')
const bookDisplay = document.createElement('div');
const bookForm = document.querySelector("#book-form")

closeBtn.addEventListener('click',(e)=> {
    e.preventDefault();
    let title = document.getElementById("title")
    let author = document.getElementById('author')
    let pages = document.getElementById('pages')
    console.log(`This:${title.value}, ${author.value} and ${pages.value}`)
    showBook(title.value,author.value,pages.value)
})
// function sendValue() {
    
//     let title = document.getElementById("title")
//     let author = document.getElementById('author')
//     let pages = document.getElementById('pages')
    
function showBook(title,author,pages) {
    


    bookDisplay.className = "book-display"
    bookDisplay.style.display = "grid"
    const createGridEle1 = document.createElement("div");
    const createGridEle2 = document.createElement("div");
    const createGridEle3 = document.createElement("div");
    const createGridEle4 = document.createElement("div");

    createGridEle1.textContent = "Title:";
    createGridEle2.textContent = "Author:";
    createGridEle3.textContent  = "Pages:";
    createGridEle4.textContent = "Read:"


    const createGridEle5 = document.createElement("div");
    const createGridEle6 = document.createElement("div");
    const createGridEle7 = document.createElement("div");
    const createGridEle8 = document.createElement("div");

    createGridEle5.textContent = `${title}`;
    createGridEle6.textContent = `${author}`;
    createGridEle7.textContent  = `${pages}`
    createGridEle8.textContent = `yes`;

    bookDisplay.append(createGridEle1, createGridEle2, createGridEle3, createGridEle4, createGridEle5,createGridEle6, createGridEle7, createGridEle8);
   collection.append(bookDisplay);
    
};

// dialog.addEventListener("submit", showBook(title,author,pages) );








// function showBook(title,author,pages) {
// const collection = document.querySelector('.collection')
// const bookDisplay = document.createElement('div');

// bookDisplay.className = "book-display"
// bookDisplay.style.display = "grid"
// const createGridEle1 = document.createElement("div");
// const createGridEle2 = document.createElement("div");
// const createGridEle3 = document.createElement("div");
// const createGridEle4 = document.createElement("div");

// createGridEle1.textContent = "Title:";
// createGridEle2.textContent = "Author:";
// createGridEle3.textContent  = "Pages:";
// createGridEle4.textContent = "Read:"


// const createGridEle5 = document.createElement("div");
// const createGridEle6 = document.createElement("div");
// const createGridEle7 = document.createElement("div");
// const createGridEle8 = document.createElement("div");

// createGridEle5.textContent = `${title}`;
// createGridEle6.textContent = `${author}`;
// createGridEle7.textContent  = `${pages}`
// createGridEle8.textContent = `Yes`;

// bookDisplay.append(createGridEle1, createGridEle2, createGridEle3, createGridEle4, createGridEle5,createGridEle6, createGridEle7, createGridEle8);
// collection.append(bookDisplay) 

// };
// }

showBtn.addEventListener('click', ()=> {
    dialog.showModal();
})

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

cancel.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.close();
})

let createBook = function (title,author,pages,read) {
   return  [title, author,pages, read, crypto.randomUUID()]

}

closeBtn.addEventListener('click', function(event){
    event.preventDefault();
    if(dialog.returnValue === "submit") return;
    console.log(dialog.returnValue)
})


// function showBook(obj) {
//     const collection = document.querySelector('.collection')
//     const bookDisplay = document.createElement('div');

//     bookDisplay.className = "book-display"
//     bookDisplay.style.display = "grid"
//     const createGridEle1 = document.createElement("div");
//     const createGridEle2 = document.createElement("div");
//     const createGridEle3 = document.createElement("div");
//     const createGridEle4 = document.createElement("div");

//     createGridEle1.textContent = "Title:";
//     createGridEle2.textContent = "Author:";
//     createGridEle3.textContent  = "Pages:";
//     createGridEle4.textContent = "Read:"


//     const createGridEle5 = document.createElement("div");
//     const createGridEle6 = document.createElement("div");
//     const createGridEle7 = document.createElement("div");
//     const createGridEle8 = document.createElement("div");

//     createGridEle5.textContent = `${obj.title}`;
//     createGridEle6.textContent = `${obj.author}`;
//     createGridEle7.textContent  = `${obj.pages}`
//     createGridEle8.textContent = `${obj.read}`;

//    bookDisplay.append(createGridEle1, createGridEle2, createGridEle3, createGridEle4, createGridEle5,createGridEle6, createGridEle7, createGridEle8);
//    collection.append(bookDisplay) 
    
// }

function Addvalues(Book) {
    Object.values(Book).forEach((value) => {
        const div = document.createElement('div');
        div.textContent = value;
        bookDisplay.appendChild(console.log(div));
    })
   
}

let appender = document.querySelector('.appender')

    // appender.addEventListener('click',showBook)


