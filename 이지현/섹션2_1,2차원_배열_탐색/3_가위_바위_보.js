function solution(num, a, b) {
  let answer = "";

  for (let i = 0; i < num; i += 1) {
    // 1: 가위, 2: 바위, 3: 보
    if (a[i] === b[i]) {
      answer += "D" + "\n";
    } else if (a[i] === 1 && b[i] === 3) {
      answer += "A" + "\n";
    } else if (a[i] === 2 && b[i] === 1) {
      answer += "A" + "\n";
    } else if (a[i] === 3 && b[i] === 2) {
      answer += "A" + "\n";
    } else {
      answer += "B" + "\n";
    }
  }
  return answer;
}

const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];
console.log(solution(5, a, b));
