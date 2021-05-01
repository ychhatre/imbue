import express from "express";
const usersRoute = require("./routes/usersRoute");
const roomsRoute = require("./routes/roomsRoute"); 
const messageRoute = require("./routes/messagesRoute"); 
const bodyParser = require("body-parser");
require("./dbConnect");
const app = express();
//new commment
//new comment number two
// new commment three
app.use(bodyParser.json());
app.use("/users", usersRoute);
app.use("/rooms", roomsRoute)
app.use("/messages", messageRoute)

app.get("/", (req, res) => {
  
  res.send("Hello Yash!");
});

app.listen(3000, () => console.log("Server is running on port 3000"));
