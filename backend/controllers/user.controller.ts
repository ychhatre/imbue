import User from "../models/User";
import express from "express";

const bcrypt = require("bcrypt");

const createUser = async (req: express.Request, res: express.Response) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name: req.body.name,
      password: hashedPassword,
      email: req.body.email,
      role: req.body.role
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
      const unhashedPassword = req.body.password;

      const passwordStat = await bcrypt.compare(
        unhashedPassword,
        currUser.password
      );

      if (passwordStat) {
        return res.status(201).send({ status: "success", currUser });
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

const searchUsers = async (req: express.Request, res: express.Response) => {
  console.log("Search term:", req.query.searchTerm);
  try {
    if(req.query.searchTerm) {
      const users = await User.find({
        "name":{ "$regex": `${req.query.searchTerm}`, "$options": "i"}
      });
      return res.status(200).send(users);
    }
   
  } catch (error) {
    return res.status(502).send({ error });
  }
  return res.status(200).send(req.query.searchTerm);
};

export default { createUser, getSingleUser, getAllUsers, login, searchUsers };
