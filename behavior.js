 console.log("behavior.js is running");
const title = document.querySelector("#banner-h2");
const shoutButton = document.querySelector("#btn-hello");

const greetings = ["Hello!", "你好 (nei5 hou2)", "നമസ്കാരം (Namaskāram)", "¡Hola!", "Bonjour!"];
let greetingIndex = 0;

function sayHello() {
  title.textContent = greetings[greetingIndex];
  greetingIndex = (greetingIndex + 1) % greetings.length;
}

shoutButton.addEventListener("click", sayHello);

const email = document.querySelector("#email");
const copyButton = document.querySelector("#copy-email");

function copyEmail() {
  navigator.clipboard.writeText(email.textContent);
  copyButton.textContent = "Copied!";

  setTimeout(function () {
    copyButton.textContent = "Copy my email";
  }, 2000);
}

copyButton.addEventListener("click", copyEmail);