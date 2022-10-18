const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRouter.js");
const app = express();
require("dotenv").config({ path: "./config.env" });
//Routes

app.use(cors());
app.use(express.json());
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}
app.use("/tour", tourRouter);



//!  start app
console.log(process.env);

const DB = process.env.DB_STRING.replace("<password>", process.env.DB_PASSWORD);

mongoose.connect(DB, (err) => {
  if (err) return console.log(err);

  console.log("mongoDB connected");
  
  const PORT = process.env.PORT;
  app.listen(PORT, () => {
    console.log(`Server runnig on port: ${PORT}`);
  });
});
