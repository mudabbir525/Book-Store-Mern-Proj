import express, { response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { request } from "http";
import { Book } from "./models/bookModel.js";
import booksroute from "./routes/booksRoute.js"; 
import cors from 'cors';

const app = express();

// Middleware for parsing req body
app.use(express.json());
//cors policy
//option 1

app.use(cors());
//option 2
//app.use(
//    cors(
//        {
//            origin: 'http://localhost:5555',
//            methods: ['GET', 'POST' , 'DELETE'],
//            allowedHeaders: ['Content-Type'],
//        }
//    ));

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send('Welcome To MERN Stack Tutorial');
});
app.use('/books', booksroute); // Correct usage

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to DB');
        app.listen(PORT, () => {
            console.log(`App is listening on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
