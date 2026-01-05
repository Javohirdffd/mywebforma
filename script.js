let form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // sahifa yangilanmasin

  let ism = document.getElementById("ism").value;
  let familiya = document.getElementById("familiya").value;
  let email = document.getElementById("email").value;
  let parol = document.getElementById("parol").value;

  let talim = document.querySelector('input[name="talim"]:checked');

  if (!ism || !familiya || !email || !parol || !talim) {
    alert("❌ Iltimos, barcha maydonlarni to‘ldiring!");
    return;
  }

  document.getElementById("natija").innerHTML =
    "✅ Ma'lumotlar qabul qilindi <br><br>" +
    "Ism: " + ism + "<br>" +
    "Familiya: " + familiya + "<br>" +
    "Email: " + email + "<br>" +
    "Ta'lim: " + talim.value;
});