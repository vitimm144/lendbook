import express from 'express';
import * as bodyParser from 'body-parser';
import {connect} from "./db/db";
import {User} from "./db/models/User.models";
import {Book} from "./db/models/Book.models";
import {BookLoan} from "./db/models/BookLoan.models"
import {getMongoRepository} from "typeorm";


connect();

const app = express();



// var bookLoanRepository = getMongoRepository(BookLoan);


app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
app.get('/', (req, res) => res.send('Hello World!'));

app.post('/addBook', async (req,res) => {
    const userRepository = getMongoRepository(User);
    const book = new Book();
    const logged_user_id = req.body.logged_user_id;
    book.title = req.body.title;
    book.pages = req.body.pages;
    book.createdAt = new Date();

    const user = await userRepository.findOne(logged_user_id);
    if( user ) {
        user.collection.push(book)
        await userRepository.update(logged_user_id, user);
        res.send(user);

    } else {
        res.status(404).send({message: "User not found"})
    }

});

app.post('/createUser', async (req,res) => {
    const userRepository = getMongoRepository(User);
    const user = new User();
    user.email = req.body.email;
    user.name = req.body.name;

    await userRepository.insertOne(user);
    res.send(user);
});

app.get('/user/:id', async (req,res) => {
    const userRepository = getMongoRepository(User);
    const user = await userRepository.findOne({
        where: {
            id: req.params.id
        }
    });

    if (user){
        res.json(user);
    } else {
        res.status(404).send({message: "User not found"})
    }
});

export {app};