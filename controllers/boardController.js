import Board from "../models/board.js";

export const boardList = async (req,res) => {
    try {
        // await Board.find({})
        return res.send({ name: "list" });
    } catch(error) {
        console.log(error)
    }
};
export const boardWrite = async (req,res) => {
    try{
        console.log(req.body);
        const {title, description, writer} = req.body;
        const data = await Board.create({
            title,
            description,
            createdAt: Date.now(),
            writer
        })
        return res.send({result: true, data});
    }catch(error){
        console.log(error);
        return res.send({result: false});
    }
};
export const boardDetail = (req,res) => res.send({name: "detail"});
export const boardUpdate = (req,res) => res.send({name: "update"});
export const boardDelete = (req,res) => res.send({name: "delete"});