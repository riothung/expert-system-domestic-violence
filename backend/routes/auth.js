const router = require("express").Router();
const auth = require("../controllers/authAdmin");

router.post("/signup", auth.registerAdmin);
router.post("/login", auth.loginAdmin);

module.exports = router;
