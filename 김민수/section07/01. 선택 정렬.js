// 선택 정렬
function solution(arr){
    for(let i = 0; i < arr.length; i++){
        let min = arr.indexOf(Math.min(...arr.slice(i, arr.length)));
        let val = arr[i];
        arr[i] = arr[min];
        arr[min] = val;        
    }
    return arr
}
console.log(solution([13, 5, 11, 7, 23, 15]))
