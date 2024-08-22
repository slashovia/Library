const dialog = document.querySelector('dialog');
const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const confirmBtn = document.querySelector('#confirmBtn');
let name = document.querySelector('#name');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let genre = document.querySelector('#genre');
let status = document.querySelector('#status');
const container = document.querySelector('.container-books');
const myLibrary = [];

function showDialog() {
    dialog.showModal();
}

function Book(name, author, year, genre, status) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.status = status;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


confirmBtn.addEventListener('click', () => {

    const newBook = new Book(name.value, author.value, year.value, genre.value, status.value);
    addBookToLibrary(newBook);
    console.log(myLibrary);

    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);
    card.style['width'] = '200px';
    card.style['backgroundColor'] = 'lightgrey';
    card.style['color'] = 'red';
    const ul = document.createElement('ul');
    card.appendChild(ul);
    for (const key in newBook) {
        const li = document.createElement('li');
        li.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ': ' + newBook[key];
        ul.appendChild(li);
    }
})
