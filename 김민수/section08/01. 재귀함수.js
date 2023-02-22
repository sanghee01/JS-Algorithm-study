function solution(n){
    return n === 1 ? 1 : n + solution(n - 1 );
}
console.log(solution(3))