var jwt = localStorage.getItem("user");
if (jwt == null) {
  window.location.href = "/login.html";
}
