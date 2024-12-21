const characters = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordBtn = document.getElementById("password-btn");
const leftPassword = document.getElementById("left-password");
const rightPassword = document.getElementById("right-password");
const root = document.getElementById("root");
const paragraphEl = document.getElementById("text");

const themes = document.getElementsByName("theme");
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", function (e) {
    if (themes[i].value === "light") {
      lightTheme();
    } else {
      darkTheme();
    }
  });
}

passwordBtn.addEventListener("click", function () {
  const passwordLength = 15;
  leftPassword.textContent = generatePassword();
  rightPassword.textContent = generatePassword();
});

function generatePassword() {
  const passwordLength = 15;
  const password = [];

  for (let i = 0; i < passwordLength; i++) {
    const idx = Math.floor(Math.random() * characters.length);
    password.push(characters[idx]);
  }

  return password.join("");
}

function lightTheme() {
  root.style.backgroundColor = "#ECFDF5";
  document.body.style.color = "#2B283A";
  paragraphEl.style.color = "#6B7280";
  document.getElementById("password-text").style.color = "#10B981";
}

function darkTheme() {
  root.style.backgroundColor = "#1f2937";
  document.body.style.color = "#fff";
  paragraphEl.style.color = "#D5D4D8";
  document.getElementById("password-text").style.color = "#4ADF86";
}
