function solution(str,a){
  const regex = new RegExp(a, 'g');
  return str.match(regex).length;
}

console.log(solution('COMPUTERPROGRAMMING','R'),3)