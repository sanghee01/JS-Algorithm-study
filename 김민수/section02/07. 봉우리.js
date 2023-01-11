function solution(arr){
  // 왼 오 위 아래를 다 체크 하는 로직에서 i, j 가 가장자리(0이거나 arr.length-1)일 경우를 0으로 처리해서 제외시킴
  let cnt = 0;
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
      let [a,b,c,d] = [100,100,100,100];
      j == arr.length-1 ? a = 0 : a = arr[i][j+1]
      j == 0 ? b = 0 : b = arr[i][j-1]
      i == arr.length-1  ? c = 0 : c = arr[i+1][j]
      i == 0 ? d = 0 : d = arr[i-1][j]
      if(a < arr[i][j] && b < arr[i][j] && c < arr[i][j] && d < arr[i][j]) cnt += 1;
    }
  }
  return cnt;
}

console.log(
  solution(
      [
        [5, 3, 7, 2, 3], 
        [3, 7, 1, 6, 1], 
        [7, 2, 5, 3, 4], 
        [4, 3, 6, 4, 1],
        [8, 7, 3, 5, 2] 
      ]
    ),10
  )