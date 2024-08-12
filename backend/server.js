const express = require("express");
const cors = require("cors");
const db = require("./supabase");

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

app.listen(3000, () => {
  console.log("server is ready");
});
