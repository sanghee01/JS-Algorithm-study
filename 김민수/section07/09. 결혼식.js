function solution(arr){
    let [aArr, bArr] = [[], []];
    arr = arr.sort((a,b) => {return a[0] - b[0]});
    aArr.push(...arr.map(a => a[0] + 'a'));
    arr = arr.sort((a,b) => {return a[1] - b[1]});
    bArr.push(...arr.map(a => a[1] + 'b'));

    // aArr, bArr 위치 바꾼 이유는 나가는걸 체크를 먼저 해야되서
    let nArr = [...bArr, ...aArr].sort(
        (a, b) => { return  a.substring(0, a.length -1) - b.substring(0, b.length -1)}
    );

    let [cnt, max] = [0, 0];
    for(let i = 0; i < nArr.length; i++){
        let gubun = nArr[i].charAt(nArr[i].length-1);
        gubun == 'a' ? cnt +=1 : cnt -=1;
        if(cnt < 0) cnt = 0;
        if(max < cnt ) max = cnt;
    }
    return max
}

console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]))