const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    console.log("1", req.cookies);
    console.log("2", req.cookie);
    console.log("3", req.headers);
    const token = req.headers.cookie.replace("token=", "");
    console.log("4", token);
    if (!token) return res.status(401).json("Access denied...No token provided...");
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (er) {
    console.log(er);
    res.clearCookie("token");
    return res.status(400).json(er.message);
  }
};
