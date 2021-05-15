import Room from "../models/Rooms";
import mongoose from "mongoose"; 
import express from "express";

const createRoom = (req:express.Request,res:express.Response) => {
    console.log(req.body); //this isnt printing 
    try {
        const newRoom = new Room({
         description: req.body.description,
         name: req.body.name,
         dailyRoomID: req.body.dailyRoomID
        });
        const finalRoom = newRoom.save();
        return res.status(201).send(finalRoom);
      } catch (error) {
        return res.status(502).send({ error });
      }
}
const getSingleRoom = async (req: express.Request, res: express.Response) => {
  try {
    const room = await Room.findById(req.query.id);
    return res.status(200).send(room);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

const getAllRooms = async (req: express.Request, res: express.Response) => {
  try {
    const rooms = await Room.find({});
    return res.status(200).send(rooms);
  } catch (error) {
    return res.status(502).send({ error });
  }
};

export default { createRoom, getSingleRoom, getAllRooms }; 