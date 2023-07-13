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

x = Math.round(x);
x = Math.floor(x);
x = Math.ceil(x);
x = Math.pow(x, 2);
x = Math.sqrt(x);
x = Math.abs(x);
maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);
x = Math.PI;
```
