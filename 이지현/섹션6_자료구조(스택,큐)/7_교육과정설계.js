function solution(must, plan) {
  let answer = 'YES';
  let queue = must.split('');
  for (let course of plan) { 
    if (queue.includes(course)) {
      if (course !== queue.shift()) {
        answer = 'NO'
      }
    }
  }
  if (queue.length > 0) answer = "NO"
  return answer
}

const must = 'CBA';
const plan = 'CBDAGE';
console.log(solution(must, plan));

// const must = 'CBA';
// const plan = 'GEFIES';
// console.log(solution(must, plan));