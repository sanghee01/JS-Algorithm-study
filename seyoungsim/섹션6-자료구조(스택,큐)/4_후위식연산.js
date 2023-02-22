/**
 * 후위식 연산(postfix)
 *
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
 * 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
 *
 * 첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
 * 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.
 */

function solution(str) {
  const stack = [];
  const operator = ["+", "-", "*", "/"];

  [...str].map((char) => {
    if (operator.includes(char)) {
      const last = stack.pop();
      const first = stack.pop();

      let sum = 0;

      switch (char) {
        case "+":
          sum = first + last;
          break;
        case "-":
          sum = first - last;
          break;
        case "*":
          sum = first * last;
          break;
        case "/":
          sum = first / last;
          break;
        default:
          sum = first + last;
      }

      stack.push(sum);
    } else {
      stack.push(Number(char));
    }
  });

  return stack[0];
}

let str = "352+*9-";
console.log(solution(str));

// 정답지 풀이

// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) stack.push(Number(x));
//     else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === "+") stack.push(lt + rt);
//       else if (x === "-") stack.push(lt - rt);
//       else if (x === "*") stack.push(lt * rt);
//       else if (x === "/") stack.push(lt / rt);
//     }
//   }
//   answer = stack[0];
//   return answer;
// }

// let str = "352+*9-";
// console.log(solution(str));
