/**
 * 멘토링. 멘토와 멘티가 존재.
 * 멘토는 언제나 멘티보다 등수가 앞서야한다.
 * 멘토와 멘티로 짝을 만들 수 있는 총 가지수를 출력하라.
 * ex) n이 4면, 학생수는 4명. M이 3이면, 3번의 문제점수를 반환한다.
 *
 * [3, 4, 1, 2],
 * [4, 3, 2, 1],
 * [3, 1, 4, 2],
 *
 * 위와 같이 M번의 결과가 있을 때, 앞에서부터 1등~4등인 학생의 번호를 적음.
 * 3번과 4번 학생이 1등을 해봤다.
 *
 * 3번은 1번과 2번의 학생보다 등수가 앞서기에 멘토 멘티가 가능. 2가지.
 * 4번은 2번보다 등수가 앞서기에 멘토 멘티가 가능. 1가지.
 */

// 동일한 array가 아닌지 비교하는 함수. array들이 동일하지 않을 때 true를 반환한다.
function isNotSameArray(prevArray, nextArray) {
  return JSON.stringify(prevArray) !== JSON.stringify(nextArray);
}

function solution(tests) {
  let result = 0;
  const students = Array.from({ length: 4 }, (_, i) => i + 1);

  // 학생수만큼 포문을 돈다.
  students.forEach((currentStudent) => {
    // 현재 학생을 제외한 학생들 리스트를 구한다..
    const studentsExceptCurrentStudent = students
      .filter((student) => student !== currentStudent)
      .sort();

    // 현재 학생보다 더 앞선 등수를 가진 학생들의 리스트를 구한다.
    const studentsAheadOfCurrentStudentSet = tests.reduce((accu, curr) => {
      return new Set([...accu, ...curr.slice(0, curr.indexOf(currentStudent))]);
    }, new Set());

    const studentsAheadOfCurrentStudent = [
      ...studentsAheadOfCurrentStudentSet,
    ].sort();

    // 만약 자신을 제외한 학생들이 전부 자신보다 앞선 등수에 있었다면, 멘토 멘티가 되지 않는다고 생각한다.
    if (
      isNotSameArray(
        studentsExceptCurrentStudent,
        studentsAheadOfCurrentStudent
      )
    ) {
      // 자신보다 앞서지 않는 학생들의 수를 더한다.
      result += studentsExceptCurrentStudent.filter(
        (num) => ![...studentsAheadOfCurrentStudent].includes(num)
      ).length;
    }
  });

  return result;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr)); // 3

/**
 * 정답지 풀이
 */

// function solution(test) {
//   let answer = 0;
//   m = test.length;
//   n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// }

// let arr = [
//   [3, 4, 1, 2],
//   [4, 3, 2, 1],
//   [3, 1, 4, 2],
// ];
// console.log(solution(arr));
