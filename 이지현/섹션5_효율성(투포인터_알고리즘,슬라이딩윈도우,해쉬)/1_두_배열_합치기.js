function solution(value) {
    let [arr1, arr2] = value;
    return [...arr1, ...arr2].sort((a, b) => a - b);
  }

  const value = [[1,3,5],[2,3,6,7,9]];
  console.log(solution(value));