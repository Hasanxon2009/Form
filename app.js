const form = document.querySelector("#form-body");
const formText = document.querySelector("#form-text");
const message = document.querySelector(".message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = /^[a-zA-Z0-9]{6,12}$/;
  const value = formText.value;
  if (input.test(value)) {
    message.textContent = "Ma'lumot to'g'ri";
  } else {
    message.textContent =
      "Kiritilgan ma'lumot 6 va 12 oralig'ida katta-kichik va raqamlardan iborat bo`lishi kerak";
  }
  form.reset();
});
