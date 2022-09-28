const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");
const placeholder = input.getAttribute("placeholder");

const inputClick = (event) => {
  console.log(event.currentTarget.value.length);
  if (dataLength == event.currentTarget.value.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
};
console.log(input.value);
input.addEventListener("blur", inputClick);
