function solution(size, tasks) {
  const cacheMemory = new Array(size).fill(0);

  const isCacheMiss = (task) => {
    return cacheMemory.indexOf(task) < 1;
  };
  const getCacheHitIndex = (task) => {
    return cacheMemory.indexOf(task);
  };

  tasks.map((task) => {
    if (isCacheMiss(task)) {
      cacheMemory.unshift(task);
      cacheMemory.pop();
    } else {
      cacheMemory.splice(getCacheHitIndex(task), 1);
      cacheMemory.unshift(task);
    }
  });

  return cacheMemory;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr));
