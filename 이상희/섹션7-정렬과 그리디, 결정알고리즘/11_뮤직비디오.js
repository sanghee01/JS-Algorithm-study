// 답이 유효한지 아닌지 판별하는 이 함수가 중요하다.
function count(songs, capacity) {
  let cnt = 1, // 담을 수 있는 장수
    sum = 0;
  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++; // 잠수 하나 추가하고,
      sum = x; // 현재 값을 sum으로
    } else sum += x;
  }
  return cnt;
}

function solution(m, songs) {
  let answer;
  let lt = Math.max(...songs);
  let rt = songs.reduce((a, b) => a + b, 0);
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(songs, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return answer;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(solution(3, arr));
