function solution(arr) {
  let answer = [];
  let order = [];
  let array = arr.slice();

  // 오름차순으로 정렬
  for (let i = 0; i < arr.length; i++) {
    order.push(Math.max(...array));
    array.splice(array.indexOf(Math.max(...array)), 1); // 해당 값 지우기
  }

  // 순위 매기기
  for (let i = 0; i < arr.length; i++) {
    answer.push(order.indexOf(arr[i]) + 1);
  }

  return answer;
}

function solution2(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1); // 길이를 n, 다 1로 초기화한 배열
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }
  return answer;
}

let arr = [87, 92, 92, 100, 76];
console.log(solution2(arr));
