// setInterval() = invokes a function repeatedly after no. of milliseconds
//                          asynchronous function (doesn't pause execution)

let count = 0;
let max = window.prompt("Count up to what #?");
max = Number(max);
const myTimer = setInterval(countUp, 1000);

function countUp() {
  count += 1;
  console.log(count);
  if (count >= max) {
    clearInterval(myTimer);
  }
}
