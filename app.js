"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersRoute = require("./routes/usersRoute");
const roomsRoute = require("./routes/roomsRoute");
const messageRoute = require("./routes/messagesRoute");
const bodyParser = require("body-parser");
require("./dbConnect");
const app = express_1.default();
app.use(bodyParser.json());
app.use("/users", usersRoute);
app.use("/rooms", roomsRoute);
app.use("/messages", messageRoute);
app.get("/", (req, res) => {
    res.send("Hello Yash!");
});
app.listen(process.env.PORT || 3000, () => console.log("Server is running on port 3000"));
