const router = require("express").Router();
const kdrt = require("../controllers/kdrtController");
const verify = require("../utils/verifyToken");

router.get("/jenisKdrt", kdrt.getJenisKdrt);
router.get("/faktorKdrt", kdrt.getFaktorKdrt);
router.get("/pasal", kdrt.getPasal);
router.get("/konsul", verify, kdrt.getKonsul);
router.post("/addJenisKdrt", kdrt.insertJenisKdrt);
router.post("/addFaktorKdrt", kdrt.insertFaktorKdrt);

module.exports = router;
