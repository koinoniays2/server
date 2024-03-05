import Board from "../models/board.js";

export const boardList = async (req,res) => {
    const OFFSET = 0;
    const LIMIT = 10;
    try {
        const data = await Board.find({}).sort({createdAt: -1}).limit(LIMIT).skip(OFFSET);
        return res.send({ name: "list", data });
    } catch(error) {
        console.log(error);
    }
};
export const boardWrite = async (req,res) => {
    try{
        console.log(req.body);
        const {title, description, writer} = req.body;
        // 현재까지의 글의 개수 가져오기
        const count = await Board.countDocuments();
        let boardNumber = count + 1;
        // 삭제되지 않은 가장 큰 번호 가져오기
        const lastBoard = await Board.findOne({}, {}, { sort: { 'boardNumber': -1 } });
        if (lastBoard && lastBoard.boardNumber >= boardNumber) {
            boardNumber = lastBoard.boardNumber + 1;
        }
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
            updatedAt: Date.now()
        });
        res.send({ result: true, data });
        } catch (error) {
        console.log(error);
        }
    };
export const boardDelete = async (req,res) => {
    const { id } = req.params;
    try{
        await Board.findByIdAndDelete(id);
        res.send({ result: true });
    } catch(error) {
        console.log(error);
        res.send({ result: false, error});
    }
};