function solution(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]), [1, 2, 3, 3, 5, 6, 7, 9]);
