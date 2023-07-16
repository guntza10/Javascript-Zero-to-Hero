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
