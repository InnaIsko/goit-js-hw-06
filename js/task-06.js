const input = document.querySelector("#validation-input");
const dataLength = input.getAttribute("data-length");
const placeholder = input.getAttribute("placeholder");

const inputClick = (event) => {
  console.log(event.currentTarget.value.length);
  if (dataLength != event.currentTarget.value.length) {
    input.classList.add("invalid");
  } else if (dataLength == event.currentTarget.value.length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
};
console.log(input.value);
input.addEventListener("blur", inputClick);
