let books = [];
let issuedBooks = [];


function viewBooks() {
    let tableBody = document.getElementById('tableBody');
    for (let index = 0; index < issuedBooks.length; index++) {
        let uiString = `<tr>
                        <td>${books[index]}</td>
                        <td>${issuedBooks[index]}</td>
                    </tr>`;
        if (books.length != 0 && issuedBooks.length != 0) {
            tableBody.innerHTML += uiString;
        } else {
            tableBody.innerHTML = `0 Books Found, Add Books from above`
        }
    }
}


class Library {
    constructor() {
        books.push('Sample Book 1');
        books.push('Sample Book 2');
        issuedBooks.push('Issued Book 1');
        issuedBooks.push('Issued Book 2');
    }

    addBook(bookName) {
        books.push(bookName);
    }

    removeBook(reBook) {
        let index = books.indexOf(reBook);
        if (books.includes(reBook)) {
            if (index !== -1) {
                books.splice(index, 1);
            }
        } else {
            console.log('Book not available');
        }
    }

    showBooks() {
        for (let index = 0; index < books.length; index++) {
            console.log(books[index]);
            viewBooks();
        }
    }

    showIBooks() {
        for (let index = 0; index < issuedBooks.length; index++) {
            console.log(issuedBooks[index]);
        }
    }

    issueBook(iBook) {
        let index = books.indexOf(iBook);
        if (books.includes(iBook)) {
            if (index !== -1) {
                books.splice(index, 1);
                issuedBooks.push(iBook);
            }
        } else {
            console.log('Book not available');
        }
    }

    returnBook(rBook) {
        let index = issuedBooks.indexOf(rBook);
        if (issuedBooks.includes(rBook)) {
            if (index !== -1) {
                issuedBooks.splice(index, 1);
                books.push(rBook);
            }
        } else {
            console.log('Book not available');
        }
    }

}

let lib = new Library();
lib.addBook('New Book');
lib.addBook('New Book 2');
lib.issueBook('Sample Book 2');
lib.showBooks();


let bookName = document.getElementById("bookName");

let addB = document.getElementById("addB");
addB.addEventListener("click", function() {
    lib.addBook(bookName.value);
    bookName.value = "";
})

let issueB = document.getElementById("issueB");
issueB.addEventListener("click", function() {
    lib.issueBook(bookName.value);
    bookName.value = "";
})

let returnB = document.getElementById("returnB");
returnB.addEventListener("click", function() {
    lib.returnBook(bookName.value);
    bookName.value = "";
})


let showAB = document.getElementById("showAB");
showAB.addEventListener("click", function() {
    lib.showBooks(bookName.value);
    bookName.value = "";
})

let removeB = document.getElementById("removeB");
removeB.addEventListener("click", function() {
    lib.removeBook(bookName.value);
    bookName.value = "";
})