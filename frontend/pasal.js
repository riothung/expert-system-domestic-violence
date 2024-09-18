const pasalKdrt = document.getElementById("pasal");
const getPasal = async () => {
  const response = await fetch("http://localhost:3000/pasal");
  const json = await response.json();
  // console.log(json);
  let i = 1;
  json.forEach((element) => {
    const data = document.createElement("tr");
    const no = document.createElement("td");
    const undang = document.createElement("td");
    const pasal = document.createElement("td");
    const ayat = document.createElement("td");
    const isi = document.createElement("td");
    isi.style.textAlign = "justify";
    isi.style.whiteSpace = "normal"; // Allow wrapping of long text
    isi.style.wordWrap = "break-word"; // Break long words
    isi.style.width = "50%"; // Give more space for the 'isi' column
    isi.style.height = "auto"; // Ensure the cell grows with content
    isi.style.overflow = "visible"; // Ensure content is fully visible
    console.log("Content length:", element.isi.length); // Check the length of the content
    const action = document.createElement("td");
    no.innerHTML = i;
    data.appendChild(no);
    undang.innerHTML = element.undangUndang;
    pasal.innerHTML = element.pasal;
    ayat.innerHTML = element.ayat;
    isi.innerHTML = element.isi;
    data.appendChild(undang);
    data.appendChild(pasal);
    data.appendChild(ayat);
    data.appendChild(isi);
    pasalKdrt.appendChild(data);
    i++;
  });
};

getPasal();
