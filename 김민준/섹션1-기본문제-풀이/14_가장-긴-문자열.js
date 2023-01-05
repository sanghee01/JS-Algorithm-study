function solution(N, stringList) {
  return stringList.sort((a, b) => a.length - b.length).at(-1);
}

const N = 5;
const stringList = ['teacher', 'time', 'student', 'beautiful', 'good'];
const result = solution(N, stringList);
console.log(result);
