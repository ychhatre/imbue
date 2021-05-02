"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const RoomsSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Room", RoomsSchema);
