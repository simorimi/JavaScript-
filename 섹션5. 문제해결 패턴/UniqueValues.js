// UniqueValues
// - 빈 배열을 만든다
// - 입력한 배열을 반복문을 통해 하나씩 확인한다.
// - 해당 빈 배열에 입력한 배열의 각 값이 존재하지않는 경우 push 한다. 해당 과정을 반복한다
// - push 하여 구한 배열의 길이를 리턴한다

// mySolution1 (includes 또한 O(n)이라 해당 solution은 O(n^2))
// function UniqueValues(arr) {
//     const UNIQUE_ARRAY = new Array();
//     for(let i = 0; i < arr.length; i++){
//         if(!(UNIQUE_ARRAY.includes(arr[i]))){
//             UNIQUE_ARRAY.push(arr[i]);
//         }
//     }
//     const UNIQUE_VALUES = UNIQUE_ARRAY.length;
//     return UNIQUE_VALUES;
// }

// mySolution2
// 처음에 right 값을 left에다가 + 1로 값을 고정했는데 이 값을 바꾸려면 right 또한 반복문 안에 포함되어야했다.
// function countUniqueValues(arr) {
//   let count = 0;
//   let left = 0;
//   let right = 1;
//   while (left < arr.length) {
//     if(arr[left] != arr[right]) {
//       count ++;
//     }
//     left ++;
//     right ++;
//   }
//   return count;
// }

// mySolution3
// function countUniqueValues(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let left = i;
//     let right = i + 1;
//     if (arr[left] != arr[right]) {
//       count++;
//     }
//   }
//   return count;
// }

// solution
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
