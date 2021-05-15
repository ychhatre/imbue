import mongoose from "mongoose";

interface IRooms extends mongoose.Document {
  name: string
  description: string
  dailyRoomID: string 
}
const RoomsSchema = new mongoose.Schema({
  name: {
    type:String,
    required: true
  },
  description: {
    type:String,
    required: true
  },
  dailyRoomId: {
    type:String,
    required: true 
  }
});

export default mongoose.model<IRooms>("Room", RoomsSchema);
