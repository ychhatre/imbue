import User from "../models/User";
import express from "express";

const createUser = (req: express.Request, res: express.Response) => {
  console.log(req.body); //this isnt printing
  try {
    const newUser = new User({
      name: req.body.name,
      password: req.body.password,
    });

    const finalUser = newUser.save();
    return res.status(201).send(finalUser);
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


export default { createUser, getSingleUser, getAllUsers }   ;
