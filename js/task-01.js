const itemAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemAll.length}`);

const titleEl = document.querySelectorAll(".item h2");
titleEl.forEach((text) => {
  console.log(`Category: ${text.textContent}`);
  const listAll = text.nextElementSibling;
  const listEl = listAll.querySelectorAll("li");
  console.log(`Elements: ${listEl.length}`);
});
