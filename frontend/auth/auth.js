const form = document.getElementById("signIn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  responseLogin();
});

const responseLogin = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const data = await fetch("http://localhost:3000/login", {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await data.json();
    console.log(json);
    if (json.success) return (window.location.href = "./index.html");
    // .then((data) => {
    //   console.log(data.json());
    // });
  } catch (error) {
    console.log(error);
    console.log("test error");
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};
