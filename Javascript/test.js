// for test
let A = [1, 2, 3];
A = [-1, -3];
function solution(A) {
  const sortedNumberArr = A.sort((a, b) => a - b);
  console.log("sortedNumberArr", sortedNumberArr);
  let smallestMissingNumber = 1;
  for (let i = 0; i < sortedNumberArr.length; i++) {
    if (sortedNumberArr[i] === smallestMissingNumber) {
      smallestMissingNumber++;
    }
  }
  console.log("smallestMissingNumber", smallestMissingNumber);
  return smallestMissingNumber;
}

solution(A);
