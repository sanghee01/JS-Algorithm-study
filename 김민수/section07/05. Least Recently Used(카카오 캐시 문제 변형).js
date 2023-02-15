function solution(n, arr){
    let nArr = [];
    for(let i = 0; i < arr.length; i++){
        let fIndex = nArr.indexOf(arr[i]);
        if(fIndex != -1){
            nArr.splice(fIndex, 1);
            nArr.unshift(arr[i])
        }else{
            if(nArr.length >= n) nArr.pop();
            nArr.unshift(arr[i])
        }
    }
    return nArr
}

console.log(solution(5,[1 ,2 ,3 ,2 ,6 ,2 ,3 ,5 ,7]), 7, 5 ,3 ,2 ,6)
