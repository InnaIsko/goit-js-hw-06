// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая
// принимает один параметр - число.Функция создает столько
// < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// // Каждый элемент после первого, должен быть шире и выше
// предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX.
// Используй готовую функцию getRandomHexColor для получения цвета.
const div = document.querySelector("#controls");
const input = div.firstElementChild;
const btnCreate = input.nextElementSibling;
const btnDestroy = btnCreate.nextElementSibling;

console.log(btnDestroy);

const inputRange = (event) => {
  return event.currentTarget.value;
};
let amount = inputRange;
console.log(amount);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(amount) {}
btnCreate.addEventListener("click", inputRange);
