function solution(INPUT) {
  let stack = [];

  let cur = '';
  let top = '';
  for (let i = 0; i < INPUT.length; i += 1) {
    cur = INPUT[i];
    top = stack.at(-1);

    if (cur === '(') {
      stack.push(cur);
    } else if (cur === ')') {
      if (top === '(') {
        stack.pop();
      } else {
        return 'NO';
      }
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

const INPUT = '(()(()))(()';
const ANSWER = solution(INPUT);
console.log(ANSWER);
