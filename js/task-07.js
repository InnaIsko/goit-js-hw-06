const input = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

const inputRange = (event) => {
  const inputRangeValue = event.currentTarget.value;
  spanText.style.fontSize = inputRangeValue + "px";
};
input.addEventListener("change", inputRange);
