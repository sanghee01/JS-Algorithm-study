function solution(arr){
    for(let i = 0 ; i < arr.length -1; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                let val = arr[i];
                arr[i] = arr[j];
                arr[j] = val;
            }
        }
    }
    return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]))