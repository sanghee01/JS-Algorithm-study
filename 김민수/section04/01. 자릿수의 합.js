function solution(arr) {
  let [max, num] = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    let val = 0;
    for (let j = 0; j < String(arr[i]).length; j++) {
      val += parseInt(String(arr[i]).charAt(j));
    }
    if (val >= max && arr[i] > num) {
      max = val;
      num = arr[i];
    }
  }
  return num;
}

console.log(solution([128, 460, 603, 40, 521, 137, 123]), 137);
