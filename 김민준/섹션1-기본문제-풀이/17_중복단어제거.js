function solution(N, stringList) {
  let answer = [];
  let set = new Set(stringList);

  answer = [...set];

  return answer;
}

const N = 5;
const stringList = ['good', 'time', 'good', 'time', 'student'];
const result = solution(N, stringList);
console.log(result);