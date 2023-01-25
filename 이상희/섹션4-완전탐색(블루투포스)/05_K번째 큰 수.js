function solution(n, k, card) {
  let answer;
  let sum = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        sum.push(card[i] + card[j] + card[k]);
      }
    }
  }
  sum.sort(function (a, b) {
    return b - a;
  });

  let cnt = 1;
  for (let i = 1; i < 50; i++) {
    if (sum[i] !== sum[i - 1]) cnt++;
    if (cnt === k) {
      answer = sum[i];
      break;
    }
  }
  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));

// 강사 풀이
// set: 중복을 제거하는 자료구조, sort 제공하지 않아서 배열화 해야함
function solution2(n, k, card) {
  let answer;
  let tmp = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }
  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];
  return answer;
}
