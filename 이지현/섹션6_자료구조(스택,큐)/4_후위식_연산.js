function solution(value) {
    let arr = [];
    let operators = ['+','-','*','/'];

    for (let str of value) {
      if (!operators.includes(str)) { // 숫자이면 (operator가 아니면)
        arr.push(Number(str));
      } else {
        let rightNum = arr.pop();
        let leftNum = arr.pop();
        if (str === '+') {
          arr.push(leftNum + rightNum)
        } else if (str === '-') {
          arr.push(leftNum - rightNum)
        } else if (str === '*') {
          arr.push(leftNum * rightNum)
        } else if (srt === '/') {
          arr.push(leftNum / rightNum)
        }
      }
    }
    return arr[0]
  }

  const value = '352+*9-';
  console.log(solution(value));