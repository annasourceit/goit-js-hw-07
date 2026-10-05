

// Напиши скрипт, який змінює колір фону елемента < body > через
// інлайн - стиль по кліку на button.change - color і задає це 
// значення кольору текстовим вмістом для span.color.

// Для генерування випадкового кольору використовуй 
// функцію getRandomHexColor().

// Зверни увагу, що функція getRandomHexColor() повертає колір у
// hex - форматі, в той час як колір фону на < body > буде у 
// форматі rgb.Це нормально й не потребує якихось правок.

// Вимоги:
// Фон на <body> задається тільки після кліку на button.change-color.
// При кожному кліку на елемент button.change - color фон < body >
// зафарбовується новим рандомним кольором.
// На <body> і span.color значення одного й того самого кольору.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');
btn.addEventListener('click', (event) => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  span.textContent = color;
});



