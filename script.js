const body = document.querySelector("body");
const copyButton = document.querySelector(".copy-button");
const placeholderDiv = document.querySelector(".placeholder-div");
const generateButton = document.querySelector(".generate-button");
let gradient = "";
function generateRandomGradient() {
  return `linear-gradient(to right, rgb(${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}), 
    
    rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)}))`;
}

function copyToClipboard() {
  navigator.clipboard.writeText(gradient);
  alert("Copied!");
}
window.onload = function () {
  gradient = generateRandomGradient();
  body.style.backgroundImage = gradient;
};
generateButton.addEventListener("click", function () {
  gradient = generateRandomGradient();
  body.style.backgroundImage = gradient;
  console.log(gradient);
});
