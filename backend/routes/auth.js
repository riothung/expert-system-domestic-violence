const auth = require("../controllers/authAdmin");
const router = require("express").Router();

router.post("/auth", auth.registerAdmin);
router.post("/login", auth.loginAdmin);

module.exports = router;
