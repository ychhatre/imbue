"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const MessageSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Message", MessageSchema);
