const addValueBtn = document.querySelector('[data-action="decrement"]');
const removeValueBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;
const increment = () => {
  counterValue += 1;

  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;

  value.textContent = counterValue;
};
removeValueBtn.addEventListener("click", increment);
addValueBtn.addEventListener("click", decrement);
