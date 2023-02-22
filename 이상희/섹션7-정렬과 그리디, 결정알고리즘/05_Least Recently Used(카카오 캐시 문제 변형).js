function solution(size, arr) {
  const cach = [];

  for (let i = 0; i < arr.length; i++) {
    if (cach.includes(arr[i])) {
      cach.unshift(arr[i]);
      cach.splice(cach.indexOf(arr[i]), 1);
    } else {
      if (cach.length > size - 1) cach.pop();
      cach.unshift(arr[i]);
    }
  }

  return cach;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
