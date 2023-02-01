function getDuplicateCalculationMap(str) {
  return [...str].reduce((accu, curr) => {
    accu.set(curr, (accu.get(curr) || 0) + 1);
    return accu;
  }, new Map());
}

function changeMapToJson(anagramMap) {
  return JSON.stringify(
    [...anagramMap].sort((a, b) => a[0].localeCompare(b[0]))
  );
}

function solution(sStr, tStr) {
  const kLeng = tStr.length;
  let result = 0;

  const sMap = getDuplicateCalculationMap(sStr.slice(0, kLeng));
  const tMap = getDuplicateCalculationMap(tStr);

  for (let i = kLeng; i <= sStr.length; i++) {
    if (changeMapToJson(tMap) === changeMapToJson(sMap)) {
      result++;
    }
    if (i === sStr.length) break;

    let nextChar = sStr.charAt(i);
    let prevChar = sStr.charAt(i - kLeng);

    sMap.set(nextChar, (sMap.get(nextChar) || 0) + 1);
    sMap.set(prevChar, (sMap.get(prevChar) || 0) - 1);

    if (sMap.get(prevChar) === 0) sMap.delete(prevChar);
  }

  return result;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b)); // 3
