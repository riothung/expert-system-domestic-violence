const forwardChaining = async () => {
  const jawaban = document.querySelectorAll("[type=checkbox]");
  let jawabanUser = {};

  jawaban.forEach((item) => {
    if (item.checked === true) {
      jawabanUser[item.name] = true;
    } else if (item.checked === false) {
      jawabanUser[item.name] = false;
    }
  });
  console.log(jawabanUser);

  try {
    const kirimJawaban = await fetch("http://localhost:3000/addKonsul", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pertanyaan: jawabanUser,
      }),
    });
    // const jsonKirimJawaban = kirimJawaban.json()
    if (kirimJawaban.ok) window.location.reload();
  } catch (error) {
    console.log(error);
    return;
  }
};

const konsul = document.getElementById("konsul");
konsul.addEventListener("submit", (e) => {
  e.preventDefault();
  forwardChaining();
  // console.log("test");
});

const hasilKonsul = document.getElementById("hasilKonsul");
const getKonsul = async () => {
  const response = await fetch("http://localhost:3000/forwardChaining");
  const json = await response.json();
  console.log(json);
  let i = 1;
  json.forEach((element) => {
    const data = document.createElement("tr");
    const no = document.createElement("td");
    const date = document.createElement("td");
    const action = document.createElement("td");
    const modalButton = document.createElement("button");
    modalButton.setAttribute("data-bs-toggle", "modal");
    modalButton.setAttribute("class", "btn btn-warning");
    modalButton.setAttribute("data-bs-target", "#detailKonsul");
    modalButton.setAttribute("data-id", element.id);
    modalButton.innerHTML = "Detail";

    // Event listener untuk mempassing data ke modal
    modalButton.addEventListener("click", () => {
      document.getElementById("exampleModalLabel").innerText = `Detail Konsul #${element.id}`;

      // Buat tabel hanya sekali
      let tableContent = `
      <table class="table">
        <thead>
          <tr>
            <th>Faktor KDRT</th>
            <th>Jenis KDRT</th>
            <th>Dasar Hukum</th>
            <th>Prosedur</th>
            <th>Saran</th>
          </tr>
        </thead>
        <tbody>`;

      // Isi `tbody` dengan data dari `element.jawaban`
      element.jawaban.forEach((jawaban) => {
        tableContent += `
          <tr>
            <td style="text-align: justify;">${jawaban.faktorKdrt.nama}</td>
            <td style="text-align: justify;">${jawaban.faktorKdrt.jenisKdrt.nama}</td>
            <td >${jawaban.faktorKdrt.jenisKdrt.dasarHukum.map((dh) => `<a href="pasal.html">Pasal ${dh.pasal} Ayat ${dh.ayat}</a>`)}</td>
            <td style="text-align: justify;">${jawaban.faktorKdrt.jenisKdrt.prosedur.prosedur}</td>
            <td style="text-align: justify;">${jawaban.faktorKdrt.jenisKdrt.saran.saran}</td>
          </tr>`;
      });

      tableContent += `</tbody></table>`;

      // Masukkan tabel ke dalam modal-body
      document.querySelector(".modal-body").innerHTML = tableContent;
    });

    // Format the date in 'YYYY-MM-DD' format
    const formattedDate = new Date(element.date).toISOString().split("T")[0];

    // Use the formatted date in your table

    action.appendChild(modalButton);
    date.innerHTML = formattedDate;
    no.innerHTML = i;
    data.appendChild(no);
    data.appendChild(date);
    data.appendChild(action);
    hasilKonsul.appendChild(data);
    i++;
  });
  console.log(json);
};

getKonsul();
