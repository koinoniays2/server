// const express = require('express')
import 'dotenv/config';
import "./db.js";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import boardRouter from "./router/boardRouter.js";

const corsOption = {
    origin: ["http://koinonia.dothome.co.kr", "http://127.0.0.1:5500"]
};
const app = express();
app.use(express.json());
app.use(morgan("dev")); 
app.use(cors(corsOption));

app.get('/', (req, res) => { res.send({ name: "root" }) });
app.use("/board", boardRouter);

const PORT = process.env.PORT; 
app.listen(PORT, () => {
    console.log(`🔵 Sever : http://localhost:${PORT}`)
})