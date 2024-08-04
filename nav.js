async function loadNavbar() {
  await fetch("navbar.html")
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      document.getElementById("nav-sec").innerHTML = data;
    });
}

window.onload = loadNavbar;
