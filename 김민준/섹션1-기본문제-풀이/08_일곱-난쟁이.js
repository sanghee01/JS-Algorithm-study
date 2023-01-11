function solution(heightList) {
  let answer = [];
  let sum = heightList.reduce((acc, cur) => acc + cur);
  // 100을 뺐을 때 나머지
  let rest = sum - 100;
  // 총 합 100이 만들어졌을 때, 남는 두 수를 저장할 배열
  let restHeightList = [];

  for(let i=0; i<heightList.length; i+=1) {
    for(let j=i+1; j<heightList.length; j+=1) {
      // 두 수의 합이 나머지 값이라면
      if(heightList[i] + heightList[j] === rest) {
        // 나머지 배열에 그 값들을 넣어줌
        restHeightList.push(heightList[i], heightList[j]);
      }
    }
  }

  // 12명의 키가 담긴 배열에서 나머지 배열에 있지 않은 것들만 filtering
  answer = heightList.filter(el => !restHeightList.includes(el));

  return answer;
}

const heightList = [20, 7, 23, 19, 10, 15, 25, 8, 13];
const result = solution(heightList);
console.log(result);