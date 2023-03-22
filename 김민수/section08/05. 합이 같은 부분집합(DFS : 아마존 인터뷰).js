function solution(arr){
  let flag = false;
  // 전체 arr의 합계
  let total = arr.reduce((a, b)=>a+b, 0);
  // L => 현재 더한 index의 갯수
  function DFS(size, sum){    
    if(flag) return;
    if(size === arr.length){
      if((total-sum)===sum){
        flag = true;
      }
    }else{
      DFS(size+1, sum+arr[size]);
      DFS(size+1, sum);
    }
  }
  DFS(0, 0);
  return flag ? "YES" : "NO" ;
}

console.log(solution([1 ,3 ,5 ,6 ,7 ,10]))

// 풀이
// dfs(0 0)
//   dfs(1 1)
//     dfs(2 4)
//       dfs(3 9)
//         dfs(4 15)
//           dfs(5 22)
//             dfs(6 32) => {1,3,5,6,7,10}
//             dfs(6 22) => {1,3,5,6,7}
//           dfs(5 15)
//             dfs(6 25) => {1,3,5,6,10}
//             dfs(6 15) => {1,3,5,6}
//         dfs(4 9)
//           dfs(5 16)
//             dfs(6 26) => {1,3,5,7,10}
//             dfs(6 16) => {1,3,5,7} => flag = true
//           dfs(5 9)
//       dfs(3 4)
//     dfs(2 1)
//   dfs(1 0)
