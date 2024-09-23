const router = require("express").Router();
const auth = require("../controllers/authController.js");
const verify = require("../utils/verify.js");

router.post("/signup", auth.registerAdmin);
router.post("/login", auth.login);
router.post("/signupUser", auth.registerUser);
router.post("/logout", auth.logout);
router.get("/verify", verify.verifyRole, auth.checkAuthUser);

module.exports = router;
