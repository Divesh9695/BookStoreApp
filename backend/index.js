import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./route/user_route.js"; // ✅ Correct route path
import cors from 'cors';
import nodemailer from "nodemailer";

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





const sendMail = async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "diveshpandey28@gmail.com", // your Gmail
        pass: "hogvydrexcpaovcy", // app password (NOT your real Gmail password)
      },
    });

    const mailOptions = {
      from: "diveshpandey28@gmail.com",
      to,
      subject,
      text,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Failed to send email.");
  }
};
app.post("/send-email", sendMail);



app.use("/api/user", userRouter); // ✅ Register the route

app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
