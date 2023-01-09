function solution(arr){
  let nArr = [arr[0]];
  for(let i = 1; i < arr.length; i++){
    if(arr[i-1] < arr[i]) nArr.push(arr[i])
  }
  return nArr
}

console.log(solution([7 ,3 ,9 ,5 ,6 ,12]), [7,9,6,12]);
