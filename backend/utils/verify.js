const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json("Access denied...No token provided...");
    const decoded = jwt.verify(token, "secret");
    req.user = decoded;
    next();
  } catch (er) {
    res.clearCookie("token");
    return res.status(400).json(er.message);
  }
};

const verifyRole = (req, res, next) => {
  try {
    verifyToken(req, res, () => {
      if (req.user.isAdmin == true) {
        next();
      } else {
        return res.status(401).json("Unauthorized");
      }
    });
  } catch (er) {
    return res.status(400).json(er.message);
  }
};

module.exports = {
  verifyToken,
  verifyRole,
};
