const faktorKdrt = document.getElementById("faktorKdrt");
const getFaktorKdrt = async () => {
  try {
    const response = await fetch("http://localhost:3000/faktorKdrt");
    const json = await response.json();
    console.log(json);
    let i = 1;
    json.forEach((element) => {
      const data = document.createElement("tr");
      const faktor = document.createElement("td");
      const jenis = document.createElement("td");
      const no = document.createElement("td");
      no.innerHTML = i;
      data.appendChild(no);
      //   data.value = element.id;
      faktor.innerHTML = element.nama;
      jenis.innerHTML = element.jenisKdrt.nama;
      data.appendChild(faktor);
      data.appendChild(jenis);
      faktorKdrt.appendChild(data);
      i++;
    });
  } catch (error) {
    console.log(error);
  }
};

getFaktorKdrt();
