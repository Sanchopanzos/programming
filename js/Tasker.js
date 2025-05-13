const btnCreateTask = document.getElementById("btn-create-task");
const textTask = document.getElementById("text-task");
const container = document.querySelector(".container"); // список задач

let tasksWithoutFilters = document.querySelectorAll(".task")

let tasks = document.querySelectorAll(".task"); // она статична. Даже если изменем список, она выведет старый
console.log(tasks);

//добавление задачи. Ивент, который реагирует на клик и вызываем функцию
btnCreateTask.addEventListener("click", function(event){
    event.preventDefault(); // отменяем дейтсвие браузера по умолчанию(перезагрузка страницы)
    let text = textTask.value;

    const newTask = document.createElement("div");
    newTask.classList.add("task"); // присвоили класс новой задаче
    newTask.innerHTML = `<span>
    ${text}                 
    <i tabindex="0" class="bi bi-pencil-fill btn-edit"></i>
    <i tabindex="0" class="bi bi-trash3-fill btn-remove"></i>
    </span>`; // innerHTML - хотите получить или задать значение из любого html-тега, то мы должны использовать "innerHTML"
    container.append(newTask); // добавили задачу в контейнер
    tasks = document.querySelectorAll(".task"); //теперь штука не статичная
    tasksWithoutFilters = document.querySelectorAll(".task");
    console.log(tasks);
});

function compare(a,b)
{
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return 1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return -1;
}

function compareToSmall(a,b)
{
    if(a.querySelector("span").innerHTML > b.querySelector("span").innerHTML) return -1;
    if(a.querySelector("span").innerHTML == b.querySelector("span").innerHTML) return 0;
    if(a.querySelector("span").innerHTML < b.querySelector("span").innerHTML) return 1;
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
    let newTasks = [...tasks];
    container.innerHTML = "";
    for (let task of newTasks)
    {
        if(task.classList.contains("importent"))
        {
            container.append(task);
        }
    }
})

// поиск по подстроки
btn4.addEventListener("click", function(){

    let value = document.getElementById("btn4-search").value;
    let newTasks = [...tasks];

    newTasks = newTasks.filter(function(item){
        return item.innerHTML.indexOf(value) != -1;
    })

    container.innerHTML = ""; 

    for (let task of newTasks)
    {
        container.append(task);
    }
})

btn5.addEventListener("click", function(){
    container.innerHTML = "";
    for (let task of tasksWithoutFilters)
        {
            container.append(task);
        }
})


// удаление и редактирование задачи
container.addEventListener("click", (event) => {
    const btn = event.target; // элемент, по которому кликнули

    if(btn.classList.contains("btn-remove"))
    {
        btn.closest(".task").outerHTML = "";
    }

    if(btn.classList.contains("btn-edit"))
    {
        btn.closest(".task").querySelector("span").setAttribute("contenteditable", "true");
    }
    tasks = document.querySelectorAll(".task");
    tasksWithoutFilters = document.querySelectorAll(".task");
});



// const tags = document.querySelectorAll("*");
// let i = 0;
// for(let tag of tags)
// {
//     tag.addEventListener("click", (event) =>{
//         i++;
//         console.log("этап " + i);
//         console.log("целевой элемент");
//         console.log(event.target)
//         console.log("элемент, который поймал событие");
//         console.log(event.CurrentTarget);
//     });
// }

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