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
const bookHolder = document.querySelector('.book-holder')
const form = document.querySelector('.form')
const header = document.querySelector('.header')
bookHolder.addEventListener('click', () => {
    bookHolder.style.display = 'none'
    form.style.display = 'block'
    header.style.filter = 'blur(8px)'
})
const button = document.querySelector('button')
button.addEventListener('click', () => {
    let input = document.querySelector('#title').value
    console.log(input)
    form.style.display = 'none'
    bookHolder.style.display = 'flex'
    header.style.filter = 'blur(0)'
})
document.querySelector('.add-book').addEventListener('click', () => {
    bookHolder.style.display = 'none'
    form.style.display = 'block'
    header.style.filter = 'blur(8px)'
})
document.querySelector('.return').addEventListener('click', () => {
    bookHolder.style.display = 'flex'
    form.style.display = 'none'
    header.style.filter = 'blur(0)'
})