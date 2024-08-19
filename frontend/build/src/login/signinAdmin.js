const form = document.getElementById("signInAdmin");
console.log(form);
form.addEventListener("submit", e => {
  e.preventDefault();
  responseLogin();
});
console.log("test");
const responseLogin = async () => {
  const formData = new formData(form);
  formData.append("email", document.getElementById("email").value);
  formData.append("password", document.getElementById("password").value);
  try {
    const sendData = await fetch("http://localhost:4000/loginAdmin", {
      method: "POST",
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    console.log(sendData);
    console.log(formData);
    const data = await sendData.json();
    if (sendData) {
      window.location.href = "../index.html";
    } else {
      console.error('Error:', error);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  }
};