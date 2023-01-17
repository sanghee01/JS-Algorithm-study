function solution(str) {
    let arr = [];
    str.split('').forEach(element => {
        if (!isNaN(element)) {
            arr.push(element)
        }
    })
    return Number(arr.join(''));
  }
  
  console.log(solution("g0en2T0s8eSoft"));
  