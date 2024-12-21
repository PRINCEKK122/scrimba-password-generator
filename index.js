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
const spanEl = document.getElementById("password-text");

const lightTheme = {
  bgColor: "#ECFDF5",
  bodyColor: "#2B283A",
  paragraphColor: "#6B7280",
  spanColor: "#10B981",
};
const darkTheme = {
  bgColor: "#1f2937",
  bodyColor: "#fff",
  paragraphColor: "#D5D4D8",
  spanColor: "#4ADF86",
};

const themes = document.getElementsByName("theme");
for (let i = 0; i < themes.length; i++) {
  themes[i].addEventListener("click", function () {
    if (themes[i].value === "light") {
      changeTheme(lightTheme);
    } else {
      changeTheme(darkTheme);
    }
  });
}

passwordBtn.addEventListener("click", function () {
  leftPassword.textContent = generatePassword();
  rightPassword.textContent = generatePassword();
});

function generatePassword(passwordLength = 15) {
  const password = [];

  for (let i = 0; i < passwordLength; i++) {
    const idx = Math.floor(Math.random() * characters.length);
    password.push(characters[idx]);
  }

  return password.join("");
}

function changeTheme(themeColors) {
  root.style.backgroundColor = themeColors.bgColor;
  document.body.style.color = themeColors.bodyColor;
  paragraphEl.style.color = themeColors.paragraphColor;
  spanEl.style.color = themeColors.spanColor;
}

changeTheme(lightTheme);
