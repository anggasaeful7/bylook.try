function register() {
  let nama = document.getElementById("nama").value;
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let email = document.getElementById("email").value;

  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://6376413881a568fc25fa08a8.mockapi.io/api/user");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send(
    JSON.stringify({
      nama: nama,
      email: email,
      username: username,
      password: password,
    })
  );

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      localStorage.setItem("user", email);
      Swal.fire({
        text: "Berhasil Register",
        icon: "success",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "/profil.html";
        }
      });
    } else {
      Swal.fire({
        text: "gagal Register",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };
}
