const form = document.getElementById("signInAdmin");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  responseLogin();
});
console.log("test");
const responseLogin = async () => {
  const formData = new FormData(form);
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const data = await fetch("http://localhost:4000/login", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await data.json();
    console.log(json);
    if (json.success) return (window.location.href = "../index.html");
    // .then((data) => {
    //   console.log(data.json());
    // });
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};
