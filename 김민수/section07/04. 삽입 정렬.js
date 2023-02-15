function solution(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i] < arr[j]){
                let val = arr[i];
                arr[i] = arr[j];
                arr[j] = val
            }
        }
    }
    return arr;
}

console.log(solution([11 ,7 ,5 ,6 ,10 ,9]))