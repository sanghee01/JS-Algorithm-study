function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  function DFS(L, sum) {
    if (sum > c) return; // 무게 제한 - 재귀 실행 x
    if (L === n) {
      answer = Math.max(answer, sum); // 이전 계산 답보다 더 크다면 재할당(업데이트)
    } else {
      DFS(L + 1, sum + arr[L]); // 태운 경우
      DFS(L + 1, sum); // 태우지 않은 경우
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
