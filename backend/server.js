const sql = require("./db");
const express = require("express");
const cors = require("cors");
// const db = require("./supabase");
const router = require("./routes/index");

const app = express();

app.use(
  cors({
    credential: true,
    origin: "*",
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

app.listen(4000, () => {
  console.log("server is ready");
});
