"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Messages_1 = __importDefault(require("../models/Messages"));
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body); //this isnt printing
    try {
        const message = new Messages_1.default({
            sender: req.body.sender,
            messageContent: req.body.messageContent,
        });
        const finalMessage = yield message.save();
        return res.status(201).send(finalMessage);
    }
    catch (error) {
        return res.status(502).send({ error });
    }
});
exports.default = { createMessage };
