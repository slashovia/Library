const dialog = document.querySelector('dialog');
const formInput = document.querySelectorAll('.formInput');
const openBtn = document.querySelector('#openBtn');
const closeBtn = document.querySelector('#closeBtn');
const confirmBtn = document.querySelector('#confirmBtn');
let name = document.querySelector('#name');
let author = document.querySelector('#author');
let year = document.querySelector('#year');
let pages = document.querySelector('#pages');
let genre = document.querySelector('#genre');
let status = document.querySelector('#status');
const container = document.querySelector('.container-books');
const myLibrary = [];

function showDialog() {
    dialog.showModal();
}

function resetDialog() {
    formInput.forEach(input => {
        input.value = '';

    });
    dialog.close();
}

function Book(name, author, year, pages, genre, status) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.genre = genre;
    this.status = status;

}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function createElementCard(book) {
    //Card
    const card = document.createElement('div');
    card.classList.add('card');
    container.appendChild(card);

    //Ul
    const ul = document.createElement('ul');
    card.appendChild(ul)

    //Li
    for (const key in book) {
        const li = document.createElement('li');
        li.textContent = key.charAt(0).toUpperCase() + key.slice(1) + ': ' + book[key];
        ul.appendChild(li);
    }

    //Change status Button
    const statusBtn = document.createElement('button');
    statusBtn.classList.add('status-btn');
    statusBtn.textContent = 'Change Status';
    card.appendChild(statusBtn);
    statusBtn.addEventListener('click', () => {
        const statusLi = card.querySelector('ul > li:last-child');
        if (statusLi.textContent == 'Status: Read') {
            statusLi.textContent = 'Status: Not read yet';
            book.status = 'Not read yet';
        }
        else {
            statusLi.textContent = 'Status: Read';
            book.status = 'Read';
        }
    })

    //Remove book Button
    const removeBtn = document.createElement('button')
    removeBtn.classList.add('remove-btn');
    removeBtn.textContent = 'Remove Book';
    card.appendChild(removeBtn);
    removeBtn.addEventListener('click', () => {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        card.remove();
    })
}

confirmBtn.addEventListener('click', () => {
    const newBook = new Book(name.value, author.value, year.value, pages.value, genre.value, status.value);
    addBookToLibrary(newBook);
    createElementCard(newBook);
    resetDialog();
})

