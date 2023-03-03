function solution(a, b){
    let arr1 = a.split('');
    let arr2 = b.split('');
    for(let i = 0; i < b.length; i++){
        if(arr2[i] == arr1[0]) arr1.shift();
    }
    return arr1.length == 0 ? "YES" : "NO"
}

console.log(solution('CBA', 'CBDAGE'))