// const express = require('express')
import express from "express";
import morgan from "morgan";
import cors from "cors";
import boardRouter from "../router/boardRouter";

const corsOption = {
    origin: ["http://localhost:5173", "http://localhost:5172"]
};
const app = express();
app.use(morgan("dev")); 
app.use(cors(corsOption));

/* app.get('/', (req, res) => {
    res.send({ name: "테스트" })
}) */
app.use("/board", boardRouter);

const port = 3000;
app.listen(port, () => {
    console.log(`🔵 Sever : http://localhost:${port}`)
})