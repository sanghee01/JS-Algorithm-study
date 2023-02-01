/**
 * 두 배열 합치기
 * 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐
 * 출력하는 프로그램을 작성하세요.
 *
 * ex) 입력 [1 3 5], [2 3 6 7 9] / 출력 [1 2 3 3 5 6 7 9]
 */

/**
 * 처음 풀은 풀이. 투 포인트 개념을 어떻게 적용할지 몰라서, Array.prototype.sort() 를 적용.
 * 그러나 시간복잡도가 O(nlogn) 을 가진다.
 */

function solution(N, arr1, M, arr2) {
  return [...arr1, ...arr2].sort();
}

/**
 * 정답지 풀이. 투 포인터를 활용함으로 O(n+m) 을 가진다.
 */
function solution2(n, arr1, m, arr2) {
  let result = [];
  let [p1, p2] = [0, 0];

  // 두개의 포인터가 배열의 끝에 닿기 전까지만 while문을 돈다.
  while (p1 < n && p2 < m) {
    // 두 포인터의 값을 비교할 때, 작은 값을 가진 값을 배열에 추가한다.
    if (arr1[p1] <= arr2[p2]) {
      result.push(arr1[p1++]);
    } else {
      result.push(arr2[p2++]);
    }
  }
  // 아직 배열 끝까지 닿지않은 포인터는 while문으로 끝까지 돌아서 배열에 추가해준다.
  while (p1 < n) {
    result.push(arr1[p1++]);
  }
  while (p2 < m) {
    result.push(arr2[p2++]);
  }

  return result;
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution2(3, a, 5, b)); // [ 1, 2, 3, 3, 5, 6, 7, 9 ]
