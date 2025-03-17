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
const button = document.querySelector('#submit')
let c = 0
button.addEventListener('click', (e) => {
    e.preventDefault()
    let title = document.querySelector('#title').value
    let pages = document.querySelector('#pages').value
    let status = document.querySelector('#status').getAttribute('data-status').toLowerCase()
    let priority = document.querySelector('#priority').value
    if(title != '' && pages != '' && status != '' && priority != ''){
        addBookToLibrary(title, pages, status, priority)
        let div = document.createElement('div')
        div.classList.add('book')
        div.setAttribute('data-id', `${myLibrary[c].id}`)
        document.querySelector('.book-info').appendChild(div)
        // title
        let innerDiv = document.createElement('div')
        let para1 = document.createElement('p')
        para1.classList.add('title')
        para1.textContent = 'TITLE'
        let para2 = document.createElement('p')
        para2.classList.add('book-title')
        para2.textContent = myLibrary[c].title  
        innerDiv.appendChild(para1)
        innerDiv.appendChild(para2)
        div.appendChild(innerDiv)
        // pages
        innerDiv = document.createElement('div')
        para1  = document.createElement('p')
        para1.classList.add('pages')
        para1.textContent = 'PAGES'
        para2 = document.createElement('p')
        para2.classList.add('book-pages')
        para2.textContent = myLibrary[c].pages
        innerDiv.appendChild(para1)
        innerDiv.appendChild(para2)
        div.appendChild(innerDiv)
        // status
        innerDiv = document.createElement('div')
        para1  = document.createElement('p')
        para1.classList.add('status')
        para1.textContent = 'STATUS'
        para2 = document.createElement('p')
        para2.classList.add('book-status')
        para2.textContent = myLibrary[c].status
        innerDiv.appendChild(para1)
        innerDiv.appendChild(para2)
        div.appendChild(innerDiv)
        // priority
        innerDiv = document.createElement('div')
        para1  = document.createElement('p')
        para1.classList.add('priority')
        para1.textContent = 'PRIORITY'
        para2 = document.createElement('p')
        para2.classList.add('book-priority')
        para2.textContent = myLibrary[c].priority
        innerDiv.appendChild(para1)
        innerDiv.appendChild(para2)
        div.appendChild(innerDiv)
        // remove-btn
        innerDiv = document.createElement('div')
        let removeBtn = document.createElement('button')
        removeBtn.classList.add('remove-btn')
        removeBtn.setAttribute('data-id', `${myLibrary[c].id}`)
        removeBtn.textContent = 'REMOVE'
        innerDiv.appendChild(removeBtn)
        div.appendChild(innerDiv)
        removeBtn.addEventListener('click', () => {
            let id = removeBtn.getAttribute('data-id')
            let books = document.querySelectorAll('.book')
            books.forEach(book => {
                if(id === book.getAttribute('data-id')){
                    book.style.display = 'none'
                }
            })
        })
        console.log(myLibrary)
        c += 1

        document.querySelector('.book-info').style.display = 'flex'
        bookHolder.style.display = 'none'
        document.querySelector('form').reset()
        header.style.filter = 'blur(0)'
        form.style.display = 'none'
        let books = document.querySelectorAll('.book')
        books.forEach(book => {
            book.style.filter = 'blur(0)'
        });
    }else if(c >= 1){
        form.style.display = 'none'
        bookHolder.style.display = 'none'
        header.style.filter = 'blur(0)'
        document.querySelector('form').reset()
        let books = document.querySelectorAll('.book')
        books.forEach(book => {
            book.style.filter = 'blur(0)'
        });
    }else{
        form.style.display = 'none'
        bookHolder.style.display = 'flex'
        header.style.filter = 'blur(0)'
        document.querySelector('form').reset()
        let books = document.querySelectorAll('.book')
        books.forEach(book => {
            book.style.filter = 'blur(0)'
        });
    }
})
document.querySelector('.add-book').addEventListener('click', () => {
    bookHolder.style.display = 'none'
    form.style.display = 'block'
    header.style.filter = 'blur(8px)'
    let books = document.querySelectorAll('.book')
    books.forEach(book => {
        book.style.filter = 'blur(8px)'
    });
})
document.querySelector('.return').addEventListener('click', () => {
    bookHolder.style.display = 'flex'
    form.style.display = 'none'
    header.style.filter = 'blur(0)'
})
const readBtn = document.querySelector('button[type="button"]')
readBtn.addEventListener('click', () => {
    let content = readBtn.textContent
    if(content == 'READ'){
        readBtn.textContent = 'NOT READ'
        readBtn.setAttribute('data-status', 'READ')
    }else{
        readBtn.textContent = 'READ'
        readBtn.setAttribute('data-status', 'NOT READ')
    }
})