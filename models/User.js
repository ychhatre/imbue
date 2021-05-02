"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const UserSchema = new mongoose_1.default.Schema({
    name: {
        required: true,
        type: String,
        min: 3,
        max: 255,
    },
    email: {
        required: true,
        type: String,
    },
    password: {
        required: true,
        type: String,
    },
});
exports.default = mongoose_1.default.model("User", UserSchema);
