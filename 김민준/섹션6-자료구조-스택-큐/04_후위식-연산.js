function calc(num1, op, num2) {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      break;
  }
}

function solution(INPUT) {
  let stack = [];

  let [num1, num2] = [0, 0];
  let op = '';
  INPUT.split('').forEach((el) => {
    if (0 < +el && +el < 10) {
      stack.push(+el);
    } else {
      op = el;
      num2 = stack.pop();
      num1 = stack.pop();

      stack.push(calc(num1, op, num2));
    }
  });

  let result = stack.at(0);
  return result;
}

const INPUT = '352+*9-';
const ANSWER = solution(INPUT);
console.log(ANSWER);
