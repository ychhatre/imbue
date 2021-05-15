import Room from "../models/Rooms";
import mongoose from "mongoose"; 
import express from "express";

const createRoom = async(req:express.Request,res:express.Response) => {
    try {
        const newRoom = new Room({
         description: req.body.description,
         name: req.body.name,
         dailyRoomID: req.body.dailyRoomID
        });
        const finalRoom = await newRoom.save();
        return res.status(201).send(finalRoom);
      } catch (error) {
        return res.status(502).send({ error });
      }
}
const getSingleRoom = async (req: express.Request, res: express.Response) => {
  try {
    const room = await Room.find({dailyRoomID: req.query.id?.toString()});
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