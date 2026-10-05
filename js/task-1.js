// З використанням властивостей і методів DOM - елементів,
// напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в
// ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories
// знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у
// категорії(усіх < li >, вкладених у нього).

// Вимоги:
// Кількість категорій, їх назва та кількість елементів 
// отримані за допомогою властивостей і методів DOM - елементів.
// Дані за кожною категорією отримані й виведені в консоль 
// у тілі циклу або методу forEach().
// У консолі має бути виведено таке повідомлення:

const categories = document.querySelectorAll('.item');
console.log(`Number of categories: ${categories.length}`);
const lists = document.querySelectorAll('.item ul');
const headers = document.querySelectorAll('.item h2');
for (let i = 0; i < headers.length; i++) {  
     console.log(`Category: ${headers[i].textContent}`); 
     console.log(`Elements : ${lists[i].children.length}`);
}



