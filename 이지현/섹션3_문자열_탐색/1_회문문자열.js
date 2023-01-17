function solution(str) {
    let reversed = str.toLowerCase().split('').reverse().join('')
    return str.toLowerCase() === reversed ? 'YES' : 'NO';
  }
  
  console.log(solution("gooG"));
  