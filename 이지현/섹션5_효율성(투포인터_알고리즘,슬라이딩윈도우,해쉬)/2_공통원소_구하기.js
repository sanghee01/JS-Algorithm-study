function solution(value) {
    let [arr1, arr2] = value;
    return arr1.filter(element => arr2.includes(element)).sort((a,b) => a-b);
  }

  const value = [[1,3,9,5,2],[3,2,5,7,8]];
  console.log(solution(value));