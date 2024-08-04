var ArtNext = document.getElementById("Art").nextElementSibling.classList;
var EngNext = document.getElementById("Eng").nextElementSibling.classList;
var LawNext = document.getElementById("Law").nextElementSibling.classList;
var DSNext = document.getElementById("DS").nextElementSibling.classList;
var ESNext = document.getElementById("ES").nextElementSibling.classList;
var BTNext = document.getElementById("BT").nextElementSibling.classList;

var Art = document.getElementById("Art");
var Eng = document.getElementById("Eng");
var Law = document.getElementById("Law");
var DS = document.getElementById("DS");
var ES = document.getElementById("ES");
var BT = document.getElementById("BT");

function fetchElements() {}

function list(ele) {
  closeAll(ele);
  ele.nextElementSibling.classList.toggle("hidden");
  ele.classList.toggle("selected");
}

function closeAll(ele) {
  if (ele.id != "Art" && !ArtNext.contains("hidden")) {
    ArtNext.add("hidden");
    Art.classList.remove("selected");
  }
  if (ele.id != "Eng" && !EngNext.contains("hidden")) {
    EngNext.add("hidden");
    Eng.classList.remove("selected");
  }
  if (ele.id != "Law" && !LawNext.contains("hidden")) {
    LawNext.add("hidden");
    Law.classList.remove("selected");
  }
  if (ele.id != "DS" && !DSNext.contains("hidden")) {
    DSNext.add("hidden");
    DS.classList.remove("selected");
  }
  if (ele.id != "ES" && !ESNext.contains("hidden")) {
    ESNext.add("hidden");
    ES.classList.remove("selected");
  }
  if (ele.id != "BT" && !BTNext.contains("hidden")) {
    BTNext.add("hidden");
    BT.classList.remove("selected");
  }
}
