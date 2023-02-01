/**
 * 공통원소 구하기
 *
 * A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.
 *
 * 첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
 * 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
 * 세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
 * 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
 * 각 집합의 원소는 1,000,000,000이하의 자연수입니다.
 */

function solution(arr1, arr2) {
  let result = [];
  let [p1, p2] = [0, 0];
  const [n, m] = [arr1.length, arr2.length];

  // 오름차순으로 출력하기 위해, sort를 사용한다.
  const array1 = arr1.sort((a, b) => a - b);
  const array2 = arr2.sort((a, b) => a - b);

  // 두 배열 중,하나의 배열이라도 끝에 닿으면 종료.
  while (p1 < n && p2 < m) {
    // 큰 값을 가진 배열은 다음 인덱스를 가리키도록 수정.
    if (array1[p1] < array2[p2]) {
      p1++;
    }
    if (array1[p1] > array2[p2]) {
      p2++;
    }

    if (array1[p1] === array2[p2]) {
      result.push(array1[p1]);
      p1++;
      p2++;
    }
  }

  return result;
}

let a = [1, 3, 9, 5, 2, 12, 14, 46, 47, 21, 24, 54, 23];
let b = [3, 2, 5, 7, 8, 42, 12, 55, 67, 23, 54, 14];
console.log(solution(a, b)); // [ 2, 3, 5, 12, 14, 23, 54 ]
