const jenisKdrt = document.getElementById("jenisKdrt");
const getJenisKdrt = async () => {
  try {
    const response = await fetch("http://localhost:3000/jenisKdrt");
    const json = await response.json();
    console.log(json);
    let i = 1;
    json.forEach((element) => {
      const data = document.createElement("tr");
      const jenis = document.createElement("td");
      const no = document.createElement("td");
      no.innerHTML = i;
      data.appendChild(no);
      //   data.value = element.id;
      jenis.innerHTML = element.nama;
      data.appendChild(jenis);
      jenisKdrt.appendChild(data);
      i++;
    });
  } catch (error) {
    console.log(error);
  }
};

getJenisKdrt();
