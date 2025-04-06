import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./route/user_route.js"; // ✅ Correct route path
import cors from 'cors';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

if (!URI) {
  console.error("MongoDB connection string is missing!");
  process.exit(1);
}

app.use(express.json()); // Middleware to parse JSON
app.use(cors());

mongoose
  .connect(URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((error) => {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  });

app.use("/api/user", userRouter); // ✅ Register the route

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
