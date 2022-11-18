var jwt = localStorage.getItem("user");
if (jwt != null) {
  window.location.href = "/profil.html";
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://6376413881a568fc25fa08a8.mockapi.io/api/user?username=" + username
  );
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      var usernamed = data[0].username;
      var passwordd = data[0].password;
      var email = data[0].email;

      if (username == usernamed && password == passwordd) {
        localStorage.setItem("user", email);
        Swal.fire({
          text: "Berhasil login",
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "/profil.html";
          }
        });
      } else {
        Swal.fire({
          text: "gagal login",
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  return false;
}
