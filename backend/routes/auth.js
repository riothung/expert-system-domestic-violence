const router = require("express").Router();
const auth = require("../controllers/authAdmin");
const authUser = require("../controllers/authUser");
const verify = require("../utils/verifyToken");

router.post("/signup", auth.registerAdmin);
router.post("/login", auth.loginAdmin);
router.post("/signupUser", authUser.registerUser);
router.post("/loginUser", authUser.loginUser);
router.post("/logout", auth.logout);
router.get("/test", verify, function (req, res) {
  res.send("test");
});

module.exports = router;
