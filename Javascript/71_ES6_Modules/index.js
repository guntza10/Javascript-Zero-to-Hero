// ********************** index.js **********************
//import {PI, getCircumference, getArea} from "./math_util.js";
import * as MathUtil from "./math_util.js";

console.log(MathUtil.PI);

let circumference = MathUtil.getCircumference(10);
console.log(circumference);

let area = MathUtil.getArea(10);
console.log(area);

// ********************** math_util.js **********************
export const PI = 3.14159;

export function getCircumference(radius) {
  return 2 * PI * radius;
}
export function getArea(radius) {
  return PI * radius * radius;
}
