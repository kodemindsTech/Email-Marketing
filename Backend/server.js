import express from "express";
import dotenv from "dotenv";
import mongodb from "./src/config/db.js";

dotenv.config();
const app = express();
app.use(express.json());

mongodb();

app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port ${process.env.PORT || 8000}`);
});