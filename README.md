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

```
// block scope
for (let i = 1; i <= 3; i += 1) {
  console.log(i);
}
console.log(i); // code จะพังเพราะ i เป็น block scope(let) ที่ใช้ได้แค่ใน for loop

// public scope
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
let extraStudents = students % 2;
students = students ** 2;

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
