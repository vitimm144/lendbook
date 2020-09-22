import {User} from '../db/models/User.models'
import {Book} from '../db/models/Book.models'
import {BookLoan} from '../db/models/BookLoan.models'


describe('User Model Test Case', () => {
    it('Should create a instance of User class', () => {
        const user = new User();
        expect(user).toBeInstanceOf(User);
    })
    it('Should User class has name attr', () => {
        const user = new User();
        user.name = 'Victor';
        expect(user.name).toBe('Victor');
    })
    it('Should User class has email attr', () => {
        const user = new User();
        user.email = 'victor@mail.com';
        expect(user.email).toBe('victor@mail.com');
    })
    it('Should User class has createdAt attr', () => {
        const user = new User();
        const now = new Date();
        user.createdAt = now;
        expect(user.createdAt).toBe(now);
    })
})

describe('Book Model Test Case', () => {
    it('Should create a instance of Book class', () => {
        const book = new Book();
        expect(book).toBeInstanceOf(Book);
    })
    it('Should Book class has name attr', () => {
        const book = new Book();
        book.title = 'Teste de título';
        expect(book.title).toBe('Teste de título');
    })
    it('Should Book class has email attr', () => {
        const book = new Book();
        book.pages = 20;
        expect(book.pages).toBe(20);
    })
    it('Should Book class has createdAt attr', () => {
        const book = new Book();
        const now = new Date();
        book.createdAt = now;
        expect(book.createdAt).toBe(now);
    })
})

describe('BookLoan Model Test Case', () => {
    it('Should create a instance of User class', () => {
        const book_loan = new BookLoan();
        expect(book_loan).toBeInstanceOf(BookLoan);
    })
    it('Should User class has name attr', () => {
        const book_loan = new BookLoan();
        book_loan.fromUser = '1234';
        expect(book_loan.fromUser).toBe('1234');
    })
    it('Should User class has email attr', () => {
        const book_loan = new BookLoan();
        book_loan.toUser = '4321';
        expect(book_loan.toUser).toBe('4321');
    })
})