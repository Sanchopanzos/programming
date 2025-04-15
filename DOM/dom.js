// 1.0 выбор элементов на странице
// 1.1 выбор по ID
const h1 = document.getElementById("title");
console.log(h1);

// 1.2 пункт - выбор одного элемента по селектору

const menu = document.querySelector(".menu li:last-child");
console.log(menu);

// 1.3 пунктк - выбор нескольких элементов по селектору
const paragraphs = document.querySelectorAll("p");
console.log(paragraphs)