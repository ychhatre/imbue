import express from "express";
import usersRoute from "./routes/usersRoute"; 
import roomsRoute from "./routes/roomsRoute"; 
import companiesRouter from "./routes/companyRoute"; 
import cors from "cors"; 

require("./dbConnect");
const app = express();
app.use(cors()); 
app.use(express.json());
app.use("/users", usersRoute);
app.use("/rooms", roomsRoute)
app.use("/companies", companiesRouter); 

app.get("/", (req, res) => {
  res.send("Hello Yash!");
});

app.listen(process.env.PORT || 5000, () => console.log("Server is running on port 5000"));