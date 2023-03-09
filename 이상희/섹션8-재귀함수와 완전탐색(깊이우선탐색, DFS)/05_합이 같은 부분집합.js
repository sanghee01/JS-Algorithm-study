function solution(arr) {
  let answer = "NO";
  let flag = 0;
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;
  function DFS(L, sum) {
    if (flag) return; // 답 발견하면 끝 - 스택에 남아있던 애들 다 return

    // 종착점
    if (L === n) {
      // 합이 같으면 끝
      if (total - sum === sum) {
        answer = "YES";
        flag = 1;
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 원소로 사용
      DFS(L + 1, sum); // 원소로 사용 안함
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));
