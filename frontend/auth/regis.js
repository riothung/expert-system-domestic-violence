const regisForm = document.getElementById("signUp");
regisForm.addEventListener("submit", (e) => {
  e.preventDefault();
  responseRegis();
});

const responseRegis = async () => {
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    const data = await fetch("http://localhost:3000/signupUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullName, email, password }),
    });
    const regisData = await data.json();
    // if (regisData.success) return (window.location.href = "./login.html");
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again later.");
  }
};
