import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    title: String,
    description: String,
    createdAt: Date,
    writer: String
})

const Board = mongoose.model("Board", boardSchema);

export default Board;