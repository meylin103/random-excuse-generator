import "bootstrap";
import "./style.css";

// ==============================
// Data
// ==============================

const who = [
  "The dog",
  "My grandma",
  "The mailman",
  "My bird"
];

const action = [
  "ate",
  "peed on",
  "crushed",
  "broke"
];

const what = [
  "my homework",
  "my phone",
  "the car"
];

const when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

// ==============================
// Functions
// ==============================

// Returns a random element from an array
function getRandom(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Generates a random excuse
function generateExcuse() {
  return `${getRandom(who)} ${getRandom(action)} ${getRandom(what)} ${getRandom(when)}.`;
}

// Displays the excuse on the page
function displayExcuse() {
  excuseElement.textContent = generateExcuse();
}

// Copies the excuse to the clipboard
function copyExcuse() {
  navigator.clipboard.writeText(excuseElement.textContent);

  alert("✅ Excuse copied successfully!");
}

// ==============================
// DOM Elements
// ==============================

const excuseElement = document.querySelector("#excuse");
const generateButton = document.querySelector("#generate-btn");
const copyButton = document.querySelector("#copy-btn");

// ==============================
// Events
// ==============================

window.onload = () => {

  // Generate first excuse
  displayExcuse();

  // Generate new excuse
  generateButton.addEventListener("click", displayExcuse);

  // Copy excuse
  copyButton.addEventListener("click", copyExcuse);

};