"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = express_1.default.Router();
userRouter.post("/", user_controller_1.default.createUser);
userRouter.get("/:id", user_controller_1.default.getSingleUser);
userRouter.get("/", user_controller_1.default.getAllUsers);
module.exports = userRouter;
