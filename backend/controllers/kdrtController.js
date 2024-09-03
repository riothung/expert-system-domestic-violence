const prisma = require("../db");
const { connect } = require("../routes/kdrt");

const getJenisKdrt = async (req, res) => {
  const jenisKdrt = await prisma.jenisKdrt.findMany();

  return res.json(jenisKdrt);
};

const getFaktorKdrt = async (req, res) => {
  const faktorKdrt = await prisma.faktorKdrt.findMany({
    include: {
      jenisKdrt: true,
    },
  });

  return res.json(faktorKdrt);
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
};
