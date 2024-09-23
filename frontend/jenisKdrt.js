const getSaran = async () => {
  const getSaranId = await fetch("http://localhost:3000/saran");
  const jsonSaran = await getSaranId.json();
  console.log(jsonSaran);

  const addOption = document.getElementsByClassName("addOption");
  for (let i = 0; i < addOption.length; i++) {
    jsonSaran.forEach((element) => {
      addOption[i].innerHTML += `<option data-id="${element.id}" value="${element.id}">${element.id}</option>`;
    });
  }
};

getSaran();

const tambahFunc = async () => {
  const dataJenis = document.getElementById("dataJenis").value;
  const idSaran = document.getElementById("idSaran").value;

  try {
    const data = await fetch("http://localhost:3000/jenisKdrt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: dataJenis,
        id_saran: idSaran,
      }),
    });
    // if (data.ok) window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};

const addJenisKdrt = document.getElementById("jenis");
addJenisKdrt.addEventListener("submit", (e) => {
  e.preventDefault();
  tambahFunc();
});

// Read, Edit and Delete
const jenisKdrt = document.getElementById("jenisKdrt");
const getJenisKdrt = async () => {
  const response = await fetch("http://localhost:3000/jenisKdrt");
  const json = await response.json();
  console.log(json);
  let i = 1;
  json.forEach((element) => {
    const data = document.createElement("tr");
    const no = document.createElement("td");
    const jenis = document.createElement("td");
    const action = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.setAttribute("data-id", element.id);
    deleteButton.style.marginLeft = "10px";
    deleteButton.innerHTML = "Delete";
    const modalEdit = document.createElement("button");
    modalEdit.setAttribute("data-bs-toggle", "modal");
    modalEdit.setAttribute("class", "btn btn-primary");
    modalEdit.setAttribute("data-bs-target", "#editJenis");
    modalEdit.setAttribute("data-id", element.id);
    modalEdit.innerHTML = "Edit";

    // Event listener untuk mempassing data ke modal
    modalEdit.addEventListener("click", () => {
      document.getElementById("exampleModalLabel").innerText = `Edit Data Jenis KDRT #${element.id}`;
      editedJenisId = element.id;

      let editContent = `
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Jenis KDRT</label>
    <input type="text" class="form-control" id="jenisNama" value="${element.nama}">
  </div>
</form>
      `;

      document.querySelector(".modal-body").innerHTML = editContent;
    });

    // Event listener untuk tombol delete
    deleteButton.addEventListener("click", async () => {
      const idToDelete = deleteButton.getAttribute("data-id");
      try {
        const fetchJenis = await fetch(`http://localhost:3000/deleteJenisKdrt/${idToDelete}`, {
          method: "DELETE",
        });
        if (fetchJenis.ok) {
          // alert("Data deleted successfully.");
          // Refresh data setelah delete
          // window.location.reload();
        } else {
          alert("An error occurred. Please try again later.");
          console.error("Error:", fetchJenis);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    });

    action.appendChild(modalEdit);
    action.appendChild(deleteButton);
    jenis.innerHTML = element.nama;
    no.innerHTML = i;
    data.appendChild(no);
    data.appendChild(jenis);
    data.appendChild(action);
    jenisKdrt.appendChild(data);
    i++;
  });

  // Event listener untuk tombol save changes di modal
  document.getElementById("updateJenis").addEventListener("click", async () => {
    // Ambil ID dari jenis KDRT yang sedang diedit
    // const jenisId = document.getElementById("exampleModalLabel").innerText.split("#")[1];

    // Ambil data baru dari input di modal
    const jenisNama = document.getElementById("jenisNama").value;

    // Buat request untuk mengupdate data ke backend
    try {
      const response = await fetch(`http://localhost:3000/updateJenisKdrt/${editedJenisId}`, {
        method: "PUT", // atau PATCH
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nama: jenisNama, // Data yang diupdate
        }),
      });

      if (response.ok) {
        // Refresh data setelah update
        window.location.reload();
      } else {
        console.error("Error:", response);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  });
};

getJenisKdrt();
// end Read, Edit and Delete
