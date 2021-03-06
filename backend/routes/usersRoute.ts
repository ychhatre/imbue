import express from "express";
import controller from "../controllers/user.controller";

const userRouter: express.Router = express.Router();

userRouter.post("/", controller.createUser);
userRouter.post("/login", controller.login);
userRouter.get("/:id", controller.getSingleUser);
userRouter.get("/", controller.searchUsers)
userRouter.get("/", controller.getAllUsers);

export default userRouter; 