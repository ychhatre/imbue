"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.connect("mongodb+srv://imbue:imbuepassword@cluster0.0a6dd.mongodb.net/imbue?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connected to DB!");
});
mongoose_1.default.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
