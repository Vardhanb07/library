const myLibrary = []
function Book(title, pages, status, priority, id){
    if(!new.target){
        throw Error('This is a constructor');
    }
    this.title = title;
    this.pages = pages;
    this.status = status;
    this.priority = priority;
    this.id = id;
}
function addBookToLibrary(title, pages, status, priority){
    const id = crypto.randomUUID(); 
    myLibrary.push(new Book(title, pages, status, priority, id));
}
addBookToLibrary()

const bookHolder = document.querySelector('.book-holder')
const form = document.querySelector('.form')
const header = document.querySelector('.header')
bookHolder.addEventListener('click', () => {
    bookHolder.style.display = 'none'
    form.style.display = 'block'
    header.style.filter = 'blur(8px)'
})