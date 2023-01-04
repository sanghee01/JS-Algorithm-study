function solution(str,a){
  let cnt = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase())cnt += 1;
  }
  return cnt;
}

console.log(solution('KoreaTimeGood'),3)