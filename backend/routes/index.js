const router = require("express").Router();
const adminAuth = require("./auth");

router.use(adminAuth);

module.exports = router;
