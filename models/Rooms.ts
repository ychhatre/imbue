import mongoose from "mongoose";

interface IRooms extends mongoose.Document {
  name: string
  password: string
}
const RoomsSchema = new mongoose.Schema({
  description: {
    type:String,
    required: true
  }
});

export default mongoose.model<IRooms>("Room", RoomsSchema);
