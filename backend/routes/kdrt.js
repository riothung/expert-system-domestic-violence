const router = require("express").Router();
const kdrt = require("../controllers/kdrtController");
const verify = require("../utils/verify");
const dataKdrt = require("../controllers/dataKdrtController");

router.get("/jenisKdrt", kdrt.getJenisKdrt);
router.get("/faktorKdrt", kdrt.getFaktorKdrt);
router.get("/pasal", kdrt.getPasal);
router.get("/konsul", kdrt.getKonsul);
router.get("/saran", kdrt.getSaran);
router.get("/forwardChaining", dataKdrt.forwardChaining);

router.post("/addJenisKdrt", dataKdrt.insertJenisKdrt);
router.post("/addFaktorKdrt", dataKdrt.insertFaktorKdrt);
router.post("/addKonsul", dataKdrt.insertPertanyaan);
router.post("/addSaran", dataKdrt.addSaran);
router.post("/addDasarHukum", dataKdrt.insertDasarHukum);
router.post("/addProsedur", dataKdrt.insertProsedur);

router.put("/updateJenisKdrt/:id", kdrt.updateJenisKdrt);
router.put("/updateFaktorKdrt/:id", kdrt.updateFaktorKdrt);

router.delete("/deleteJenisKdrt/:id", kdrt.deleteJenisKdrt);
module.exports = router;
