function solution(arr){ 
  let numArr = arr.filter(e => e % 2 == 1).sort((a,b) => a-b);
  let sum = 0; 
  console.log(numArr.reduce((a,b) => a+b,sum), numArr[0])
  return false;
}

console.log(solution([12 ,77 ,38 ,41 ,53 ,92 ,85]), 256, 41);


