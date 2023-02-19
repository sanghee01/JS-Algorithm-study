/**
 * 부분집합 구하기(DFS)
 *
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.
 *
 * 아래와 같은 트리구조로 부분집합을 구할 수 있다. 왼쪽 노드는 부분집합을 포함한다는 의미이며, 오른쪽 노드는 부분집합에 포함되지 않는다는 의미를 갖는다.
 *                                   1
 *                          2                 2
 *                     3        3        3         3
 *                  4     4  4     4  4     4  4      4
 *
 * 왼쪽노드들, 1, 2, 3, 4 에 도착하면, 4 노드에서는 부분집합에 포함시키겠다는 1, 2, 3을 확인가능하며 4 노드에서 1, 2, 3 원소를 출력한다.
 * 만약 오른쪽 노드 2에서 시작해서, 1, 오른쪽 노드 2, 2 노드의 왼쪽 노드인 3, 4 로 도착하게 되면, 4 노드에서는 오른쪽 2 노드는 제외되고 2 노드에서 왼쪽 노드들인 2, 3 만 출력을 하게 된다.
 *
 * 그래서 최종적으로 각 4 노드들에서는
 * 1 2 3
 * 1 2
 * 1 3
 * 1
 * 2 3
 * 2
 * 3
 *
 * 을 출력한다. 공집합은 제외한다.
 *
 */

function solution(n) {
  let answer = [];
  // 0, 1, 2, 3. 총 4개의 배열을 0의 원소로 초기화시킨다.
  // 원소가 1이면, 부분집합에 포함되었다는 체크가 된 표시. 0이면 포함안되었다는 표시.
  let checkedList = Array.from({ length: n + 1 }, () => 0);

  function DFS(el) {
    // 원소인 el 이 n 보다 1 클 때, 부분 집합을 만드는 트리 구조가 4인 자식 노드까지 다 닿았다는 의미.
    if (el === n + 1) {
      let tmp = "";

      // 1로 체크된 원소의 인덱스 번호를 tmp에 저장 후, answer 배열에 넣는다.
      for (let i = 1; i <= n; i++) {
        if (checkedList[i] === 1) tmp += i + " ";
      }
      // 공집합은 제외해야 하므로, tmp 문자열이 1 이상인 경우에만 배열에 넣는다.
      if (tmp.length > 0) answer.push(tmp.trim());
    } else {
      // 아래로 뻗는 노드들은 1씩 커진다.
      // 왼쪽 노드는 포함시켜야하니 1로 체크 표시를 한다.
      // 왼쪽 노드들부터 쭉 만들며 1로 체크 표시를 한다.
      checkedList[el] = 1;
      DFS(el + 1);
      // 왼쪽 노드의 DFS 가 끝이나면, 오른쪽 노드들을 쭉 만들며 0으로 표시한다.
      // 오른쪽 노드는 미포함시켜야하니 0으로 체크 표시를 하지 않는다.
      checkedList[el] = 0;
      DFS(el + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(3));
