let N = 15958;
// N = -5859;
// N = -5000;
function solution(N) {
  let numberString = N.toString();
  let maxValue = -999996;
  for (let i = 0; i < numberString.length; i++) {
    if (numberString[i] === "5") {
      let numberPossible = `${numberString.slice(0, i)}${numberString.slice(
        i + 1
      )}`;

      if (Number(numberPossible) > maxValue) maxValue = Number(numberPossible);
    }
  }
  return maxValue === -0 ? 0 : maxValue;
}

var result = solution(N);
console.log("result", result);
