let idForCategory = 1;
let idForPublisher = 1;
let idForBook = 1;
let idForAuthor = 1;
let idForMember = 1;
let idForLibrarian = 1;
let idForLoan = 1;
let idForFine = 1;

class Category {
  constructor(categoryName) {
    this.categoryId = idForCategory++;
    this.categoryName = categoryName;
  }
}

class Publisher {
  constructor(name, address) {
    this.pubId = idForPublisher++;
    this.name = name;
    this.address = address;
  }
}

class Book {
  constructor(title, publicationYear, categoryId, pubId) {
    this.bookId = idForBook++;
    this.title = title;
    this.publicationYear = publicationYear;
    this.categoryId = categoryId;
    this.pubId = pubId;
    this.authorBooks = [];
  }

  addAuthor(authorId) {
    const authorBook = new AuthorBook(authorId, this.bookId);
    this.authorBooks.push(authorBook);
    return authorBook;
  }
}

class Author {
  constructor(name, surname, birthYear, country) {
    this.authorId = idForAuthor++;
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.country = country;
    this.authorBooks = [];
  }

  addBook(bookId) {
    const authorBook = new AuthorBook(this.authorId, bookId);
    this.authorBooks.push(authorBook);
    return authorBook;
  }
}

class AuthorBook {
  constructor(authorId, bookId) {
    this.authorId = authorId;
    this.bookId = bookId;
  }
}

class Member {
  constructor(name, surname, address, phoneNumber, registrationDate) {
    this.memberId = idForMember++;
    this.name = name;
    this.surname = surname;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.registrationDate = registrationDate;
    this.loans = [];
  }

  addLoan(loan) {
    this.loans.push(loan);
    loan.memberId = this.memberId;
  }
}

class Librarian {
  constructor(name, surname, position, department, email) {
    this.librarianId = idForLibrarian++;
    this.name = name;
    this.surname = surname;
    this.position = position;
    this.department = department;
    this.email = email;
    this.loans = [];
  }

  addLoan(loan) {
    this.loans.push(loan);
    loan.librarianId = this.librarianId;
  }
}

class Loan {
  constructor(loanDate, returnDate, status, bookId) {
    this.loanId = idForLoan++;
    this.loanDate = loanDate;
    this.returnDate = returnDate;
    this.status = status;
    this.bookId = bookId;
    this.memberId = null;
    this.librarianId = null;
    this.fines = [];
  }

  addFine(fine) {
    this.fines.push(fine);
    fine.loanId = this.loanId;
  }
}

class Fine {
  constructor(amount, status) {
    this.fineId = idForFine++;
    this.amount = amount;
    this.status = status;
    this.loanId = null;
  }
}

const category = new Category("Fiction");
const publisher = new Publisher("BookHouse", "123 Main St");
const book = new Book(
  "The Great Novel",
  2020,
  category.categoryId,
  publisher.pubId
);
const author = new Author("John", "Doe", 1980, "USA");
book.addAuthor(author.authorId);
author.addBook(book.bookId);

const member = new Member(
  "Anna",
  "Ivanova",
  "456 Oak St",
  "0987654321",
  "2023-01-01"
);
const librarian = new Librarian(
  "Maria",
  "Petrova",
  "Senior Librarian",
  "Fiction Dept",
  "maria@example.com"
);
const loan = new Loan("2025-10-01", "2025-10-15", "active", book.bookId);
member.addLoan(loan);
librarian.addLoan(loan);

const fine = new Fine(10, "pending");
loan.addFine(fine);

console.log(category);
console.log(publisher);
console.log(book);
console.log(author);
console.log(member);
console.log(librarian);
console.log(loan);
console.log(fine);
