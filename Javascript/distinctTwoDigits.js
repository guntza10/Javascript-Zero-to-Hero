const S = "15:15:00";
const T = "15:15:12";
// const S = "21:00:21";
// const T = "23:22:23";
function solution(S, T) {
  const convertToSecond = (time) => {
    const [hour, minute, second] = time.split(":").map(Number);
    return hour * 3600 + minute * 60 + second;
  };

  const convertToTime = (second) => {
    const hours = Math.floor(second / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((second % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (second % 60).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}`;
  };

  const isMostTwoDistinctDigit = (time) => {
    const twoDistinctDigitTime = new Set(time.replace(/:/g, ""));
    return twoDistinctDigitTime.size <= 2;
  };

  const startTime = convertToSecond(S);
  const endTime = convertToSecond(T);
  let mostTwoDistinctStoreArr = [];
  for (let current = startTime; current <= endTime; current++) {
    const time = convertToTime(current);
    const isDistinctTwodigit = isMostTwoDistinctDigit(time);
    if (isDistinctTwodigit) {
      mostTwoDistinctStoreArr.push(time);
    }
  }

  console.log("mostTwoDistinctStoreArr", mostTwoDistinctStoreArr);
  console.log("length", mostTwoDistinctStoreArr.length);
  return mostTwoDistinctStoreArr;
}

solution(S, T);
