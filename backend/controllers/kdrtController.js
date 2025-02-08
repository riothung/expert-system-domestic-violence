const prisma = require("../db");

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

const getSaran = async (req, res) => {
  try {
    const saran = await prisma.saran.findMany();
    console.log(saran);
    return res.json(saran);
  } catch (err) {
    console.log(err);
    return res.json({ error: err.message });
  }
};

const getKonsulDate = async (req, res) => {
  try {
    const { month, year } = req.query;
    console.log("Received month:", month, "Received year:", year);

    // Create start date (first day of the month)
    const startDate = new Date(`${year}-${month}-01`);
    const endDate = new Date(`${year}-${parseInt(month) + 1}-01`);

    const sendDate = await prisma.konsul.findMany({
      where: {
        date: {
          gte: startDate,
          lt: endDate,
        },
      },
      include: {
        user: true,
        jawaban: {
          where: {
            pertanyaan: "true",
          },
          include: {
            konsul: true,
            faktorKdrt: {
              include: {
                jenisKdrt: {
                  include: {
                    saran: true,
                    dasarHukum: true,
                    prosedur: true,
                  },
                },
              },
            },
          },
        },
      },
    });
    return res.json(sendDate);
  } catch (err) {
    // console.log("Error: ", error);
    return res.json({ error: err.message }).status(400);
  }
};

// end of method GET

// method PUT (update)

const updateJenisKdrt = async (req, res) => {
  try {
    const id = req.params.id;
    const { nama } = req.body;
    const data = await prisma.jenisKdrt.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nama: nama,
      },
    });
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const updateFaktorKdrt = async (req, res) => {
  try {
    const id = req.params.id;
    const nama = req.body;
    const data = await prisma.faktorKdrt.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nama: nama,
      },
    });
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

// end of method PUT (UPDATE)

// method DELETE

const deleteJenisKdrt = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await prisma.jenisKdrt.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.json(data);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const deleteFaktorKdrt = async (req, res) => {
  const id = req.params.id;
  const data = await prisma.faktorKdrt.delete({
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
  getSaran,
  getKonsulDate,
  updateJenisKdrt,
  updateFaktorKdrt,
  deleteJenisKdrt,
  deleteFaktorKdrt,
};
