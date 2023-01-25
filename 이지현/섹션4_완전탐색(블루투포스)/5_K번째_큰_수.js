function solution(N, K, arr) {
    let sumArr = [];

    for( let i = 0; i < N; i += 1) {
      for (let j = i + 1; j < N; j +=1) {
        for (let m = j + 1; m < N; m += 1 ) {
          sumArr.push(arr[i] + arr[j] + arr[m])      
        }
      }
    }

    let set = new Set(sumArr)
    return Array.from(set).sort((a, b) => b - a)[K - 1];
  }
  
  const N = 10;
  const K = 3;
  const arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  console.log(solution(N, K, arr));