//Event Listeners

const input = document.getElementById("weight");
console.log(input);
window.addEventListener("click", custom);

const outputLBS = document.getElementById("lbs");
const outputKG = document.getElementById("kg");
const outputOZ = document.getElementById("oz");
const outputGrams = document.getElementById("grams");

function custom(e) {
  let val = e.target.textContent;

  switch (val) {
    case "Pounds":
      input.addEventListener("input", changedLbs);
      break;
    case "Kilograms":
      input.addEventListener("input", changedKg);
      break;

    case "Ounces":
      input.addEventListener("input", changedOZ);
      break;

    case "Grams":
      input.addEventListener("input", changedGrams);
      break;

    default:
      changedLbs();
  }
}

const grams = document.getElementById("gOutput");
const oz = document.getElementById("ozOutput");
const kg = document.getElementById("kgOutput");
const lbs = document.getElementById("lbsOutput");

// // select system to convert
const gramsBtn = document
  .getElementById("grams-btn")
  .addEventListener("click", changedGrams);
const ozBtn = document
  .getElementById("oz-btn")
  .addEventListener("click", changedOZ);
const kgBtn = document
  .getElementById("kilo-btn")
  .addEventListener("click", changedKg);
const lbsBtn = document
  .getElementById("lbs-btn")
  .addEventListener("click", changedLbs);

function changedLbs(e) {
  let pounds = input.value;
  grams.innerHTML = pounds / 0.0022046;
  oz.innerHTML = pounds * 16;
  kg.innerHTML = pounds / 2.2046;

  if (input.value) outputLBS.style.display = "inline";
  else outputLBS.style.display = "none";

  outputKG.style.display = "none";
  outputOZ.style.display = "none";
  outputGrams.style.display = "none";
}

function changedKg(e) {
  let kg = input.value;
  grams.innerHTML = kg / 0.0022046;
  oz.innerHTML = kg * 16;
  lbs.innerHTML = kg / 2.2046;
  if (input.value) outputKG.style.display = "inline";
  else outputKG.style.display = "none";

  //prevent the other divs from showing
  outputLBS.style.display = "none";
  outputOZ.style.display = "none";
  outputGrams.style.display = "none";
}

function changedOZ() {
  let oz = input.value;
  grams.innerHTML = oz / 0.0022046;
  kg.innerHTML = oz * 16;
  lbs.innerHTML = oz / 2.2046;
  if (input.value) outputOZ.style.display = "inline";
  else outputOZ.style.display = "none";

  //prevent the other divs from showing

  outputLBS.style.display = "none";
  outputKG.style.display = "none";
  outputGrams.style.display = "none";
}
function changedGrams(e) {
  let g = input.value;
  kg.innerHTML = g / 0.0022046;
  oz.innerHTML = g * 16;
  lbs.innerHTML = g / 2.2046;
  if (input.value) outputGrams.style.display = "inline";
  else outputGrams.style.display = "none";
  //prevent the other divs from showing

  outputLBS.style.display = "none";
  outputKG.style.display = "none";
  outputOZ.style.display = "none";
}
