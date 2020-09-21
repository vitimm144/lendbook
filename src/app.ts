import express from 'express';
import * as bodyParser from 'body-parser';
import {connect} from "./db/db";
import {User} from "./db/models/User.model";
import {Book} from "./db/models/Book.model";

connect();

const app = express();
app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
app.get('/', (req, res) => res.send('Hello World!'));
app.post('/books', async (req,res) => {
    const book = new Book();
    book.title = req.body.title;
    book.pages = req.body.pages;
    await book.save();
    res.send(book);
});
export {app};