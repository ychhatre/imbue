import mongoose from "mongoose"; 
mongoose.connect(
  "mongodb+srv://imbue:imbuepassword@cluster0.0a6dd.mongodb.net/imbue?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true},
  () => {
    console.log("Connected to DB!");
  }
);

mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
