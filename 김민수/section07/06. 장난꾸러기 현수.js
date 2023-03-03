function solution(arr){
    let nArr = [...arr].sort();
    let val = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] != nArr[i]) val.push(i+1)
    }
    return val
}

// console.log(solution([120 ,125 ,152 ,130 ,135 ,135 ,143 ,127 ,160]), 3, 8)
console.log(solution([120 ,130 ,150 ,150 ,130 ,150]), 3, 5)