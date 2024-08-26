const prisma = require("../db");

const getJenisKdrt = async (req, res) => {
  const jenisKdrt = await prisma.jenisKdrt.findMany();

  return res.json(jenisKdrt);
};

const insertJenisKdrt = async (req, res) => {
  const dataJenisKdrt = [{ nama: "Kekerasan Fisik" }, { nama: "Kekerasan Psikis" }, { nama: "Kekerasan Seksual" }, { nama: "Penelantaran Rumah Tangga" }];
  try {
    const newJenisKdrt = await prisma.jenisKdrt.createMany({
      data: jenisKdrt,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const getFaktorKdrt = async (req, res) => {
  const faktorKdrt = await prisma.faktorKdrt.findMany({
    include: {
      jenisKdrt: true,
    },
  });

  return res.json(faktorKdrt);
};

const insertFaktorKdrt = async (req, res) => {
  const datafaktorKdrt = [
    { nama: "Pasangan yang ringan tangan", id_jk: 1 },
    { nama: "Pasangan yang emosional atau temperamental", id_jk: 1 },
    { nama: "Pengaruh alkohol atau obat-obatan", id_jk: 1 },
    { nama: "Latar belakang keluarga", id_jk: 1 },
    { nama: "Pelecehan verbal dan emosional", id_jk: 2 },
    { nama: "Kecemburuan yang berlebihan", id_jk: 2 },
    { nama: "Trauma masa lalu", id_jk: 2 },
    { nama: "Pengendalian dan dominasi", id_jk: 2 },
    { nama: "Pengendalian seksual", id_jk: 3 },
    { nama: "Trauma seksual masa lalu", id_jk: 3 },
    { nama: "Ketidakpuasan terhadap pasangan", id_jk: 3 },
    { nama: "Ketidasetaraan gender", id_jk: 3 },
    { nama: "Kurangnya tanggung jawab", id_jk: 4 },
    { nama: "Ketidamampuan finansial", id_jk: 4 },
    { nama: "Sikap acuh tak acuh", id_jk: 4 },
  ];
  try {
    const newFaktorKdrt = await prisma.faktorKdrt.createMany({
      data: datafaktorKdrt,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const getPasal = async (req, res) => {
  const pasal = await prisma.dasarHukum.findMany({
    orderBy: {
      ayat: "asc",
    },
  });

  return res.json(pasal);
};

const getKonsul = async (req, res) => {
  const konsul = await prisma.konsul.findMany({
    include: {
      user: true,
      jenisKdrt: true,
      faktorKdrt: true,
      dasarHukum: true,
      prosedur: true,
    },
  });

  return res.json(konsul);
};

module.exports = {
  getJenisKdrt,
  getFaktorKdrt,
  getPasal,
  getKonsul,
  insertJenisKdrt,
  insertFaktorKdrt,
};
