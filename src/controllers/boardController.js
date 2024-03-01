import Board from "../models/board.js";

export const boardList = async (req,res) => {
    try {
        const data = await Board.find({});
        return res.send({ name: "list", data });
    } catch(error) {
        console.log(error);
    }
};
let nextBoardNumber = 1;
export const boardWrite = async (req,res) => {
    try{
        console.log(req.body);
        const {title, description, writer} = req.body;
        const boardNumber = nextBoardNumber++;
        const data = await Board.create({
            boardNumber,
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
export const boardDetail = async (req,res) => {
    // const id = req.params.id;
    const {params: {id}} = req;
    try{
        const data = await Board.findById(id);
        return res.send({name: "detail", data})
    }catch(error) {
        console.log(error);
    }
};
export const boardUpdate = async (req, res) => {
    const {
        body: { title, description, writer },
        params: { id },
        } = req;
    
        try {
        const data = await Board.findByIdAndUpdate(id, {
            title,
            description,
            writer,
        });
        res.send({ result: true, data });
        } catch (error) {
        console.log(error);
        }
    };
export const boardDelete = (req,res) => res.send({name: "delete"});