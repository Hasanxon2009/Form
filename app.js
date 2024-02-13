const body = document.querySelector("body");
const container = document.querySelector(".container");
const text = document.querySelector(".text");

const value = [
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
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
function getGradient() {
  let age = "#";
  for (i = 0; i < 6; i++) {
    const renderNumber = Math.floor(Math.random() * value.length);
    age += value[renderNumber];
  }
  return age;
}

function setGradient() {
  const redmi = getGradient();
  const xiomi = getGradient();
  const deg = Math.floor(Math.random() * 360);
  const color = `linear-gradient(
    ${deg}deg,
    ${redmi},
    ${xiomi}
  )`;
  body.style.background = color;
  text.textContent = color;
}
setGradient();
container.addEventListener("click", setGradient);
