function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = 0;
  let p2 = 0;
  while (p1 < n) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1++]);
      p2 = 0;
    } else {
      p2++;
      if (p2 > m) {
        p1++;
        p2 = 0;
      }
    }
  }
  answer.sort((a, b) => a - b);

  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

// 강사 풀이 : 먼저 두 배열 각각 오름차순 정렬하고 풀음
function solution2(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}
