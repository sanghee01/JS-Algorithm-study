function count(songs, capacity){
    let cnt=1, sum=0;
    for(let x of songs){
        if(sum+x > capacity){
            cnt++;
            sum=x;
        }
        else sum+=x;
    }
    return cnt;
}

function solution(m, songs){
    let answer;
    // 최소 범위
    let lt=Math.max(...songs);
    // 최대 범위
    let rt=songs.reduce((a, b)=>a+b, 0);
    while(lt<=rt){
        // 최소, 최대 범위의 중간
        let mid=parseInt((lt+rt)/2);
        if(count(songs, mid)<=m){
            answer=mid;
            rt=mid-1;
        }
        else{
            lt=mid+1;
        }
    } 
    return answer;
}    


console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]))