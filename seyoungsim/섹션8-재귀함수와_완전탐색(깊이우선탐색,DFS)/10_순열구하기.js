/**
 * 순열 구하기
 *
 * 10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
 *
 * 첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다. 두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.
 * 첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다. 출력순서는 사전순으로 오름차순으로 출력합니다.
 */

// for문을 두번 돌려서 해결. 정답지에 비해 많이 느린 속도를 가짐.
function solution(m, arr) {
  const n = arr.length;
  function DFS(el) {
    for (let i = 0; i < n; i++) {
      if (arr[i] === el) continue;
      console.log(el, arr[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    DFS(arr[i]);
  }
  console.log(n * m);
}

let arr = [3, 6, 9];
console.log(solution(2, arr));

// 정답지. N과 M의 갯수만큼 배열을 만든 뒤, 0/1로 방문 유무를 체크한다.
// 총 N만큼의 포문을 돌되, 한 번 돌때 트리레벨 2까지 만든 후 3에서 앞의서 만들어진 노드를 배열에 넣는다.
// function solution(m, arr) {
//   let answer = [];
//   n = arr.length;
//   let ch = Array.from({ length: n }, () => 0);
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp[L] = arr[i];
//           DFS(L + 1);
//           ch[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

// let arr = [3, 6, 9];
// console.log(solution(2, arr));
