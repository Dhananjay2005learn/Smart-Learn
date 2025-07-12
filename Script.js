function login() {
  const username = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Demo: Hardcoded Login
  if (username === "student" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid login");
  }
}