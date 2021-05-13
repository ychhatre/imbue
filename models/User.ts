import mongoose from "mongoose";

export interface IUser extends mongoose.Document {
  name: string;
  password: string;
  email:string;
  role: string
}
const UserSchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
    min: 3,
    max: 255,
  },
  email: {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String
  }
});

export default mongoose.model<IUser>("User", UserSchema);
