const konsul = document.getElementById("konsul");
konsul.addEventListener("submit", (e) => {
  e.preventDefault();
  forwardChaining();
});

const forwardChaining = async (req, res) => {
  const jawaban = document.querySelectorAll("[type=checkbox]");
  let jawabanUser = {};

  jawaban.forEach((item) => {
    if (item.checked === true) {
      jawabanUser[item.value] = true;
    } else if (item.checked === false) {
      jawabanUser[item.value] = false;
    }
  });

  try {
    const kirimJawaban = await fetch("http://localhost:3000/insertPertanyaan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pertanyaan: jawabanUser,
      }),
    });
    console.log(kirimJawaban);
  } catch (error) {
    console.log(error);
  }
};
