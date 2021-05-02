"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const room_controller_1 = __importDefault(require("../controllers/room.controller"));
const roomRouter = express_1.default.Router();
roomRouter.post("/", room_controller_1.default.createRoom);
roomRouter.get("/:id", room_controller_1.default.getSingleRoom);
roomRouter.get("/", room_controller_1.default.getAllRooms);
module.exports = roomRouter;
