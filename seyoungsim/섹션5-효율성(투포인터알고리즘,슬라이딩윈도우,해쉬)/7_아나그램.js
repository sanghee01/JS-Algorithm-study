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

function solution(str1, str2) {
  let result = "NO";
  const anagramMap1 = getDuplicateCalculationMap(str1);
  const anagramMap2 = getDuplicateCalculationMap(str2);

  const isSameArray =
    changeMapToJson(anagramMap1) === changeMapToJson(anagramMap2);

  if (isSameArray) result = "YES";

  return result;
}

let a = "AbaAeCe";
let b = "baeeACA";
console.log(solution(a, b)); // YES

// let a = "abaCC";
// let b = "Caaab";
// console.log(solution(a, b)); // NO
