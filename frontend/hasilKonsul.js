const getKonsul = async () => {
  try {
    const konsul = await fetch("http://localhost:3000/forwardChaining");
    const konsulJson = await konsul.json();
    console.log(konsulJson);

    let i = 0;

    konsulJson.forEach((element) => {
      const data = document.createElement("tr");
      const no = document.createElement("td");
      const date = document.createElement("td");
      const fullname = document.createElement("td");
      const faktor = document.createElement("td");
      const jenis = document.createElement("td");

      // Format the date in 'YYYY-MM-DD' format
      const formattedDate = new Date(element.date).toISOString().split("T")[0];

      date.innerHTML = formattedDate;
      fullname.innerHTML = element.fullName;
      faktor.innerHTML = element.faktorKdrt.nama;
      jenis.innerHTML = element.jenisKdrt.nama;
      date.appendChild(no);
      date.appendChild(date);
      date.appendChild(fullName);
      date.appendChild(faktor);
      date.appendChild(jenis);
      i++;
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};

getKonsul();

// let sendFilterJson = [];
var hasilFilter = document.getElementById("laporanKonsul");

const getLaporanBulanan = async () => {
  const konsulBulan = document.getElementById("id_bulan").value;
  const konsulTahun = document.getElementById("id_tahun").value;
  console.log(konsulBulan);
  console.log(konsulTahun);

  if (!konsulBulan || !konsulTahun) {
    alert("Pilih bulan dan tahun terlebih dahulu");
    return;
  }

  try {
    const sendFilter = await fetch(`http://localhost:3000/konsulDate?month=${konsulBulan}&year=${konsulTahun}`);
    // let sendFilter = await fetch(`http://localhost:3000/forwardChaining`);

    const sendFilterJson = await sendFilter.json();
    console.log(sendFilterJson);

    hasilFilter.innerHTML = "";

    let i = 1;
    sendFilterJson.forEach((element) => {
      const data = document.createElement("tr");
      const no = document.createElement("td");
      const date = document.createElement("td");
      const fullname = document.createElement("td");
      const faktor = document.createElement("td");
      const jenis = document.createElement("td");

      // Format the date in 'YYYY-MM-DD' format
      const formattedDate = new Date(element.date).toISOString().split("T")[0];

      date.innerHTML = formattedDate;
      element.jawaban.forEach((jawaban) => {
        faktor.innerHTML += jawaban.faktorKdrt.nama + "<br>";
        jenis.innerHTML += jawaban.faktorKdrt.jenisKdrt.nama + "<br>";
      });
      fullname.innerHTML = element.user.fullName;
      no.innerHTML = i;
      data.appendChild(no);
      data.appendChild(date);
      data.appendChild(fullname);
      data.appendChild(faktor);
      data.appendChild(jenis);
      hasilFilter.appendChild(data);
      i++;
    });
  } catch (err) {
    console.error("Error: ", err);
  }
};

const formFilter = document.getElementById("formFilter").addEventListener("submit", (e) => {
  e.preventDefault();
  getLaporanBulanan();
});
