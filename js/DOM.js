// === ЗАДАНИЕ 1 Работта с классом "test-text" ===
const p1 = document.querySelector(".test-text"); // метод находит и возвращает первый .test-text и записывает его в константу p1
p1.textContent = "Hello, World! I am Sanchopanzos"; // записываем содержимое в p(параграф)

p1.style.padding = "10px"; // внутренний отступ
p1.style.border = "2px solid blue"; // рамка
p1.style.backgroundColor = "lightblue"; // цвет задника
p1.style.color = "blue"; // цвет шрифта
p1.style.marginBottom = "20px"; // отступ снизу

// === ЗАДАНИЕ 2 ===

document.getElementById("email").value = "mail@mail.ru"; // устанавливает значение "mail@mail.ru" в первое попавшееся поле по id email
document.getElementById("email").disabled = true; // нельзя больше редактировать email
document.getElementById("remember").checked = true; // отмеченный по умолняию
document.getElementById("btn").textContent = "Отправить"; // находит элемент по Id btn и записывает туда значение "Enter"

// === ЗАДАНИЕ 3 ===
const link = document.createElement("a"); // создали гиперссылку и плместилу ее в константу link
link.href = "https://portal.midis.info/stream/"; // переделали значение(ссылку) в константу
link.textContent = "ссылка на сайт"; // надпись
link.target = "_blank"; // открытие ссылки в новом окне
link.style.textDecoration = "none"; // не подчеркиваем
link.style.color = "blue"; // цвет ссылки
link.style.transition = "color 0.3s ease"; // плавный переход между цветами при наведение
link.style.display = "inline-block"; // позиционирование
link.style.marginTop = "20px"; // отступ сверху

// добавялем реакции реакции на событие мышки

// при наведение меняем цвет на красный. первй элемент - название события, () => {код} - функция, выполняемая при событие
link.addEventListener("mouseover", () => {
  link.style.color = "red";
});

// когда нет наведения - синий
link.addEventListener("mouseout", () => {
  link.style.color = "blue";
});

document.getElementById("link-container").appendChild(link); // добавляем в конец div с id link-container элемент link

// === ЗАДАНИЕ 4 ===
const ball = document.getElementById("ball"); // присвоили ссылку объекта => редактируя их, редактируется и изначальный объект. Нашли его по id
const startBtn = document.getElementById("startBtn"); // присвоили ссылку объекта => редактируя их, редактируется и изначальный объект. Нашли его по id

startBtn.style.marginBottom = "40px"; // отступ снизу

let animationFrame; 
let currentY = 350; // текущая координата шарика по Y. Изначально у него 350 (cy="350")

// функция взлета(-y)
function moveBallUp() 
{
  if (currentY > 20) // 20 px - где-то сверху svg холста
  {
    currentY -= 5; // подъем
    ball.setAttribute("cy", currentY); // меняет координату cy="350" на currentY, который меняется. Метод setAttribute предназначен для установки опр значений
    animationFrame = requestAnimationFrame(moveBallUp); // отвечает за выполнения метода для каждого кадра и присваивает кадр в animationFrame
  } 

  else 
  {
    cancelAnimationFrame(animationFrame); // заканчивает выполнение метода на кадре animationFrame
  }
}

startBtn.addEventListener("click", 
() => 
{
  currentY = 350; // сброс позиции
  moveBallUp(); // активация метода
});
