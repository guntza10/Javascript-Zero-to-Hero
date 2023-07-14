// arrow function expression = compact alternative to a traditional function expression
//      =>

const grades = [100, 50, 90, 60, 80, 70];

grades.sort((x, y) => y - x);
grades.forEach((element) => console.log(element));
