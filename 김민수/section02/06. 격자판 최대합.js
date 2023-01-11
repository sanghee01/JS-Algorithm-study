function solution(arr){
  // N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.
  // => 문제를 잘못파악하여 두 대각선의 합뿐만이 아니라 다른 대각선의 합 또한 생각을 하여서 시간을 버림.
  // => 참고 : 예시의 답) 왼쪽에서 오른쪽 내려오는 대각선 (10, 39, 50, 37, 19)

  let sum = 0;

  // 각 행, 열의 합  
  for(let i = 0; i < arr.length; i++){
    let [row, col] = [0, 0];
    for(let j = 0; j < arr.length; j++){
      row += arr[i][j];
      col += arr[j][i];
    }
    if(sum < row) sum = row;
    if(sum < col) sum = col;
  }
  
  // 두 대각선
  let [left, right, cnt] = [0, 0, 0];
  for(let i = 0; i < arr.length; i++){
    left += arr[i][i];
    right += arr[i][arr.length-cnt];
    cnt += 1;
  }
  if(sum < left) sum = left;
  if(sum < right) sum = right;

  return sum
}

console.log(
  solution(
    [[10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19]]
  ),155
)