function solution(arr){
    arr = arr.sort((a, b) =>  {return a[0] - b[0]})
    let [max, cnt, time] = [0,0,0];
    for(let i = 0 ; i < arr.length - 1; i++){
        time = arr[i][1];
        cnt = 1;
        for(let j = 0; j < arr.length; j++){
            if(time <= arr[j][0] && i != j ){
                time = arr[j][1];
                cnt += 1;
            }
        }
        if(max < cnt) max = cnt;
    }
    return max
}

// console.log(solution([[1 ,4],[2, 3],[3 ,5],[4 ,6],[5, 7]]), 3)
console.log(solution([[3, 3], [1, 3], [2, 3]]), 2)