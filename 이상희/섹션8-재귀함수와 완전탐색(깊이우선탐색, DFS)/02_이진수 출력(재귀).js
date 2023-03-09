function solution(n) {
  let answer = "";
  function DFS(n) {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2)); // 몫으로 넘어감
      answer += n % 2; // 스택에서 나오면서 호출(스택의 상단부터)
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
