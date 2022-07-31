// const express = require("express");
import express from "express";
import cors from "cors";
import "dotenv/config";
import postRouter from './routes/post.route'
import AuthRouter from './routes/auth.route'
const mongoose = require("mongoose");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

app.use("/api", AuthRouter);
app.use("/api", postRouter);

mongoose.connect("mongodb://localhost:27017/trangtin", () => {
    console.log("successfully");
});


module.exports = connection;

app.listen(process.env.PORT, () => {
    console.log("Kết nối thành công, cổng " + process.env.PORT);
});
