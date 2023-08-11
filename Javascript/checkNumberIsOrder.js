let A = [1, 1, 2, 3, 3];
let K = 3;
// let A = [1, 1, 3];
// let K = 2;

function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    if (A[i] + 1 < A[i + 1]) return false;
  }
  if (A[0] != 1 && A[n - 1] === K) return false;
  else return true;
}

const result = solution(A, K);
console.log("result", result);
