// // Напиши скрипт создания и очистки коллекции элементов.
// // Пользователь вводит количество элементов в input и нажимает
// // кнопку Создать, после чего рендерится коллекция.При нажатии
// // на кнопку Очистить, коллекция элементов очищается.
// // Создай функцию createBoxes(amount), которая
// // принимает один параметр - число.Функция создает столько
// // < div >, сколько указано в amount и добавляет их в div#boxes.

// // Размеры самого первого <div> - 30px на 30px.
// // // Каждый элемент после первого, должен быть шире и выше
// // предыдущего на 10px.
// // Все элементы должены иметь случайный цвет фона в формате HEX.
// // Используй готовую функцию getRandomHexColor для получения цвета.
// const divBtn = document.querySelector("#controls");
// const divBox = document.querySelector("#boxes");
// const input = divBtn.firstElementChild;
// const btnCreate = input.nextElementSibling;
// const btnDestroy = btnCreate.nextElementSibling;

// console.log(btnDestroy);

// const inputRange = (event) => {
//   const amount = event.currentTarget.value;
//   return amount;
// };
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// function createBoxes(amount) {
//   let basicSize = 30;
//   const color = getRandomHexColor();
//   for (let index = 0; index <= amount; index += 1) {
//     let size = basicSize + i + 10;
//     let div = document.createElement("div");
//     div.style.width = `${size}px`;
//     div.style.height = `${size} px`;
//     div.style.backgroundColor = color;
//     divBox.append(...div);
//   }
// }

// btnCreate.addEventListener("click", createBoxes);
// input.addEventListener("change", inputRange);
