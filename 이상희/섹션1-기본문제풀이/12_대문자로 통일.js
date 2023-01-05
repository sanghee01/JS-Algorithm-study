function solution(s) {
  return s.toUpperCase();
}

function solution2(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) {
      answer += x.toUpperCase();
    } else {
      answer += x;
    }
  }
  return answer;
}

function solution3(s) {
  let answer = "";
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else {
      answer += x;
    }
  }
  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution3(str));
