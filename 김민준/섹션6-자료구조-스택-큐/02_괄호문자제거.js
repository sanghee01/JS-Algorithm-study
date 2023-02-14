function solution(INPUT) {
  let stack = [];

  let cur = '';
  for (let i = 0; i < INPUT.length; i += 1) {
    cur = INPUT[i];

    if (cur === ')') {
      while (true) {
        if (stack.at(-1) === '(') {
          stack.pop();
          break;
        }
        stack.pop();
      }
    } else {
      stack.push(cur);
    }
  }

  let result = stack.join('');
  return result;
}

const INPUT = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
const ANSWER = solution(INPUT);
console.log(ANSWER);
