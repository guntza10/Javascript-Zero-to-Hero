let A = [1, 1, 2, 3, 3];
let K = 3;
// let A = [1, 1, 3];
// let K = 2;

function solution(A, K) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    if (A[i] + 1 < A[i + 1]) return false;
  }
  if (A[0] != 1 && A[n - 1] != K) return false;
  else return true;
}
// solve: check ว่ามันเป็นลำดับมั้ย
function solveSolution(A, K) {
  var n = A.length;
  for (var i = 0; i < n; i++) {
    /*
      วนลูปแต่ละตัวเช็คว่า +1 แล้วน้อยกว่าตัวต่อไปมั้ย
      -> น้อยกว่าแสดงว่า มีลำดับที่หายไป
      -> ถ้าเท่ากับ(ลำดับถัดไปที่ซ้ำกับตัวเอง) หรือ มากกว่า(ลำดับถัดไปที่ต่อจากตัวเอง) แสดงว่ามีลำดับต่อไป
     */
    if (A[i] + 1 < A[i + 1]) {
      return false;
    }
  }
  /*
      - เช็คว่าตัวแรกไม่เป็น 1 ก็ผิด เพราะลำดับต้องเริ่มจาก 1
      - เช็คว่าตัวสุดท้ายต้องเท่ากับ K เพราะ ลำดับมันคือ 1-K
  */
  if (A[0] != 1 || A[n - 1] != K) return false;
  else return true;
}

const result = solution(A, K);
console.log("result", result);
