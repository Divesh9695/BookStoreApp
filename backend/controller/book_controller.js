import book from "../model/book_model.js";

export const getBook = async(req, res) => {
    try {
        const book1= await book.find();
        res.status(200).json(book1);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
