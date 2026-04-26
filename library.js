
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
    


    
    

    
    if(
        (!title.value && !author.value ) ) {
        alert("Author or Title is required");
        e.preventDefault();
    } else {

    console.log(`This:${title.value}, ${author.value}, ${readBook.value} and ${pages.value}`)
    addBookToLibrary(title.value,author.value,pages.value,readBook.value);
    
    console.log(mylibrary)

 
} });



closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    bookForm.reset();
    showBook();
   
})

 
let digit = 0;
let bookNumber = 0;

function reset() {
    bookNumber = 0;
}

function numb() {
      digit += 1;  
}
let valueName = "Yes";
var i = 0;
let radios = document.querySelectorAll("input[name=\"read-book\"]");

function count() {
  bookNumber = collection.childElementCount -2; 
    console.log(bookNumber) 
   return bookNumber;
}

function reduceCount() {
    bookNumber = (collection.childElementCount - 2) -1;
    console.log(bookNumber);
    return bookNumber;
}

function showBook() {
    mylibrary.forEach(item => {
        console.table(item)
    
    bookDisplay = document.createElement("div");
    bookDisplay.id = "bookDisplay" + "_" + i++;
    bookDisplay.dataset.bookId = item.id;
    

    numb();
    


    
    const headerDiv2 = document.createElement("div");
    const headerDiv3 = document.createElement("div");
    const headerDiv4 = document.createElement("div");
    const headerDiv5 = document.createElement("label");

    
    headerDiv2.textContent = "Title";
    headerDiv3.textContent = "Author";
    headerDiv4.textContent = "Pages";
    headerDiv5.textContent = "Read";

    
    headerDiv2.style.color = "black";
    headerDiv3.style.color = "black";
    headerDiv4.style.color = "black";
    headerDiv5.style.color = "black";

    
    const userTitle = document.createElement("div");
    const userAuthor = document.createElement("div");
    const userPages = document.createElement("div");
    const readCheck = document.createElement("input");
    readCheck.type = "checkbox";
   
    readCheck.id = `${checkbox.value}`;
    const createGridEle9 = document.createElement("div");
    const delBtn = document.createElement('button')


   
    createGridEle9.style.color = 'red';

   

    
    userTitle.textContent = `${item.title}`;
    userAuthor.textContent = `${item.author}`;
    userPages.textContent  = `${item.pages}`
    
    createGridEle9.textContent = ' ';
    delBtn.textContent = 'delete'
    delBtn.id = "delete-button"
    delBtn.classList = "trash";

    
   

  
const libraryCount = document.createElement('div');
libraryCount.textContent =  `${bookNumber}`

let bookNumberDisplay = document.querySelector("#booksIn");
bookNumberDisplay.textContent = 



    
bookDisplay.append(headerDiv2, headerDiv3, headerDiv4, headerDiv5, createGridEle9, userTitle, userAuthor, userPages, readCheck, delBtn);
bookNumberDisplay.append(++bookNumber)
collection.append(bookDisplay);
   





delBtn.addEventListener('click', (e)=> {
        const bookD = e.target.closest('[data-book-id]');
        const id = bookD.dataset.bookId;
        console.log(id)
        const bookCard = document.querySelector(`[data-book-id="${id}"]`);
        

         
        const index = mylibrary.findIndex(item => item.id === id);
        if (index !== -1)mylibrary.splice(index,1);
        if(bookCard){bookCard.remove()};
        bookNumberDisplay.textContent = '';
        reset();
        count();
        bookNumber
        bookNumber -1;
        
      
        bookNumberDisplay.append(bookNumber);
        
        console.log(bookNumber);
     
  
    })
    reset();
    count();
    
    })};

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
