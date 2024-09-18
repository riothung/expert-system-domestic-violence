const prisma = require("../db");
const { connect } = require("../routes/kdrt");

// method GET

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
      pasal: "asc",
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

// end of method GET

// method PUT (update)

const updateJenisKdrt = async (req, res) => {
  const { id, ...update } = req.body;
  const data = await prisma.jenisKdrt.update({
    where: {
      id: id,
    },
    data: update,
  });
  return res.json(data);
};

const updateFaktorKdrt = async (req, res) => {
  const { id, ...update } = req.body;
  const data = await prisma.faktorKdrt.update({
    where: {
      id: id,
    },
    data: update,
  });
  return res.json(data);
};

const updatePasal = async (req, res) => {
  const { id, ...update } = req.body;
  const data = await prisma.dasarHukum.update({
    where: {
      id: id,
    },
    data: update,
  });
  return res.json(data);
};

// end of method PUT (UPDATE)

// method DELETE

const deleteJenisKdrt = async (req, res) => {
  const { id } = req.body;
  const data = await prisma.jenisKdrt.delete({
    where: {
      id: id,
    },
  });
  return res.json(data);
};

const deleteFaktorKdrt = async (req, res) => {
  const { id } = req.body;
  const data = await prisma.faktorKdrt.delete({
    where: {
      id: id,
    },
  });
  return res.json(data);
};

const deletePasal = async (req, res) => {
  const { id } = req.body;
  const data = await prisma.dasarHukum.delete({
    where: {
      id: id,
    },
  });
  return res.json(data);
};

module.exports = {
  getJenisKdrt,
  getFaktorKdrt,
  getPasal,
  getKonsul,
};
