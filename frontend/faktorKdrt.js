const tambahFunc = async () => {
  const dataFaktor = document.getElementById("dataFaktor").value;
  const idJenis = document.getElementById("idJenis").value;
  const getJenisId = await fetch("http://localhost:3000/getJenis");
  const jsonJenis = await getJenisId.json();
  console.log(jsonJenis);

  const addOption = document.getElementsByClassName("addOption");
  for (let i = 0; i < addOption.length; i++) {
    jsonJenis.forEach((element) => {
      addOption[i].innerHTML += `<option data-id="${element.id}" value="${element.id}">${element.id}</option>`;
    });
  }

  try {
    const data = await fetch("http://localhost:3000/jenisKdrt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nama: dataJenis,
        id_jk: idJenis,
      }),
    });
    if (data.ok) window.location.reload();
  } catch (error) {
    console.error("Error:", error);
  }
};

const addFaktorKdrt = document.getElementById("faktor");
addFaktorKdrt.addEventListener("submit", (e) => {
  e.preventDefault();
  tambahFunc();
});

const faktorKdrt = document.getElementById("faktorKdrt");
const getFaktorKdrt = async () => {
  try {
    const response = await fetch("http://localhost:3000/faktorKdrt");
    const json = await response.json();
    console.log(json);
    let i = 1;
    json.forEach((element) => {
      const data = document.createElement("tr");
      const no = document.createElement("td");
      const faktor = document.createElement("td");
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
      modalEdit.setAttribute("data-bs-target", "#editFaktor");
      modalEdit.setAttribute("data-id", element.id);
      modalEdit.innerHTML = "Edit";

      // Event listener untuk mempassing data ke modal
      modalEdit.addEventListener("click", () => {
        document.getElementById("exampleModalLabel").innerText = `Edit Data Faktor KDRT #${element.id}`;
        editedFaktorId = element.id;

        let editContent = `
      <form>
  <div class="mb-3">
    <label for="faktor" class="form-label">Faktor KDRT</label>
    <input type="text" class="form-control" id="faktorNama" value="${element.nama}">
  </div>
</form>
      `;

        document.querySelector(".modal-body").innerHTML = editContent;
      });

      // Event listener untuk tombol delete
      deleteButton.addEventListener("click", async () => {
        const idToDelete = deleteButton.getAttribute("data-id");
        try {
          const fetchFaktor = await fetch(`http://localhost:3000/deleteJenisKdrt/${idToDelete}`, {
            method: "DELETE",
          });
          if (fetchFaktor.ok) {
            // alert("Data deleted successfully.");
            // Refresh data setelah delete
            // window.location.reload();
          } else {
            alert("An error occurred. Please try again later.");
            console.error("Error:", fetchFaktor);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      });

      no.innerHTML = i;
      data.appendChild(no);
      faktor.innerHTML = element.nama;
      jenis.innerHTML = element.jenisKdrt.nama;
      action.appendChild(modalEdit);
      action.appendChild(deleteButton);
      data.appendChild(faktor);
      data.appendChild(jenis);
      data.appendChild(action);
      faktorKdrt.appendChild(data);
      i++;
    });

    // Event listener untuk tombol save changes di modal
    document.getElementById("updateFaktor").addEventListener("click", async () => {
      // Ambil ID dari Faktor KDRT yang sedang diedit
      // const FaktorId = document.getElementById("exampleModalLabel").innerText.split("#")[1];

      // Ambil data baru dari input di modal
      const faktorNama = document.getElementById("faktorNama").value;

      // Buat request untuk mengupdate data ke backend
      try {
        const response = await fetch(`http://localhost:3000/updateFaktorKdrt/${editedFaktorId}`, {
          method: "PUT", // atau PATCH
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nama: faktorNama, // Data yang diupdate
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
  } catch (error) {
    console.log("Error:", error);
  }
};

getFaktorKdrt();
