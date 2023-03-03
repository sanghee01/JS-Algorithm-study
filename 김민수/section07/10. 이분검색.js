function solution(n, arr){
    let [s, e] = [0, arr.length -1];
    arr.sort((a,b) => a - b);
    
    let val;
    while(s <= e){
        let m = parseInt((s + e) / 2);
        if(arr[m] == n){
            val = m +1 
            break;
        } 
        else if(arr[m] > n) e = m -1;
        else s = m + 1;
    }
    return  val;
}

console.log(solution(32,[ 23 ,87 ,65 ,12 ,57 ,32 ,99 ,81 ]))