import mongoose from "mongoose";
import { IUser } from "./User"; 

interface ICompany extends mongoose.Document {
    name: string 
    description: string
    // owner: IUser,
}

const CompanySchema = new mongoose.Schema({
    name: {
        required: true,
        type: String 
    },
    description: {
        required: true, 
        type: String 
    },
    // owner: {
    //     required: true,
    //     type: mongoose.Types.ObjectId,
    //     ref: "User",
    // }
})

export default mongoose.model<ICompany>("Company", CompanySchema);
