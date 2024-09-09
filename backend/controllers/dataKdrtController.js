const prisma = require("../db");
const connect = require("../routes/kdrt");
// const user = require("../controllers/authController");

const insertJenisKdrt = async (req, res) => {
  const dataJenisKdrt = [
    { nama: "Kekerasan Fisik", id_saran: 1, id_prosedur: 1 },
    { nama: "Kekerasan Psikis", id_saran: 2, id_prosedur: 1 },
    { nama: "Kekerasan Seksual", id_saran: 3, id_prosedur: 1 },
    { nama: "Penelantaran Rumah Tangga", id_saran: 4, id_prosedur: 1 },
  ];
  try {
    const newJenisKdrt = await prisma.jenisKdrt.createMany({
      data: dataJenisKdrt,
    });
    return res.json(newJenisKdrt);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const insertProsedur = async (req, res) => {
  const dataProsedur = [
    {
      prosedur:
        "Jika anda ingin melakukan pelaporan, berikut adalah prosedur pelaporan yang harus dilakukan: 1. Pelimpahan berkas di Aplikasi e-berpadu. 2. Bawa berkas fisik ke pengadilan negeri oebobo, kupang dan akan dicocokkan dengan yang ada di aplikasi. Berkas akan dimasukan di ruangan pidana dan nanti akan dibuatkan penetapan. lalu berkas dibawa ke ketua untuk penunjukan majelis hakim. setelah di ke panitra untuk penunjukan panitra pengganti untuk persidangan. setelah itu panitra yang akan membuat penunjukan hakim dan jadwal sidang. Pelaku KDRT bisa ditahan atau tidak tergantung dari majelis hakim.",
    },
  ];
  try {
    const newProsedur = await prisma.prosedur.createMany({
      data: dataProsedur,
    });
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

const insertDasarHukum = async (req, res) => {
  const dataDasarHukum = [
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 44,
      isi: "Setiap orang yang melakukan perbuatan kekerasan fisik dalam lingkup rumah tangga sebagaimana dimaksud dalam Pasal 5 huruf a dipidana dengan pidana penjara paling lama 5 (lima) tahun atau denda paling banyak Rp 15.000.000,00 (lima belas juta rupiah).",
      id_jk: 1,
      ayat: 1,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 44,
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) mengakibatkan korban mendapat jatuh sakit atau luka berat, dipidana dengan pidana penjara paling lama 10 (sepuluh) tahun atau denda paling banyak Rp 30.000.000,00 (tiga puluh juta rupiah).",
      id_jk: 1,
      ayat: 2,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 44,
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (2) mengakibatkan matinya korban, dipidana dengan pidana penjara paling lama 15 (lima belas) tahun atau denda paling banyak Rp 45.000.000,00 (empat puluh lima juta rupiah).",
      id_jk: 1,
      ayat: 3,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 44,
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) dilakukan oleh suami terhadap isteri atau sebaliknya yang tidak menimbulkan penyakit atau halangan untuk menjalankan pekerjaan jabatan atau mata pencaharian atau kegiatan sehari-hari, dipidana dengan pidana penjara paling lama 4 (empat) bulan atau denda paling banyak Rp 5.000.000,00 (lima juta rupiah).",
      id_jk: 1,
      ayat: 4,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 45,
      isi: "Setiap orang yang melakukan perbuatan kekerasan psikis dalam lingkup rumah tangga sebagaimana dimaksud dalam Pasal 5 huruf b dipidana dengan pidana penjara paling lama 3 (tiga) tahun atau denda paling banyak Rp 9.000.000,00 (sembilan juta rupiah).",
      id_jk: 2,
      ayat: 1,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 45,
      isi: "Dalam hal perbuatan sebagaimana dimaksud pada ayat (1) dilakukan oleh suami terhadap isteri atau sebaliknya yang tidak menimbulkan penyakit atau halangan untuk menjalankan pekerjaan jabatan atau mata pencaharian atau kegiatan sehari-hari, dipidana dengan pidana penjara paling lama 4 (empat) bulan atau denda paling banyak Rp 3.000.000,00 (tiga juta rupiah).",
      id_jk: 2,
      ayat: 2,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 46,
      isi: "Setiap orang yang melakukan perbuatan kekerasan seksual sebagaimana dimaksud dalam Pasal 8 huruf a dipidana dengan pidana penjara paling lama 12 (dua belas) tahun atau denda paling banyak Rp 36.000.000,00 (tiga puluh enam juta rupiah).",
      id_jk: 3,
      ayat: 1,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 47,
      isi: "Setiap orang yang memaksa orang yang menetap dalam rumah tangganya melakukan hubungan seksual sebagaimana dimaksud dalam Pasal 8 huruf b dipidana dengan pidana penjara paling singkat 4 (empat) tahun dan pidana penjara paling lama 15 (lima belas) tahun atau denda paling sedikit Rp 12.000.000,00 (dua belas juta rupiah) atau denda paling banyak Rp 300.000.000,00 (tiga ratus juta rupiah).",
      id_jk: 3,
      ayat: 1,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 48,
      isi: "Dalam hal perbuatan sebagaimana dimaksud dalam Pasal 46 dan Pasal 47 mengakibatkan korban mendapat luka yang tidak memberi harapan akan sembuh sama sekali, mengalami gangguan daya pikir atau kejiwaan sekurangkurangnya selama 4 (empat) minggu terus menerus atau 1 (satu) tahun tidak berturut-turut, gugur atau matinya janin dalam kandungan, atau mengakibatkan tidak berfungsinya alat reproduksi, dipidana dengan pidana penjara paling singkat 5 (lima) tahun dan pidana penjara paling lama 20 (dua puluh) tahun atau denda paling sedikit Rp 25.000.000,00 (dua puluh lima juta rupiah) dan denda paling banyak Rp 500.000.000,00 (lima ratus juta rupiah).",
      id_jk: 3,
      ayat: 1,
    },
    {
      undangUndang: "UU No. 23 Tahun 2004",
      pasal: 49,
      isi: "Dipidana dengan pidana penjara paling lama 3 (tiga) tahun atau denda paling banyak Rp 15.000.000,00 (lima belas juta rupiah), setiap orang yang : a. menelantarkan orang lain dalam lingkup rumah tangganya sebagaimana dimaksud dalam Pasal 9 ayat (1); b. menelantarkan orang lain sebagaimana dimaksud dalam Pasal 9 ayat (2).",
      id_jk: 4,
      ayat: 1,
    },
  ];
  try {
    const newDasarHukum = await prisma.dasarHukum.createMany({
      data: dataDasarHukum,
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
        prosedur: { connect: { id: 1 } },
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
    return res.json(output);
    // const konsulData = await prisma.konsul.findMany({
    //   include: {
    //     jawaban: {
    //       include: {
    //         faktorKdrt: {
    //           include: {
    //             jenisKdrt: true,
    //           },
    //         },
    //       },
    //     },
    //     prosedur: true,
    //   },
    // });
    // // Tambahkan query tambahan untuk mendapatkan saran dan dasar hukum
    // const output = await Promise.all(
    //   konsulData.map(async (konsul) => {
    //     const jenisKdrtId = konsul.jawaban[0]?.faktorKdrt?.jenisKdrt?.id;
    //     const saranData = jenisKdrtId
    //       ? await prisma.saran.findMany({
    //           where: { id_jk: jenisKdrtId },
    //         })
    //       : [];
    //     const dasarHukumData = jenisKdrtId
    //       ? await prisma.dasarHukum.findMany({
    //           where: { id_jk: jenisKdrtId },
    //         })
    //       : [];
    //     return {
    //       ...konsul,
    //       saran: saranData,
    //       dasarHukum: dasarHukumData,
    //     };
    //   })
    // );
    // return res.json(output);
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
    },
    {
      saran: "Jika anda mengalami depresi berat cobalah berkonsultasi dengan psikolog yang dapat membantu untuk mengatasi masalah mental. jangan lupa cari dukungan dari teman dan keluarga.",
    },
    {
      saran: "Jika mengalami kekerasan seksual, segera cari bantuan medis untuk mendapatkan pemeriksaan dan perawatan, serta mendokumentasikan bukti diperlukan.",
    },
    {
      saran: "Jika anda mengalami penelantaran rumah tangga, anda bisa melakukan mediasi keluarga. Jika tidak menemukan akar permasalahan, anda bisa mengajukan gugatan hukum untuk meminta nafkah.",
    },
  ];
  try {
    const newSaran = await prisma.saran.createMany({
      data: saran,
    });
    return res.json(newSaran);
  } catch (error) {
    console.log(error);
    return res.json({ error: error.message });
  }
};

module.exports = {
  insertPertanyaan,
  insertJenisKdrt,
  insertFaktorKdrt,
  insertDasarHukum,
  forwardChaining,
  addSaran,
  insertProsedur,
};
