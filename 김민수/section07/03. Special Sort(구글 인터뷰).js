function solution(arr){
    let [aArr, bArr] = [arr.filter( e => e > 0), arr.filter( e => e < 0)];
    return [...bArr , ...aArr];
}

console.log(solution([1 ,2 ,3 ,-3 ,-2 ,5 ,6 ,-6]))