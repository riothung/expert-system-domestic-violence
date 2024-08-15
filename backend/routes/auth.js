const auth = require("../controllers/authController");
const router = require("express").Router();

router.post("/auth", auth.registerAdmin);
router.post("/login", auth.loginAdmin);

module.exports = router;
