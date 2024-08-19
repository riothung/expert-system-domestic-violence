const form = document.getElementById("signInAdmin");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  responseLogin();
});
console.log("test");
const responseLogin = async () => {
  const formData = new FormData(form);
  formData.append("email", document.getElementById("email").value);
  formData.append("password", document.getElementById("password").value);
  try {
    const sendData = await fetch("http://localhost:4000/login", {
      method: "POST",
      credentials: "include",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};
