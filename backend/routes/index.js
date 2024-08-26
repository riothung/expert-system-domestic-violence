const router = require("express").Router();
const auth = require("./auth");
const kdrt = require("./kdrt");

router.use(kdrt);
router.use(auth);

module.exports = router;
