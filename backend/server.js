import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
import mongoose from "mongoose";
const morgan = require("morgan");
require("dotenv").config();

const app = express();
// const path = require('path')

//db connection
mongoose
  .connect(process.env.DATABASE)
  .then(() => console.log("DB connected"))
  .catch(err => console.log("Wake up! DB connection error!", err));

// middleware (cors is the XMLHTTPREQUEST permitter)
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use(express.static(path.join(__direname, '/marketplace')));

// route middleware
readdirSync("./routes").map(r => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}!`));
