function sendEmail() {
  let email = document.getElementById("email").value;
  let nama = document.getElementById("nama").value;
  let no = document.getElementById("no").value;
  let pesan = document.getElementById("pesan").value;

  let gabungan = "nama" + nama + "email" + email + "no" + no + "pesan" + pesan;

  console.log(gabungan);
  let encode = encodeURI(pesan);

  var trHtml =
    '<a href="mailto:bylook.stay2022@gmail.com?subject=Konsultasi dan Order Desain&body=Halo Bylook!, Saya ingin mengorder desain anda!" class="btn-konsul">Kirim Pesan</a>';

  document.getElementById("buttonEmail").innerHTML = trHtml;
}

sendEmail();
