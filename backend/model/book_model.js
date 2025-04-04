import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    Name: String,
    price: Number,
    category: String,
    image: String,
    title: String
});

const Book = mongoose.model("Book", bookSchema);
export default Book;
