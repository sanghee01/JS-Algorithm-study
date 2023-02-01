function solution(num, vote) {
    let answer;
    let hash = new Map();
    
    for (let x of vote) {
      if (hash.has(x)) hash.set(x, hash.get(x) + 1);
      else hash.set(x, 1); 
    }
    
    let max = 0;
    for (let [key, value] of hash) {
      if (value > max) {
        max = value;
        answer = key;
      }
    }
    return answer;
  }

const number = 15;
const vote = 'BACBACCACCBDEDE';
console.log(solution(number, vote));