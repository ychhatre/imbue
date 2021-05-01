import express from "express";
import controller from "../controllers/message.controller";


const messageRouter: express.Router = express.Router();

messageRouter.post("/", controller.createMessage);

export = messageRouter;
