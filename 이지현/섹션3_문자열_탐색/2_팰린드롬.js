function solution(str) {
    let filtered = str.replace(/[^a-zA-Z]/gi, '').toLowerCase();
    let reversed = filtered.toLowerCase().split('').reverse().join('')
    return filtered === reversed ? 'YES' : 'NO'
  }
  
  console.log(solution("found7, time: study; Yduts; emit, 7Dnuof"));
  