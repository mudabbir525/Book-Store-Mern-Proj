import mongoose from "mongoose";
import { title } from "process";
const bookSchema = mongoose.Schema({
    title: {
        type : String,
        required: true,
    },
    author: {
        type : String,
        required: true,
    },
    publishYear: {
        type : Number,
        required: true,
    }
},{
    timestamps:true,
}
);

export const Book = mongoose.model('cat', bookSchema );