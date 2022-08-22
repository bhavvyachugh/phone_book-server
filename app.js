import  express  from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
const app = express();
const port = 8000;

config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connect(process.env.DB_URI, () => {
  console.log("connected to the server");
  app.listen(8000);
});
