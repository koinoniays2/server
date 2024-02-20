import express from "express";
import { boardDelete, boardDetail, boardList, boardUpdate, boardWrite } from "../controllers/boardController";

const boardRouter = express.Router();

boardRouter.get("", boardList);
boardRouter.post("/write", boardWrite);
boardRouter.get("/:id", boardDetail);
boardRouter.post("/:id/update", boardUpdate);
boardRouter.post("/:id/delete", boardDelete);

export default boardRouter;