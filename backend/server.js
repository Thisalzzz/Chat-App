import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js"
import messageRoutes from "./routes/message.js"
import connectToMongoDb from "./db/connectToMongoDb.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON bodies
app.use(cookieParser());
app.use(express.json());


app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);

console.log("after authroutes"); //debugging

app.listen(PORT, ()=> {
    connectToMongoDb();
    console.log(`server running on port ${PORT}`)
});