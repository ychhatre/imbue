import Room from "../models/Rooms";
import mongoose from "mongoose"; 
import express from "express";

const createRoom = (req:express.Request,res:express.Response) => {
    console.log(req.body); //this isnt printing 
    try {
        const newUser = new Room({
          entrepreneurs: req.body.participants,
          host: req.body.host,
          investors: req.body.investors,
          spectators: req.body.spectators,
        });
        const finalUser = newUser.save();
        return res.status(201).send(finalUser);
      } catch (error) {
        return res.status(502).send({ error });
      }
}
const getSingleRoom = async (req: express.Request, res: express.Response) => {
  try {
    const user = await Room.findById(req.query.id);
    return res.status(200).send(user);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

const getAllRooms = async (req: express.Request, res: express.Response) => {
  try {
    const users = await Room.find({});
    return res.status(200).send(users);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

export default { createRoom, getSingleRoom, getAllRooms }; 