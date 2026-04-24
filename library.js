
const mylibrary = [];
let book1 = addBookToLibrary("LOTR", "J.R. Tolkein", "569",'No');
let book2 = addBookToLibrary("Eddie Quansa", "Alabi Peacock", "215", 'Yes');

function book(title,author,pages, read,id) {
   this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read,
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read) {
    let a = new book(title, author, pages, read)
    mylibrary.push(a)
    return a;
}


let addBook = document.querySelector(".add");

const showBtn = document.getElementById("show-dialog");
const dialog = document.getElementById("book-dialog");
const closeBtn = document.querySelector("#form-close");
const cancel = document.querySelector("#cancel");
const collection = document.querySelector('.collection')

const bookForm = document.querySelector("#book-form")



closeBtn.addEventListener('click',(e)=> {
    e.preventDefault();
    mylibrary.length = 0;
    let title = document.getElementById("title")
    let author = document.getElementById('author')
    let pages = document.getElementById('pages')
    let readBook = document.getElementsByName('readBook');
    
    

    
    if(
        (!title.value && !author.value ) ) {
        alert("Author or Title is required");
        e.preventDefault();
    } else {

    console.log(`This:${title.value}, ${author.value}, ${readBook.value} and ${pages.value}`)
    addBookToLibrary(title.value,author.value,pages.value,readBook.value);
    showBook();
    console.log(mylibrary)

 
} });


closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bookForm.reset();
})

 
let digit = 0;


function numb() {
      digit += 1;  
}
let valueName = "Yes";
var i = 0;
let radios = document.querySelectorAll("input[name=\"read-book\"]");


function showBook() {
    mylibrary.forEach(item => {
        console.table(item)
    
    bookDisplay = document.createElement("div");
    bookDisplay.id = "bookDisplay" + "_" + i++;
    bookDisplay.dataset.bookId = item.id;
    bookDisplay.class = "bookDisplayClass"

    numb();
    const createGridEle = document.createElement("div");
    const createGridEle1 = document.createElement("div");
    const createGridEle2 = document.createElement("div");
    const createGridEle3 = document.createElement("div");
    const createGridEle4 = document.createElement("label");
    const createGridEleN = document.createElement("div");
    const createGridEle5 = document.createElement("div");
    const createGridEle6 = document.createElement("div");
    const createGridEle7 = document.createElement("div");
    const createGridEle8 = document.createElement("input");
    createGridEle8.type = "checkbox";
    createGridEle8.id = `${checkbox.value}`;
    const createGridEle9 = document.createElement("div");
    const rmv = document.createElement('button')


    createGridEle.textContent = "#"
    createGridEle1.textContent = "Title";
    createGridEle2.textContent = "Author";
    createGridEle3.textContent = "Pages";
    createGridEle4.textContent = "Read";

    createGridEle.style.color = "black";
    createGridEle1.style.color = "black";
    createGridEle2.style.color = "black";
    createGridEle3.style.color = "black";
    createGridEle4.style.color = "black";
    createGridEle9.style.color = 'red';

   

    createGridEleN.textContent = `${digit}`;
    createGridEle5.textContent = `${item.title}`;
    createGridEle6.textContent = `${item.author}`;
    createGridEle7.textContent  = `${item.pages}`
    
    createGridEle9.textContent = 'Remove';
    rmv.textContent = 'delete'
    rmv.classList = "trash"
    

     


    
bookDisplay.append(createGridEle,createGridEle1, createGridEle2, createGridEle3, createGridEle4, createGridEle9, createGridEleN,createGridEle5,createGridEle6, createGridEle7, createGridEle8, rmv);
   collection.append(bookDisplay);

rmv.addEventListener('click', (e)=> {
        const bookD = e.target.closest('[data-book-id]');
        const id = bookD.dataset.bookId;
        console.log(id)
        const bookCard = document.querySelector(`[data-book-id="${id}"]`);
        

         
        const index = mylibrary.findIndex(item => item.id === id);
        if (index !== -1)mylibrary.splice(index,1);
        if(bookCard){bookCard.remove()};
    
    })
})  
} ;


showBook(mylibrary);



function clear() {
    title.textContent = '';
    author.textContent = '';
    pages.textContent = '';
}

function remove() {
    id = this.id;
    console.log(id)
}



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
});


function Addvalues(Book) {
    Object.values(Book).forEach((value) => {
        const div = document.createElement('div');
        div.textContent = value;
        bookDisplay.appendChild(console.log(div));
    })
   
}

let appender = document.querySelector('.appender')

    // appender.addEventListener('click',showBook);