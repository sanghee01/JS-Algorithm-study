function solution(arr){
  let result = '';
  for(let i = 0; i < arr.length; i++){
    // arr을 돌면서 각 인덱스를 filter로 이상인 값들의 길이를 리턴한 뒤, 0부터 시작이기에 +1 을 해준다.
    result += arr.filter(e => e > arr[i]).length+1;
  }
  return result
}

// console.log(solution([87, 89, 92, 100, 76]),4,3,2,1,5)
console.log(solution([92, 93, 92, 92, 76]),2,1,2,2,5)
