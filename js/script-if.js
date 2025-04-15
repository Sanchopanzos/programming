// минимум среди двух чисел

/*let x, y, z, min;
x = parseInt(prompt("Введите первое число: "));
y = parseInt(prompt("Введите второе число: "));
z = parseInt(prompt("Введите третье число: "));

{
    min = x;

    if(y < min) min = y;
    if(z < min) min = z;

    alert("min = " + min);
} */

// {
//     // вывести нечетные цифры от 0 до 10
    
//     for(let i = 0; i <= 10; i++) 
//     {
//         if(i % 2 == 0 && i != 0) console.log(i + " ");
//     }
// }

// найти количесство последовательности нечетных чисел. Пока не ввели ноль

// {
//     let count = 0;
//     let x;
//     x = parseInt(prompt("Введите первое число"));
//     while(x != 0)
//     {
//         if(x & 2 != 0)
//         {
//             count ++;
//         }
//         x = parseInt(prompt("Введите первое число"));
//     }
//     alert(count);
// }
// найти количество нечетных цифр в многозначном числе
// {
//     let count = 0, d, x;
//     x = parseInt(prompt("Введите натуральное число: "));
//     while(x != 0)
//     {
//         d = x & 10
//         if(x & 2 != 0) 
//         {
//             count++;
//         }
//         x = Math.floor(x/10);
//     }
//     console.log("всего: " + count);
// }