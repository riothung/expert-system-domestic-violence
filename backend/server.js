const sql = require("./db");
const express = require("express");
const cors = require("cors");
// const db = require("./supabase");
const router = require("./routes/index");

const cp = require('cookie-parser')

const app = express();

app.use(cp())

const frontendOrigin = process.env.FRONTEND_ORIGIN || "http://127.0.0.1:5555";
app.use(
  cors({
    credentials: true,
    origin: frontendOrigin,
  })
);

app.use(
  express.json({
    limit: "50mb",
  })
);

app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);

app.use(router);

app.listen(3000, () => {
  console.log("server is ready");
});
