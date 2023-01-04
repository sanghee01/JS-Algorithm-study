function solution(str){
  let val = '';
  for(let i = 0; i < str.length; i++){
    str[i] === str[i].toLowerCase() ? val += str[i].toUpperCase() : val += str[i].toLowerCase();
  }
  return val
}

console.log(solution('StuDY'),'sTUdy')
