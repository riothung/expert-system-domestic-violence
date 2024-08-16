const router = require("express").Router();
const auth = require("../controllers/authAdmin");
const authUser = require("../controllers/authUser")

router.post("/signup", auth.registerAdmin);
router.post("/login", auth.loginAdmin);
router.post("/signupUser", authUser.registerUser)
router.post("/loginUser", authUser.loginUser)

module.exports = router;
