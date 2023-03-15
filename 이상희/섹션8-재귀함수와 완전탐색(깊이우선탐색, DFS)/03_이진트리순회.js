// 전위 순회
function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " "; // 부모 먼저 출력하고
      DFS(v * 2); // 왼쪽 자식으로 넘어감
      DFS(v * 2 + 1); // 오른쪽 자식
    }
  }
  DFS(n);
  return answer;
}

// 중위 순회
function solution2(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); // 왼쪽 자식 먼저
      answer += v + " "; // 되돌아와서 부모 출력
      DFS(v * 2 + 1); // 오른쪽 자식
    }
  }
  DFS(n);
  return answer;
}

// 후위 순회
function solution3(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      DFS(v * 2); // 왼쪽 자식
      DFS(v * 2 + 1); // 오른쪽 자식
      answer += v + " "; // 되돌아와서 부모 출력
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(1));
