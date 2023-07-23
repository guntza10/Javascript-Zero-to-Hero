# `Javascript-Zero-to-Hero`

## `Comment`

```
// this one line comment

/*
    this is
    a
    multiline
    comment
*/
```

## `Variables`

- container ที่เอาไว้เก็บ data
- Two steps:
  1. Declaration (`var, let, const`)
  2. Assignment ( = assignment operator)
- data types => `string,number,boolean,undefine,object`

```
let firstName = "Bro"; //strings
let age = 21; //number
let student = true; //booleans
```

## `Variable scope`

- scope ในการเข้าถึง variable นั้นๆ
- let = variables are limited to block scope {}
- var = variables are limited to a function(){}
- global variable = is declared outside any function (if global,var will change browser's window properties)
- ควรใช้ let มากกว่า var เพราะ var(global scope) มีโอกาสที่​ value อาจเปลี่ยนแปลงจากที่ไหนก็ได้ ที่เราไม่ต้องการ

```
// block scope
for (let i = 1; i <= 3; i += 1) {
  console.log(i);
}
console.log(i); // code จะพังเพราะ i เป็น block scope(let) ที่ใช้ได้แค่ใน for loop

// global scope
for (var j = 1; j <= 3; j += 1) {
  console.log(j);
}

console.log(j); // j อยู่นอก for loop ใช้งานได้ เพราะ j เป็น public scope(var)
```

## `Arithmetic expressions`

- คือการ combination กันของ operands (`values, variables, etc.`) กับ operators (`+,- ,*,,/,%`) ในการคำนวณ

```
let students = 20;
students = students + 1;
students = students - 1;
students = students * 2;
students = students / 2;
let extraStudents = students % 2; => mod (หารเอาเศษ)
students = students ** 2;  => exponential (ยกกำลัง)

// แบบย่อ
students += 1;
students -= 1;
students *= 2;
students /= 2;

```

- operator precedence (`ลำดับความสำคัญในการทำ operator`)
  1. parenthesis ()
  2. exponents
  3. multiplication & division
  4. addition & subtraction

```
let result = (1 + 2) * (3 + 4);
```

## `Type conversion`

- การเปลี่ยน data type นึงไปเป็นอีก data type นึง
- `typeof` var => คือการ get data type ของ variable
- การ convert type => ใส่ constructure ของ type ให้กับ variable (`Number(var),String(var),Boolean(var)`)

```
let x;
let y;
let z;

x = Number("pizza"); // Number => convert to number (ถ้า convert ไม่ได้มันจะ return NaN(not-a-number))
y = String(3.14); // String => convert to string
z = Boolean("pizza"); // Boolean => convert to boolean (ถ้าเป็น "" จะ return false แต่ถ้าเป็น string อะไรก็ได้จะ return true)

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);
```

## `Const`

- variable ชนิดนึงที่ไม่สามารถเปลี่ยนแปลงค่าได้(`re-assign ค่าไม่ได้`)
- การตั้งชื่อของ const ควรเป็น uppercase ทั้งหมด (`Good practice`)

```
const PI = 3.14159;
let radius;
let circumference;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);

PI = 420.69; => จะ error ว่า re-assign const ไม่ได้

circumference = 2 * PI * radius;

console.log("The circumference is:", circumference);

```

## `Math methods`

- Built-in methods ของ js ที่เอาไว้สำหรับคำนวณ

```
let x = 3.14;
let y = 5;
let z = 9;
let maximum;
let minimum;
const arr = [1, 2, 3, 5, 7, 500];

x = Math.round(x); => มากกว่า .5 ปัดขึ้น,น้อยกว่า .5 ปัดลง
x = Math.floor(x); => ปัดลงเสมอ
x = Math.ceil(x); ​=> ปัดขึ้นเสมอ
x = Math.pow(x, 2); => x ยกกำลัง 2
x = Math.sqrt(x); => square root
x = Math.abs(x); => absolute ตัวเลข (ค่า+เสมอ)
maximum = Math.max(x, y, z); => หา maximum
maximum = Math.max(...arr);
minimum = Math.min(x, y, z); => หา minimum
minimum = Math.min(...arr);
x = Math.PI; => constant ค่า PI
```

## `Random number generator`

- Math.random() => random decimal number ตั้งแต่ 0 - 1

```
ถ้าต้องการ random ตัวเลขให้มี range ตั้งแต่ 0 - n

Math.random() * n -> จะ random ตั้งแต่ 0 - n (decimal number)

Math.floor(Math.random() * n ) -> จะ random ตั้งแต่ 0 - n (integer number)

ถ้าต้องการ random ตัวเลขให้มี range ตั้งแต่ 1 - n
Math.floor(Math.random() * n ) + 1 -> จะ random ตั้งแต่ 1 - n (integer number)
```

## `String method`

```
let userName = "Bro Code";
let phoneNumber = "123-456-7890";

userName.length; => get length
userName.charAt(0); => get character at index 0
userName.indexOf("o"); => get first index of character "o"
userName.lastIndexOf("o"); => get last index of character "o"
userName = userName.trim(); => ตัด white space ก่อนและหลัง string ออก
userName = userName.toUpperCase(); => convert to upper case
userName = userName.toLowerCase(); => convert to lower case

phoneNumber = phoneNumber.replaceAll("-", ""); => replace string
```

## `String slicing`

- string.slice(`startIndex`, `endIndex`) => มันจะ extract part ของ string ออกมาแล้ว return เป็น string ใหม่ โดยที่ไม่มีการ modify original string เดิม
- string.slice(`startIndex`, `endIndex`) => ถ้าเราไม่ใส่ `endIndex` มันจะ extract มาตั้งแต่ `startIndex` ไปจนครบทุกตัว
- ตอน extract มาตั้งแต่ `startIndex` ถึง `endIndex` มันจะเอามาหมดไม่รวม `endIndex`

```
let fullName = "Snoop Dogg";
let firstName;
let lastName;

firstName = fullName.slice(0, 3);
lastName = fullName.slice(4);

// dynamic code
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ") + 1);
```

## `Method chaining`

```
let userName = "bro";
// normal way
let letter1 = userName.charAt(0);
letter1 = letter1.toUpperCase();
letter1 = letter1.trim();

// method chaining
let letter2 = userName.charAt(0).toUpperCase().trim();
```

## `If statement`

- if a condition is true, then do something,if not, then don't do it!

```
let age = 21;
if (age >= 65) {
  console.log("You are a senior citizen!");
} else if (age >= 18) {
  console.log("You are an adult!");
} else if (age < 0) {
  console.log("YOU HAVEN'T BEEN BORN YET!");
} else {
  console.log("You are a child!");
}

let online = false;
if (online) {
  console.log("You are online!");
} else {
  console.log("You are offline!");
}
```

## `Checked property`

- checked property จะมีแค่ element input type checkbox,radio เท่านั้น

```
document.getElementById("myButton").onclick = function () {
  const myCheckBox = document.getElementById("myCheckBox");
  const visaBtn = document.getElementById("visaBtn");
  const mastercardBtn = document.getElementById("mastercardBtn");
  const paypalBtn = document.getElementById("paypalBtn");

  if (myCheckBox.checked) {
    console.log("You are subscribed!");
  } else {
    console.log("You are NOT subscribed!");
  }

  if (visaBtn.checked) {
    console.log("You are paying with a Visa!");
  } else if (mastercardBtn.checked) {
    console.log("You are paying with a Mastercard!");
  } else if (paypalBtn.checked) {
    console.log("You are paying with PayPal!");
  } else {
    console.log("You must select a payment type!");
  }
};
```

## `Switch case`

- switch case statement ก็เหมือน if..else แต่ดีและเหมาะกว่ากับ many case จัดการง่ายกว่า และ performance code จะดีกว่า

```
// use string compare match case
let grade = "A";

switch (grade) {
  case "A":
    console.log("You did great!");
    break;

  case "B":
    console.log("You did good!");
    break;

  case "C":
    console.log("You did okay!");
    break;

  case "D":
    console.log("You passed ... barely");
    break;

  case "F":
    console.log("YOU FAILED!");
    break;

  default:
    console.log(grade, "is not a letter grade");
}

// use number or other type compare match case
let grade = 95;

switch(true){

    case grade >= 90:
        console.log("You did great!");
        break;

    case grade >= 80:
        console.log("You did good!");
        break;

    case grade >= 70:
        console.log("You did okay!");
        break;

    case grade >= 60:
        console.log("You passed ... barely");
        break;

    case grade > 60:
        console.log("You FAILED!");
        break;

    default:
        console.log(grade, "is not a letter grade!");
}
```

## `Strict equality operator`

```
// = assignment operator => assign value
// == comparison operator => compare two value without data type (convert ให้เป็น type เดียวกันก่อน compare)
// === strict equality operator => compare two value with data type (มันจะเช็ค data type ต้องเหมือนกันก่อนจะ compare)

let x = "3.14";

if (x === 3.14) {
  console.log("That is pi");
} else {
  console.log("That is NOT pi");
}

```

## `Logical operators`

```
// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)

let temp = 15;
let sunny = false;

if (temp > 0 && temp < 30 || sunny) {
  console.log("The weather is good!");
} else {
  console.log("The weather is bad!");
}

```

## `NOT logical operator`

```
// ! NOT logical operator
// typically used to reverse a condition's boolean value
// true -> false  false -> true

let temp = 15;
let sunny = false;

if (!(temp > 0)) {
  console.log("It's cold outside");
} else {
  console.log("It's warm outside");
}

if (!sunny) {
  console.log("It's cloudy outside");
} else {
  console.log("It's sunny outside");
}

```

## `While loop`

- จะ repeat code ไปเรื่อยๆ ถ้า condition เป็น true (infinite loop)
- จะออกจาก loop ก็ต่อเมื่อ condition เป็น false

```
// while loop = repeat some code
//                       while some condition is true
//                       potentially infinite

let userName = "";

while (userName == "" || userName == null) {
  userName = window.prompt("Enter your name");
}

console.log("Hello", userName);
```

## `Do While loop`

- do while loop => ก็เหมือน while loop ต่างกันตอนที่ครัั้งแรกที่รัน มันจะทำ code statement ก่อนเลยแล้วค่อย check condition

```
// do while loop = do something,
//                             then check the condition,
//                             repeat if condition is true

let userName;

do {
  userName = window.prompt("Enter your name");
} while (userName == "");

console.log("Hello", userName);

```

## `For loop`

- repeat code ตามจำนวนที่กำหนดตามที่เราต้องการ
- กำหนด range เริ่มต้น-สุดท้าย ของจำนวน loop ได้

```
// for loop 1 -> 10
for(let i = 1; i <= 10; i+=1){
    console.log(i);
}

// for loop 10 -> 1
for (let i = 10; i > 0; i -= 1) {
  console.log(i);
}

console.log("HAPPY NEW YEAR!");

```

## `Break and continue`

- break => break ออกจาก loop
- continue => skip ไป loop ต่อไปเลย โดยไม่ทำ statement ที่เหลือ

```
// break = breaks out of a loop entirely
// continue = skip an iteration of a loop

for (let i = 1; i <= 20; i += 1) {
  if (i == 13) {
    //break;
    //continue;
  }
  console.log(i);
}
```

## `Nested loop`

- loop ซ้อน loop
- เอาไว้วาดบางอย่างบน space row,column แบบ 2 มิติ (วาดสี่เหลี่ยมผืนผ้าบน space 2 มิติ 4 x 5)

```
let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for (let i = 1; i <= rows; i += 1) {
  for (let j = 1; j <= columns; j += 1) {
    document.getElementById("myRectangle").innerHTML += symbol;
  }
  document.getElementById("myRectangle").innerHTML += "<br>";
}
```

## `Function`

- Define code once, and use it many times and anywhere.To perform some code, call the function name.
- argument => ค่าที่ส่งไปใน function
- parameter => ค่าที่ function รับมา
- argument,parameter คืออันเดียวกัน แต่คนละ perspective

```
startProgram();

function startProgram() {
  let userName = "Bro";
  let age = 21;

  happyBirthday(userName, age);
}

function happyBirthday(userName, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log("Happy birthday dear", userName);
  console.log("Happy birthday to you!");
  console.log("You are", age, "years old!");
}
```

## `Return statement`

- function ที่มี return value

```
let area;
let width;
let height;

width = window.prompt("Enter width");
height = window.prompt("Enter height");

area = getArea(width, height);

console.log("The area is:", area);

function getArea(width, height) {
  return width * height;
}
```

## `Ternary operator`

- short if...else

```
condition ? exprIfTrue : exprIfFalse

let isAdult = age >= 18 ? true : false;

let win = true;
win ? console.log("You win!") : console.log("You lose!");
```

## `Template literals`

- ใช้ (`) แทน '' ,"" (single or double quotes)
- allows embedded variables and expressions
- ใช้สำหรับเก็บ string แบบ multiple lines ได้

```
let userName = "Bro";
let items = 3;
let total = 75;

// normal
console.log("Hello", userName);
console.log("You have", items, "items in your cart");
console.log("Your total is $", total);

// template literal
console.log(`Hello ${userName}`);
console.log(`You have ${items} items in your cart`);
console.log(`Your total is $${total}`);

let text = `Hello ${userName}<br>
You have ${items} items in your cart<br>
Your total is $${total}<br>`;
```

## `Format currency`

- returns a string with a language sensitive representation of this number
- number.toLocaleString(`locale`, {`options`});
- 'locale' = specify that language (undefined = default set in browser)
- 'options' = object with formatting options

```
let myNum = 123456.789;

myNum = myNum.toLocaleString("en-US"); // US English
myNum = myNum.toLocaleString("hi-IN"); // Hindi
myNum = myNum.toLocaleString("de-DE"); // standard German

myNum = myNum.toLocaleString("en-US", { style: "currency", currency: "USD" });
myNum = myNum.toLocaleString("hi-IN", { style: "currency", currency: "INR" });
myNum = myNum.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

myNum = myNum.toLocaleString(undefined, { style: "percent" });
myNum = myNum.toLocaleString(undefined, { style: "unit", unit: "celsius" });
```

## `Array`

- เป็น type variable ที่สามารถ store multiple data ได้

```
let fruits = ["apple", "orange", "banana"];

fruits[2] = "coconut";

fruits.push("lemon"); //add an element or multiple elements
fruits.unshift("mango"); //add element to beginning
fruits.shift(); //removes element from beginning
fruits.pop(); //removes last element

let length = fruits.length;
let index = fruits.indexOf("kiwi"); // ถ้าไม่เจอ element จะ return -1
```

## `Loop array`

```
let prices = [5, 10, 15, 20, 25];

// loop for with index
for(let i = 0; i < prices.length; i+=1){
    console.log(prices[i]);
}

// loop for without index
for (let price of prices) {
  console.log(price);
}
```

## `Sort array string`

- converts all elements to strings and then compares their sequences of UTF-16 code unit values

```
let fruits = ["banana", "apple", "orange", "mango"];

fruits = fruits.sort(); // normal sort
fruits = fruits.sort().reverse(); // reverse sort

for (let fruit of fruits) {
  console.log(fruit);
}
```

## `Sort array number`

- converts all elements in array to strings and then compares their sequences of UTF-16 code unit values
- after it convert all elements to string
- comparison function work bys subtracting(`-`) [`ascending order`]
  - result compare < 0 : a จะถูก sort index ให้ต่ำกว่า b (จะถูกเลื่อน index ให้มาก่อน b)
  - result compare = 0 : a จะไม่มีการเปลี่ยนแปลง (อยู่ index เดิม)
  - result compare > 0 : a จะถูก sort index ให้สูงกว่า b (จะถูกเลื่อน index ให้มาหลัง b)
- สลับ a,b จะเป็นการ sort descending order

```
// ascending order
let numbers = [5, 2, 1, 10, 7];
numbers.sort((a, b) => a - b);
console.log(numbers); // Outputs: [1, 2, 5, 7, 10]

// descending order
let numbers = [5, 2, 1, 10, 7];
numbers.sort((a, b) => b - a);
console.log(numbers); // Outputs: [10, 7, 5, 2, 1]

```

## `2D array`

- array ซ้อน array

```
let fruits = ["apples", "oranges", "bananas"];
let vegetables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruits, vegetables, meats]; // array of array

groceryList[2][2] = "steak";

for (let list of groceryList) {
  for (let food of list) {
    console.log(food);
  }
}
```

## `Spread operator`

- unpack element ของ array ออกมา เอาไปใช้ต่อใน array,argument function
- unpack property ของ object ออกมา เอาไปใช้ต่อใน object,argument function

```
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let maximum = Math.max(...numbers);
console.log(maximum); // 9

let first = [1, 2, 3];
let second = [4, 5, 6];
let combined = [...first, ...second];
console.log(combined); // [1, 2, 3, 4, 5, 6]

let class1 = ["Spongebob", "Patrick", "Sandy"];
let class2 = ["Squidward", "Mr.Krabs", "Plankton"];
class1.push(...class2);
console.log(...class1); // "Spongebob", "Patrick", "Sandy","Squidward", "Mr.Krabs", "Plankton"

let first = {a: 1, b: 2};
let second = {c: 3, d: 4};
let combined = {...first, ...second};
console.log(combined) // {a: 1, b: 2, c: 3, d: 4}

```

## `Rest parameter`

- ใช้ใน function parameter เพื่อรวม parameter ของ function ให้เป็น array เดียวกัน

```
let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log(sum(a, b, c, d, e));

// argument ที่ส่งมา a,b,c,d,e จะโดนจับรวมกันเป็น array numbers
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4));
```

## `Callback`

- callback function => function ที่ถูกส่งไปใช้ใน function อื่นเป็น argument และจะถูก execute เมื่อ parent function มีการ execute สำเร็จ
- callback function จะไม่ถูก execute จนกว่า parent function จะทำงานเสร็จ
- One of the main advantages of using callback functions is that they allow you to control the flow of execution in asynchronous operations. This is especially important in JavaScript, where many operations (like network requests, timers, or user interactions) are asynchronous.
- if you're fetching data from a server, you can't just proceed with the next line of code while you're waiting for the data. Instead, you'd provide a callback function to be executed when the data has been received. This way, you can ensure that the right code runs at the right time.

```
sum(2, 3, displayConsole);

function sum(x, y, callBack) {
  let result = x + y;
  callBack(result);
}

function displayConsole(output) {
  console.log(output);
}
```

## `Array forEach`

- เป็นการ callback function ที่ใช้ในการวนลูป array

```
let students = ["spongebob", "patrick", "squidward"];
students.forEach(capitalize);
students.forEach(print);

students.forEach((element,index,array) => {
  // statement
})

// all parameter
function capitalize(element, index, array) {
  array[index] = element[0].toUpperCase() + element.substring(1);
}

// all element parameter
function print(element) {
  console.log(element);
}
```

## `Array map`

- callback function ในการวน element ของ array แล้ว return เป็น new array

```
let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(square);
let cubes = numbers.map(cube);

numbers.forEach(print);
squares.forEach(print);
cubes.forEach(print);

function square(element) {
  return Math.pow(element, 2);
}
function cube(element) {
  return Math.pow(element, 3);
}
function print(element) {
  console.log(element);
}
```

## `Array filter`

- create new array with callback function(new array that have matched element)

```
let ages = [18, 16, 21, 17, 19, 90];
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(element) {
  return element >= 18;
}
function print(element) {
  console.log(element);
}
```

## `Array reducer`

- callback function ในการ reduce array to single value โดยจะทำการวน element ใน array ทั้งหมด
- reducer function จะมี 3 arguments
  - accumulator => callback's value ของ previous callback
  - currentValue => current element ที่กำลังวนถึง
  - Initial value of accumulator => เป็น optional จะใส่หรือไม่ใส่ก็ได้ เป็นค่าเริ่มต้นของ accumulator
- มันจะทำการวน element แต่ละตัว
- แล้วนำ callback's value ที่ได้ keep ไว้ที่ accumulator
- วนไป element ถัดไป แล้วทำ process แบบเดิมซ้ำจนครบทุก element
- value ที่ได้คือ value ที่ถูกเก็บสะสมไว้เรื่อยๆใน accumulator
- Initial value of accumulator ถ้าใส่ก็จะมี accumulator เริ่มต้นแล้วเริ่มวน element ตัวแรก
- Initial value of accumulator ถ้าไม่ใส่ accumulator เริ่มต้นก็จะคือ element ตัวแรก แล้วเริ่มวน element ตัวที่สอง

```
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue; // callback's value
}, 0); // Initial value of accumulator is set to 0

console.log(sum); // 15
```

## `Function expression`

- function without a name (`anonymous function`)
- function expression is assigned to a variable
- After the function has been stored in a variable, the variable can be used as a function
- One advantage of function expressions is that they can be defined and used only when needed
- จะต่างกับ function ปกติตรง
  - function ปกติประกาศที่ไหนก็ได้(`ก่อนหรือหลังเรียกใช้`) สามารถเรียกใช้ได้ทุกที่(`ก่อนหรือหลังที่ประกาศ`)
  - expression function จะเรียกใช้ได้ต้อง เรียกใช้หลังประกาศ (`เป็น variable ถ้าไปเรียกใช้ก่อนที่ประกาศ มันจะไม่รู้จัก`)

```
let greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Alice"));  // Outputs: Hello, Alice!
```

## `Arrow function expression`

- การเขียน expression function แบบย่อ (`Javascript ES6`)

```
// normal expression function
let addExpressionFunction = function(a,b) {
  return a + b
}
console.log(addExpressionFunction(1, 2));

// arrow expression function
let addArrowFunction = (a, b) => a + b;
console.log(addArrowFunction(1, 2));
```

## `Shuffle array`

```
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function shuffle(array) {
  let currentIndex = array.length;

  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * array.length);
    currentIndex -= 1;

    let temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
}

shuffle(cards);

console.log(cards);
```

## `Nested function`

- Functions inside other functions. Outer functions have access to inner functions.
- Inner functions are "hidden" from outside. used in closures

```
let userName = "Bro";
let userInbox = 0;

login();

function login() {
  displayUserName();
  displayUserInbox();

  function displayUserName() {
    console.log(`Welcome ${userName}`);
  }
  function displayUserInbox() {
    console.log(`You have ${userInbox} new messages`);
  }
}
```

## `Closure`

- we have an outer function and an inner function. The inner function has access to its own scope and the scope of the outer function due to JavaScript's scope chaining.
- when the outer function executes and ends, its scope usually goes away. But if a closure (the inner function) is created inside that outer function, the closure will keep the outer function's scope alive so it can access it even after the outer function ends.

```
function outerFunction() {
  let outerVariable = 'I am outside!';

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable inside inner function
  }

  return innerFunction;
}

let closureFunction = outerFunction();
closureFunction(); // logs: 'I am outside!'
```

## `Map`

- object that holds key-value pairs of any data type

```
const store = new Map([
  ["t-shirt", 20],
  ["jeans", 30],
  ["socks", 10],
  ["underwear", 50],
]);

store.get("t-shirt"); // get value by key
store.set("hat", 40); // add value with new key
store.delete("hat"); // delete value with key
console.log(store.has("underwear")); // check key is exist?
console.log(store.size); // get amount of value in Map

store.forEach((value, key) => console.log(`${key} $${value}`));
```

## `Object`

- A group of properties and methods
- properties = what an object has
- methods = what an object can do
- use (`.`) or (`[name of property or method]`) to access properties/methods

```
const car1 = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log("You drive the car");
  },
  brake: function () {
    console.log("You step on the brakes");
  },
};
const car2 = {
  model: "Corvette",
  color: "blue",
  year: 2024,

  drive: function () {
    console.log("You drive the car");
  },
  brake: function () {
    console.log("You step on the brakes");
  },
};

console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();
car1.brake();

console.log(car2.model);
console.log(car2.color);
console.log(car2.year);
car2.drive();
car2.brake();
```

## `This keyword`

- this => reference to a particular object. the object depends on the immediate context

```
const car1 = {
  model: "Mustang",
  color: "red",
  year: 2023,

  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
};
const car2 = {
  model: "Corvette",
  color: "blue",
  year: 2024,

  drive: function () {
    console.log(`You drive the ${this.model}`);
  },
};

car1.drive();
car2.drive();
```

## `Class`

- a blueprint for creating objects. define what properties and methods they have.use a constructor for unique properties

```
class Player {
  score = 0;

  pause() {
    console.log("You paused the game");
  }
  exit() {
    console.log("You exited the game");
  }
}

const player1 = new Player();
const player2 = new Player();
const player3 = new Player();
const player4 = new Player();

player1.score += 1;

console.log(player1.score);
console.log(player2.score);

player1.pause();
player2.exit();
```

## `Constructure`

- a special method of a class, accepts arguments and assigns properties

```
class Student {
  constructor(name, age, gpa) {
    this.name = name;
    this.age = age;
    this.gpa = gpa;
  }
  study() {
    console.log(`${this.name} is studying`);
  }
}

const student1 = new Student("Spongebob", 30, 3.2);
const student2 = new Student("Patrick", 35, 1.5);
const student3 = new Student("Sandy", 27, 4.0);

console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student2.study();

console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student3.study();
```

## `Static`

- belongs to the class, not the objects.
- properties: useful for caches, fixed-configuration
- methods: useful for utility functions
- ถึงแม้เราจะ instance object จาก class ที่มี static เราก็ไม่สามารถ access static ได้ เนื่องจาก static เป็นของ class (`instance object จาก class เข้าถึงได้ทุก property,method ยกเว้น static`)

```
class Car {
  static numberOfCars = 0;

  constructor(model) {
    this.model = model;
    Car.numberOfCars += 1;
  }
  static startRace() {
    console.log("3...2...1...GO!");
  }
}

const car1 = new Car("Mustang");
const car2 = new Car("Corvette");
const car3 = new Car("BMW");

console.log(Car.numberOfCars);
Car.startRace();
```

## `Inheritance`

- inheritance = a child class can inherit all the methods and properties from another class
- เป็นการสืบทอด class อื่น ทำให้มี property,method ของ class ที่สืบทอดมา แล้วยังสามารถเพิ่มความสามารถ(`property,method`) เฉพาะที่ต้องการได้

```
class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping`);
  }
}

class Rabbit extends Animal {
  name = "rabbit";

  run() {
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal {
  name = "fish";

  swim() {
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal {
  name = "hawk";

  fly() {
    console.log(`This ${this.name} is flying`);
  }
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();
rabbit.sleep();
rabbit.run();
```

## `Super keyword`

- super = Refers to the parent class. Commonly used to invoke constructor of a parent class
- invoke constructor มันจะ ref parent class เพื่อให้สามารถ access property,method ของ parent class ได้

```
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
class Rabbit extends Animal {
  constructor(name, age, runSpeed) {
    super(name, age);
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal {
  constructor(name, age, swimSpeed) {
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal {
  constructor(name, age, flySpeed) {
    super(name, age);
    this.flySpeed = flySpeed;
  }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 2, 80);
const hawk = new Hawk("hawk", 3, 200);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
```

## `Getter & Setter`

- get = binds an object property to a function when that property is accessed
- set = binds an object property to a function when that property is assigned a value

```
class Car {
  constructor(power) {
    this._gas = 25;
    this._power = power;
  }
  get power() {
    return `${this._power}hp`;
  }
  get gas() {
    return `${this._gas}L (${(this._gas / 50) * 100}%)`;
  }
  set gas(value) {
    if (value > 50) {
      value = 50;
    } else if (value < 0) {
      value = 0;
    }
    this._gas = value;
  }
}

let car = new Car(400);

car.gas = 100;

console.log(car.power);
console.log(car.gas);
```

## `Object as argument`

- ส่ง object เป็น argument เข้าไปใน function

```
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");

changeColor(car3, "gold");
displayInfo(car3);

function displayInfo(car) {
  console.log(car.model);
  console.log(car.year);
  console.log(car.color);
}
function changeColor(car, color) {
  car.color = color;
}
```

## `Array object`

- array ของ object เหมือน array ของ data type อื่นๆ

```
class Car {
  constructor(model, year, color) {
    this.model = model;
    this.year = year;
    this.color = color;
  }
  drive() {
    console.log(`You drive the ${this.model}`);
  }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "blue");
const car3 = new Car("Lambo", 2022, "yellow");
const car4 = new Car("Ferrari", 2025, "white");

const cars = [car1, car2, car3, car4];

console.log(cars[0].model);
console.log(cars[1].model);
console.log(cars[2].model);

startRace(cars);

function startRace(cars) {
  for (const car of cars) {
    car.drive();
  }
}
```

## `Anonymous object`

- object without name,not directly referenced,less syntax. no need for unique names
- คือ object ที่ instance แต่ไม่ได้ assign ให้ value
- ซึ่งจริงๆ มันก็คือ object นั่นแหละ result ไม่ได้ต่างจาก object ปกติเลย

```
class Card {
  constructor(value, suit) {
    this.value = value;
    this.suit = suit;
  }
}

// array of Anonymous object
let cards = [
  new Card("A", "Hearts"), //Anonymous object
  new Card("A", "Spades"),
  new Card("A", "Diamonds"),
  new Card("A", "Clubs"),
  new Card("2", "Hearts"),
  new Card("2", "Spades"),
  new Card("2", "Diamonds"),
  new Card("2", "Clubs"),
];

cards.forEach((card) => console.log(`${card.value} ${card.suit}`));
```
