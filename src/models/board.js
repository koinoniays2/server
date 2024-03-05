import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    boardNumber: Number,
    title: String,
    description: String,
    createdAt: Date,
    updatedAt: Date,
    writer: String
})

const Board = mongoose.model("Board", boardSchema);

export default Board;