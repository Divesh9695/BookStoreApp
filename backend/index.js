import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./route/book.route.js";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;  // Ensure this matches your .env file

if (!URI) {
  console.error("MongoDB connection string is missing!");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Correct spelling
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB Connection Error:", error));
  app.use("/book",bookRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
 