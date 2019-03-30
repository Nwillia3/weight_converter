const input = document.getElementById("lbs").addEventListener("input", changed);
const grams = document.getElementById("gOutput");
const oz = document.getElementById("ozOutput");
const kg = document.getElementById("kgOutput");

function changed(e) {
  document.getElementById("output").style.visibility = "visible";
  let pounds = e.target.value;
  grams.innerHTML = pounds / 0.0022046;
  oz.innerHTML = pounds * 16;
  kg.innerHTML = pounds / 2.2046;
}
