const prisma = require("../db");
const connect = require("../routes/kdrt");
// const user = require("../controllers/authController");

const insertJenisKdrt = async (req, res) => {
  const dataJenisKdrt = [{ nama: "Kekerasan Fisik" }, { nama: "Kekerasan Psikis" }, { nama: "Kekerasan Seksual" }, { nama: "Penelantaran Rumah Tangga" }];
  try {
    const newJenisKdrt = await prisma.jenisKdrt.createMany({
      data: jenisKdrt,
    });
    return res.json(newJenisKdrt);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const insertDasarHukum = async (req, res) => {
  const dataDasarHukum = [
    {
      pasal: 44,
      ayat: 1,
      undangUndang: "UU No. 23 Tahun 2004",
      isi: "Setiap orang yang melakukan perbuatan kekerasan fisik dalam lingkup rumah tangga sebagaimana dimaksud dalam Pasal 5 huruf a dipidana dengan pidana penjara paling lama 5 (lima) tahun atau denda paling banyak Rp 15.000.000,00 (lima belas juta rupiah).",
    },
    {
      pasal: 44,
      ayat: 2,
      undangUndang: "UU No. 23 Tahun 2004",
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) mengakibatkan korban mendapat jatuh sakit atau luka berat, dipidana dengan pidana penjara paling lama 10 (sepuluh) tahun atau denda paling banyak Rp 30.000.000,00 (tiga puluh juta rupiah).",
    },
    {
      pasal: 44,
      ayat: 3,
      undangUndang: "UU No. 23 Tahun 2004",
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (2) mengakibatkan matinya korban, dipidana dengan pidana penjara paling lama 15 (lima belas) tahun atau denda paling banyak Rp 45.000.000,00 (empat puluh lima juta rupiah).",
    },
    {
      pasal: 44,
      ayat: 4,
      undangUndang: "UU No. 23 Tahun 2004",
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) dilakukan oleh suami terhadap isteri atau sebaliknya yang tidak menimbulkan penyakit atau halangan untuk menjalankan pekerjaan jabatan atau mata pencaharian atau kegiatan sehari-hari, dipidana dengan pidana penjara paling lama 4 (empat) bulan atau denda paling banyak Rp 5.000.000,00 (lima juta rupiah).",
    },
  ];
  try {
    const newDasarHukum = await prisma.dasarHukum.createMany({
      data: DasarHukum,
    });
    return res.json(newDasarHukum);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
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
    { nama: "Ketidakpuasan seksual terhadap pasangan", id_jk: 3 },
    { nama: "Ketidasetaraan gender", id_jk: 3 },
    { nama: "Kurangnya tanggung jawab", id_jk: 4 },
    { nama: "Ketidamampuan finansial", id_jk: 4 },
    { nama: "Sikap acuh tak acuh", id_jk: 4 },
  ];
  try {
    const newFaktorKdrt = await prisma.faktorKdrt.createMany({
      data: datafaktorKdrt,
    });
    return res.json(newFaktorKdrt);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const insertPertanyaan = async (req, res) => {
  try {
    const newKonsul = await prisma.konsul.create({
      data: {
        // id_user: 1,
        date: new Date(),
        user: { connect: { id: 1 } },
      },
    });

    const dataPertanyaan = req.body.pertanyaan;
    console.log(dataPertanyaan);

    if (dataPertanyaan) {
      const keys = Object.keys(dataPertanyaan);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const value = dataPertanyaan[key];

        const jawabanUser = {
          id_fk: parseInt(key), // assuming `id_fk` is the key in this case
          id_konsul: newKonsul.id,
          pertanyaan: String(value), // replace with actual question text if available
          // jawaban: value,
        };

        await prisma.jawaban.create({ data: jawabanUser });
        console.log(jawabanUser); // to check the output
      }
    }
    return res.json("Berhasil");
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};
const forwardChaining = async (req, res) => {
  try {
    const output = await prisma.konsul.findMany({
      include: {
        // user: true,
        jawaban: {
          where: {
            pertanyaan: "true",
          },
          include: {
            konsul: {
              include: {
                prosedur: true,
              },
            },
            faktorKdrt: {
              include: {
                jenisKdrt: true,
              },
            },
          },
        },
      },
    });
    return res.json(output);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const addSaran = async (req, res) => {
  const saran = [
    {
      saran:
        "Jika anda mengalami luka ringan atau memar, cobalah untuk membersihkan luka dan beristirahat. Jika luka tidak sembuh atau menimbulkan rasa sakit berkelanjutan, segeralah mencari perhatian medis. Tapi jika mengalami luka serius, pendarahan, atau cedera berat, segera pergi ke rumah sakit atau dokter. Jangan ragu untuk menghubungi layanan darurat jika diperlukan.",
      id_jk: 1,
    },
    {
      saran: "Jika anda mengalami depresi berat cobalah berkonsultasi dengan psikolog yang dapat membantu untuk mengatasi masalah mental. jangan lupa cari dukungan dari teman dan keluarga.",
      id_jk: 2,
    },
    {
      saran: "",
    },
  ];
};

module.exports = {
  insertPertanyaan,
  insertJenisKdrt,
  insertFaktorKdrt,
  insertDasarHukum,
  forwardChaining,
};
