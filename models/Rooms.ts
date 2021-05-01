import mongoose from "mongoose";

interface IRooms extends mongoose.Document {
  name: string
  password: string
}
const RoomsSchema = new mongoose.Schema({
entrepreneurs: {
  required: true,
  type: Array,
  min: 3,
  max: 15,
},
host: {
  required: true,
  type: String,
},
investors: {
  required: true,
  type: Array,
  min: 3,
  max: 15,
},
spectators: {
  required: false,
  type: Array,
  min: 3,
  max: 15,
}
});

export default mongoose.model<IRooms>("Room", RoomsSchema);
