function solution(day, cars) {
  let answer = 0;
  
  cars.forEach((carNum) => {
    let oneDigitOfCarNum = carNum % 10;
    if (day === oneDigitOfCarNum) answer += 1;
  });

  return answer;
}
  
let arr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(3, arr)); // 3
    
let arr2 = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr2)); // 3