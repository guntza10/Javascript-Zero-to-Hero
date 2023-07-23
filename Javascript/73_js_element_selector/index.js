// document.getElementById() => get an element by id
// document.getElementsByName() => get elements by name
// document.getElementsByTagName() => get elements by tag name
// document.getElementsByClassName() => get elements by class name
// document.querySelector() => get first element by id,name,tag name,class name,attribute
// document.querySelectorAll() => get elements by id,name,tag name,class name,attribute

let element = document.getElementById("myTitle");
element.style.backgroundColor = "lightgreen";

let fruits = document.getElementsByName("fruits");
fruits.forEach((fruit) => {
  if (fruit.checked) {
    console.log(fruit.value);
  }
});

let vegetables = document.getElementsByTagName("li");
vegetables[0].style.backgroundColor = "lightgreen";

let desserts = document.getElementsByClassName("desserts");
desserts[0].style.backgroundColor = "lightgreen";

let element1 = document.querySelector("#myTitle"); // get by id
let element2 = document.querySelector('input[name="fruits"]'); // get by name
let element3 = document.querySelector(".desserts"); // get by class name
let element4 = document.querySelector("li"); // get by tag name
let element5 = document.querySelector("[for]"); // attribute
element.style.backgroundColor = "lightgreen";

let elements1 = document.querySelectorAll("#myTitle"); // get by id
let elements2 = document.querySelectorAll('input[name="fruits"]'); // get by name
let elements3 = document.querySelectorAll(".desserts"); // get by class name
let elements4 = document.querySelectorAll("li"); // get by tag name
let elements5 = document.querySelectorAll("[for]"); // attribute
elements1.forEach((element) => {
  element.style.backgroundColor = "lightgreen";
});
