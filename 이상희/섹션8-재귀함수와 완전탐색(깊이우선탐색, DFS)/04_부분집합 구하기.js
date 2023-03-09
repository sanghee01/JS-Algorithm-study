function solution(n) {
  let answer = [];
  let ch = Array.from({ length: n + 1 }, () => 0); // 체크 배열 - 1이면 포함, 0이면 포함x
  function DFS(v) {
    if (v === n + 1) {
      // 종착점
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) answer.push(tmp.trim()); // 공집합보다 클 때만
    } else {
      // 두 갈래
      // 포함시킨다
      ch[v] = 1; // 체크
      DFS(v + 1);
      // 포함시키지 않는다
      ch[v] = 0; // 체크 풀음
      DFS(v + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
