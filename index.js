import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/dbConnect.js"; // make sure this file uses export syntax too

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});