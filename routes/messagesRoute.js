"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const message_controller_1 = __importDefault(require("../controllers/message.controller"));
const messageRouter = express_1.default.Router();
messageRouter.post("/", message_controller_1.default.createMessage);
module.exports = messageRouter;
