const spanName = document.querySelector("#name-output");
const inputName = document.querySelector("#name-input");

function onInputChenge(event) {
  spanName.textContent = event.currentTarget.value;
}

inputName.addEventListener("input", onInputChenge);
