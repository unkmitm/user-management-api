const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());
const database = require("./connection/connect");

require("dotenv").config();
const router = require("./routes/router");

app.use("/api/auth", router);
app.use("/api/basket", router);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await database(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
