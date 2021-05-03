import User from "../models/User";
import express from "express";

const createUser = async (req: express.Request, res: express.Response) => {
  try {
    const newUser = new User({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    });
    const finalUser = await newUser.save();
    return res.status(201).json(finalUser);
  } catch (error) {
    return res.status(502).json({ error });
  }
};

const login = async (req: express.Request, res: express.Response) => {
  try {
    const currUser = await User.findOne({ email: req.body.email });

    if (currUser) {
      if (currUser.password === req.body.password) {
        return res.status(201).send({ status: "success" });
      } else {
        return res.status(401).send({ status: "incorrect password" });
      }
    } else {
      return res.status(401).send({ status: "email not found" });
    }
  } catch (error) {
    return res.status(502).send({ error });
  }
};

const getSingleUser = async (req: express.Request, res: express.Response) => {
  try {
    const user = await User.findById(req.query.id);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await User.find({});
    return res.status(200).send(users);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

export default { createUser, getSingleUser, getAllUsers, login };
