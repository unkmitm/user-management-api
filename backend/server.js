const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

// security headers
app.use(cors());
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // every 15 minutes
    max: 100, // you can change it
  })
);
app.use(helmet());

// more middlewares
app.use(express.json());
app.use(morgan("dev"));

const database = require("./connection/connect");

require("dotenv").config();
const router = require("./routes/router");

// routes
app.use("/api/auth", router);
app.use("/api/basket", router);

// start srever
const port = process.env.PORT || 3000;

// add database
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
