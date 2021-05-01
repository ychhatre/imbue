import mongoose from "mongoose"; 

interface IMessage extends mongoose.Document {
    name: string
    password: string
}
const MessageSchema = new mongoose.Schema({
  sender: {
    required: true,
    type: String,
    min: 3,
    max: 255,
  },
  messageContent: {
    required: true,
    type: String,
    min: 2,
    max: 500,
  },
  
});

export default mongoose.model<IMessage>("Message", MessageSchema);
