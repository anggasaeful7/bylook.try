function fetchprofile() {
  var email = localStorage.getItem("user");

  document.getElementById("email").value = email;

  const xhttp = new XMLHttpRequest();
  xhttp.open(
    "GET",
    "https://6376413881a568fc25fa08a8.mockapi.io/api/transaks?email=" + email
  );
  xhttp.send();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const data = JSON.parse(this.responseText);
      var nama = data[0].nama;
      var email = data[0].email;
      var progress = data[0].progress;

      document.getElementById("nama").value = nama;
      document.getElementById("progress").value = progress;
    }
  };
}

fetchprofile();
