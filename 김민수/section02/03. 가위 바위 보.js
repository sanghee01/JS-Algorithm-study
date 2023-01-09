function solution(aArr,bArr){
  let result = '';
  for(let i = 0; i < aArr.length; i++){
    // 무승부
    if(aArr[i] == bArr[i]) result += 'D'
    else{
      // a가 이길경우
      if((aArr[i] == 1 && bArr[i] == 3) 
      || (aArr[i] == 2 && bArr[i] == 1) 
      || (aArr[i] == 3 && bArr[i] == 2)) result += 'A'      
      // b가 이길경우
      else result += 'B'
    }
  }
  return result;
}

console.log(solution([2,3,3,1,3],[1,1,2,2,3]))