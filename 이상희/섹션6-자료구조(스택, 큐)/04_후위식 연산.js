function solution(s) {
  let answer;
  let lt, rt;
  const stack = [];

  for (x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      rt = stack.pop();
      lt = stack.pop();
      if (x === "+") stack.push(lt + rt);
      else if (x === "-") stack.push(lt - rt);
      else if (x === "*") stack.push(lt * rt);
      else if (x === "/") stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution(str));
