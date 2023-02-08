function solution(num, target) {
  let answer = 0;
  let queue = Array.from({length: num}, (value, index) => index + 1);
  while(queue.length) {
    for (let i = 1; i < target; i += 1) {
      queue.push(queue.shift())
    }
    queue.shift();
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }
  return answer;
}

const num = 8;
const target = 3; 
console.log(solution(num, target));
