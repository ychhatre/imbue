import express from "express";
import controller from "../controllers/room.controller";

const roomRouter: express.Router = express.Router();

roomRouter.post("/", controller.createRoom);
roomRouter.get("/:id", controller.getSingleRoom);
roomRouter.get("/", controller.getAllRooms);
export = roomRouter;
