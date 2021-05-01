import Message from "../models/Messages";
import mongoose from "mongoose";
import express from "express";

const createMessage = async(req: express.Request, res: express.Response) => {
  console.log(req.body); //this isnt printing
  try {
    const message = new Message({
      sender: req.body.sender,
      messageContent: req.body.messageContent,
    });
    const finalMessage = await message.save();
    return res.status(201).send(finalMessage);
  } catch (error) {
    return res.status(502).send({ error });
  }
};


export default { createMessage };
