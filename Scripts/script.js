const captcha = document.querySelector(".captcha");
const refreshBtn = document.querySelector(".refresh-btn");
const captchaInput = document.querySelector(".captcha-input");
const captchaStatus = document.querySelector(".captcha-status");
const form = document.querySelector("form");
const Name = document.querySelector(".name");
const Email = document.querySelector(".email");
const Password = document.querySelector(".password");

const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");

let allCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
function getCaptcha() {
  for (let i = 0; i < 6; i++) {
    //getting 6 random characters from the array
    let randomCharacter =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    captcha.innerText += ` ${randomCharacter}`; //passing 6 random characters inside captcha innerText
  }
}
getCaptcha(); //calling getCaptcha when the page open
refreshBtn.addEventListener("click", () => {
  removeContent();
  getCaptcha();
});

form.addEventListener("submit", (e) => {
  e.preventDefault(); //preventing button from it's default behaviour
  captchaStatus.style.display = "block";

  let inputVal = captchaInput.value.split("").join(" ");
  if (inputVal == captcha.innerText) {
    //if captcha matched
    captchaStatus.style.color = "#4db2ec";
    captchaStatus.innerText = "Nice! You don't appear to be a robot.";
    setTimeout(() => {
      alert("sign up success");
      handleCaptcha();
      removeContent2();
    }, 1000);
  } else {
    captchaStatus.style.color = "#ff0000";
    captchaInput.value = "";
    captcha.innerText = "";
    getCaptcha();
    captchaStatus.innerText = "Invalid captcha. Please try again!";
  }
});
function removeContent() {
  captchaInput.value = "";
  captcha.innerText = "";
  captchaStatus.style.display = "none";
}
function removeContent2() {
  captchaInput.value = "";
  Name.value = "";
  Password.value = "";
  Email.value = "";
}

function handleCaptcha() {
  captchaStatus.style.display = "none";
  captchaInput.value = "";
  captcha.innerText = "";
  getCaptcha();
}

// dark mode

const sun = document.querySelector(".light-mode");
const moon = document.querySelector(".dark-mode");

console.log(moon);
const container = document.querySelector(".container");
const innerContainer = document.querySelector(".inner-container");
const signUp = document.querySelector(".sign-up");

toggle.addEventListener("click", () => {
  circle.classList.toggle("move");
  container.classList.toggle("dark1");
  innerContainer.classList.toggle("dark2");
  signUp.classList.toggle("light");

  if (sun.classList.contains !== "display") {
    sun.classList.toggle("display");
    moon.classList.toggle("display");
  }
});
