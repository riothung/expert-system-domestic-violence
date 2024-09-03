const router = require("express").Router();
const kdrt = require("../controllers/kdrtController");
const verify = require("../utils/verifyToken");
const dataKdrt = require("../controllers/dataKdrtController");

router.get("/jenisKdrt", kdrt.getJenisKdrt);
router.get("/faktorKdrt", kdrt.getFaktorKdrt);
router.get("/pasal", kdrt.getPasal);
router.get("/konsul", verify, kdrt.getKonsul);
router.post("/addJenisKdrt", dataKdrt.insertJenisKdrt);
router.post("/addFaktorKdrt", dataKdrt.insertFaktorKdrt);
router.post("/addKonsul", dataKdrt.insertPertanyaan);

router.get("/forwardChaining", dataKdrt.forwardChaining);

module.exports = router;
