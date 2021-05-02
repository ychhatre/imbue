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
const User_1 = __importDefault(require("../models/User"));
const createUser = (req, res) => {
    console.log(req.body); //this isnt printing
    try {
        const newUser = new User_1.default({
            name: req.body.name,
            password: req.body.password,
        });
        const finalUser = newUser.save();
        return res.status(201).send(finalUser);
    }
    catch (error) {
        return res.status(502).send({ error });
    }
};
const getSingleUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.findById(req.query.id);
        return res.status(200).send(user);
    }
    catch (error) {
        return res.status(502).send({ error });
    }
});
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find({});
        return res.status(200).send(users);
    }
    catch (error) {
        return res.status(502).send({ error });
    }
});
exports.default = { createUser, getSingleUser, getAllUsers };
