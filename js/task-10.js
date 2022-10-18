const divControlsRef = document.querySelector("#controls");
const divBoxRef = document.querySelector("#boxes");
const inputRef = divControlsRef.firstElementChild;
const btnCreateRef = inputRef.nextElementSibling;
const btnDestroy = btnCreateRef.nextElementSibling;

function btnHandler() {
  const inputValue = Number(inputRef.value);
  createBoxes(inputValue);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {
  let basicSize = 30;
  for (let index = 1; index <= amount; index += 1) {
    basicSize += 10 * index;
    const box = `<div style = "width:${basicSize}px; height:${basicSize}px; background-color:${getRandomHexColor()};"></div>`;
    divBoxRef.insertAdjacentHTML("beforeend", box);
  }
}

function destroyBoxes() {
  inputRef.value = "";
  divBoxRef.innerHTML = "";
}

btnCreateRef.addEventListener("click", btnHandler);
btnDestroy.addEventListener("click", destroyBoxes);
