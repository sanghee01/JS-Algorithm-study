/**
 * 연속 부분수열 1
 * N개의 수로 이루어진 수열이 주어집니다.
 * 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
 * 만약 N=8, M=6이고 수열이 다음과 같다면 1 2 1 3 1 1 1 2
 * 합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.
 */

function solution(m, arr) {
  let result = 0;
  let n = arr.length - 1;

  let [left, right] = [0, 0];
  let sum = arr[0];

  // left 인덱스가 배열 끝에 닿을 때 종료.
  while (left < n) {
    if (m === sum) {
      result++;
    }
    // m 이 합의 값보다 크고, right 인덱스가 배열의 끝에 닿지않을 때,
    // right 인덱스 다음 값을 더한다.
    if (m > sum && right < n) {
      sum += arr[++right];
    } else {
      sum -= arr[left++];
    }
  }
  return result;
}

/**
 * 정답지 풀이
 */

function solution2(m, arr) {
  let [answer, lt, sum] = [0, 0, 0];
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++;
    }
  }
  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
