// // Task 'hello-world' - 1
// let start = "Я JavaScript"
// console.log(start)

// //Task 'hello-world' - 2
// let start2 = "Я JavaScript"
// console.log(start2)

// // Task 'variables' - 1
// let name = "Jon";
// let admin;
// admin = name;
// console.log(admin)

// // Task 'variables' - 2
// let nativePlanet = "Наша планета";
// let ourClient = "Клиент";
// console.log(nativePlanet + " " + ourClient)

// // Task 'variables' - 3
// const BIRTHDAY = '18.04.1982';
// const age = BIRTHDAY;
// console.log(age)

// // Task 'variables' - 4
// let name2 = "Ilya";
// console.log(`hello ${name2}`);

// // Task 'alert-prompt-confirm' - 1
// let ask = prompt("What is your name", (""))
// console.log(ask)

// // Task 'operator-if' 1
// let qestion = prompt("What's the 'официальное название' JavaScript?", " ")
// if (qestion === "1") {
//     console.log("OK");
// } else {
//     console.log("You don't know? ECMAScript!")
// }

// // Task 'operator-if' 2
// let num = prompt("Number?", " ")
// if (num > 0) {
//     console.log("1")
// }
// else if (num < 0) {
//     console.log("-1")
// }
// else if (Number(num) === 0) {
//     console.log("0")
// } else {
//     console.log("Not a number")
// }

// // Task 'operator-if' 3
// let a = 1;
// let b = 11;
// let res = a + b < 4 ? "Small" : "Many"
// console.log(res)

// // Task 'operator-if' 4
// let login = "Директор"
// let res = login === "Сотрудник" ? "Привет" : login === "Директор" ? "Здравствуйте" : login === " " ? "Нет логина" : "!!!"
// console.log(res)

// // Task 'logical-operators' 1
// let age;
// if (age >= 14 && age >= 90) {
// }
// // Task 'logical-operators' 2
// let qwe = prompt("Who's there?", " ")
// if (qwe === "Admin") {
//     let pass = prompt("Password?", " ")
//     if (pass === "7777") {
//         alert("Здравствуйте")
//     }
//     else if (pass === " " || pass === Null) {
//         alert("Отменено")
//     }
//     else {
//         alert("Неизвестный пароль")
//     }
// }
// else if (qwe === " " || qwe === null) {
//     alert("Непонятно")
// }
// else {
//     alert("Я вас не знаю!")
// }

// // Task 'while - for' 1
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0) {
//         alert(i)
//     }
// }

// // Task 'while - for' 2
// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`)
//     i++
// }

// // Task 'while - for' 3
// let num = prompt("Num >100", " ")
// if (num >= 100) {
//     alert("ok")
// } else {
//     alert("no")
// }

// // Task 'while - for' 4
// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) continue nextPrime;
//     }
//     alert(i)
// }

// // Task 'switch' 1
// let brouser = prompt("What is your brouser?", " ")
// if (brouser === "Edge") {
//     alert( "You've got the Edge!" );
// }
// else if( brouser === "Opera" || brouser === "Chrom" || brouser === "Yandex") {
//     alert( 'Okay we support these browsers too' );
// } else {
//     alert( 'We hope that this page looks ok!' );
// }

// // Task 'switch' 2
// const number = prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case "0" :
//     alert('Вы ввели число 0');
//     break;
//     case "1" :
//     alert('Вы ввели число 1');
//     break;
//     case "2" :
//     case "3" :
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// // Task 'function-basics' 1
// function checkAge(age) {
//    return  age > 18 ? true : confirm("Parents");
// }
// function checkAge(age) {
//     return  age > 18 || confirm("Parents");
//  }

// // Task 'function-basics' 2
// let x = prompt("X?", " ");
// let n = prompt("N?", " ");

// let res = x;
// function pow(x, n) {
//     for (i = 1; i < n; i++) {
//         res *= x;
//     }
//     return res;
// }
// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число!`)
// } else {
//     alert(pow(x, n))
// }

// // Task 'function-basics' 3
// let x = prompt("X?", " ");
// let n = prompt("N?", " ");
// function min(x, n) {
//     if (x < n) {
//         return x
//     }
//     else{
//         return n
//     }
// }
// alert(min(x, n))

// // Task 'arrow-functions' 1
// function ask (qestion, yes, no) {
//     if (confirm(qestion)) yes()
//     else no()
// }
// ask (
//     "Are you agree?",// () => alert("Yes"),
// () => alert("No")
// );

// // Task 'object' 1
// let sum = 0
// let saleris = {
//     Jon : 400,
//     Vill : 200,
//     Sem : 250
// }
// for (let keys in saleris) {
//   sum += saleris[keys]
// }
// console.log(sum)

// // Task 'object' 2
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// }
// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu)

// // Task 'object' 4
// let calculator = {
//     read() {
//         this.a = +prompt('a?', 0);
//         this.b = +prompt('b?', 0);
//     },
//     sum() {
//         return this.a + this.b
//     },
//     mul() {
//         return this.a * this.b
//     }
// };
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// // Task 'object' 5
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep() {
//       alert( this.step );
//       return this;
//     }
//   }
//   ladder.up().up().up().down().up().down().showStep();

// // Task 'constructor-new' 2
// function Calculator() {
//     this.read = function() {// Task 'constructor-new' 2
//         this.a = +prompt("A?", 0)
//         this.b = +prompt("B?", 0)
//     };
//     this.sum = function(){
//         return this.a + this.b
//     };
//     this.mul = function() {
//         return this.a * this.b
//     }
// };
// let calculator = new Calculator();
// calculator.read();
// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// // Task 'constructor-new' 2
// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         this.value += +prompt("How to add?", 0);
//     };
// }
// let accumulator = new Accumulator(1);

// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// // Task 'string' 1
// function ucFirst (str) {
//   if (!str) return str;
//   return str[0].toUpperCase() + str.slice(1)
// }
// alert(ucFirst("vasia"))

// // Task 'string' 2
// function checkSpam(str) {
//     let text = str.toLowerCase();
//     return text.includes("viagra") || text.includes("xxx");
// }
// alert(checkSpam("Buy ViAgRa now"));
// alert(checkSpam("free XxXxX"));
// alert(checkSpam("hello Man"));

// // Task 'string' 3
// function truncate (str, maxlenght) {
// return (str.lenght > maxlenght) ? 
// str.slice(0, maxlenght -1) + "..." : str;
// }
// alert(truncate("Hello my friend I am gled to see you", 10));
// alert(truncate("Hello world!", 15));

// // Task 'array' 1
// let styles = ["Jaz", "Bluz"];
// styles.push("Rok-n-roll");
// styles[1] = "Classic";
// styles.shift(0);
// styles.unshift("Rep", "Tegy");
// console.log(styles)

// // Task 'array' 1
// let sum = 0
// let arr = []
// let prom = () => {
//     let a = prompt('Number', '')
//     // console.log(typeof a)
//     if (!a || isNaN(a)) {
//         for (i = 1; i < arr.length; i++) {
//             sum += +arr[i]
//         }
//         console.log(sum)
//         return;
//     }
//     arr.push(a);
//     prom()
// }
// prom()

// // Task 'array' 2
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;

//     for (let item of arr) { 
//       partialSum += item; 
//       maxSum = Math.max(maxSum, partialSum);
//       if (partialSum < 0) partialSum = 0;
//     }
//     return maxSum;
//   }
//   alert( getMaxSubSum([-1, 2, 3, -9]) );
//   alert( getMaxSubSum([-1, 2, 3, -9, 11]) );
//   alert( getMaxSubSum([-2, -1, 1, 2]) );
//   alert( getMaxSubSum([100, -9, 2, -3, 5]) );
//   alert( getMaxSubSum([1, 2, 3]) );
//   alert( getMaxSubSum([-1, -2, -3]) );

// // Task 'array-metods' 1
// let str1 = "background-color";
// let str2 = "list-style-image";
// let str3 = "-webkit-transition";
// function cameLize(strNew) {
//     return strNew
//     .split('-')
//     .map((item) => item[0].toUpperCase() + item.slice(1) )
//     .join(' ');
// }
// alert(cameLize(str1))
// alert(cameLize(str2))
// alert(cameLize(str3))


// // "Task"
// let qwe = '3534b3hjb63h4fg3v3rofwofpwkg@#%@#$234j2b 3j 4b2 34@ #@# $@#$ @$NJ2342rg2ugf7qtydf2348y38yi3hjiourw&#60;hef2$%@#$@#4@#$'
// let numbers = [];
// let letters = [];
// let symbols = [];
// for (i = 0; i < qwe.length; i++) {
//     if (/[a-z]|[A-Z]/.test(qwe[i])) {
//         letters.push(qwe[i])
//     }
//     else if (/\d/.test(qwe[i])) {
//         numbers.push(qwe[i])
//     }
//     else {
//         symbols.push(qwe[i])
//     }
// }


// console.log(letters.join(","))
// console.log(numbers.join(","))
// console.log(symbols.join(","))

// // Task 'array-metods' 2
// let arr1 = [5, 3, 8, 1]

// function filteredRange (arr ,a ,b) {
// return arr.filter(item => (a <= item && item <= b));
// }

// console.log(filteredRange(arr1, 4, 9))

// // Task 'array-metods' 3
// function filteredRangeInPlace (arr ,a ,b) {
//     for (let i = 0; i < arr.lenght; i++){
//         let val = arr[i];
//         if (val < a || val > b) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }

// let arr = [5, 3, 8, 1];
// filteredRangeInPlace(arr ,1 ,4)
// console.log(arr)

// // Task 'array-metods' 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr)


