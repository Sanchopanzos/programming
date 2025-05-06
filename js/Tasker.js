const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container"); // список задач

let tasks = document.querySelectorAll(".task"); // она статична. Даже если изменем список, она выведет старый
console.log(tasks);

//добавление задачи. Ивент, который реагирует на клик и вызываем функцию
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault(); // отменяем дейтсвие браузера по умолчанию(перезагрузка страницы)
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task"); // присвоили класс новой задаче
    newTask.innerHTML = `<span>${text}</span>`; // innerHTML - хотите получить или задать значение из любого html-тега, то мы должны использовать "innerHTML"
    container.append(newTask); // добавили задачу в контейнер
    tasks = document.querySelectorAll(".task"); //теперь штука не статичная
    console.log(tasks);
});

function compare(a,b)
{
    if(a.innerHTML > b.innerHTML) return 1;
    if(a.innerHTML == b.innerHTML) return 0;
    if(a.innerHTML < b.innerHTML) return -1;
}

function compareToSmall(a,b)
{
    if(a.innerHTML > b.innerHTML) return -1;
    if(a.innerHTML == b.innerHTML) return 0;
    if(a.innerHTML < b.innerHTML) return 1;
}

// сортировка по возрастанию
btn1.addEventListener("click", function(){
    let newTask = [...tasks].sort(compare);
    container.innerHTML = "";
    for (let i in newTask)
    {
        container.append(newTask[i]);
    }
});

// сортировка по убыванию
btn2.addEventListener("click", function(){
    let newTask = [...tasks].sort(compareToSmall);
    container.innerHTML = "";
    for (let i in newTask)
    {
        container.append(newTask[i]);
    }
});

btn3.addEventListener("click", function(){
    let newTasks = [...tasks]
    container.innerHTML = "";
    for (let task of newTasks)
    {
        if(task.classList.contains("importent"))
        {
            container.append(task);
        }
    }
})

btn4.addEventListener("click", function(){
    
})

btn5.addEventListener("click", function(){

})


// Test
// const btn = document.getElementById("btn");
// btn.addEventListener("click", function(){
//     let tasks = document.querySelectorAll(".task"); // nodelist. Это не массив
//     for (let task of tasks)
//     {
//         // if(task.classList.contains("importent"))  
//         // {
//         //     task.classList.remove("importent");
//         // }  
//         // else
//         // {
//         //     task.classList.add("importent");
//         // } - первый вариант 
//         task.classList.toggle("importent"); // - второй вариант
//     }
// });