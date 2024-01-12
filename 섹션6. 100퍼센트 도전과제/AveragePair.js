// 다중 포인터 - averagePair
// averagePair라는 함수를 작성합니다.
// 정렬된 정수 배열과 목표 평균이 주어졌을 때, 배열에 쌍의 평균이 목표 평균과 같은 값의 쌍이 있는지 확인합니다.
// 목표 평균과 일치하는 쌍이 두 개 이상 있을 수 있습니다.

// my solution
// 배열과 숫자를 입력받는다.
// index 0의 left 변수와 index 끝의 right 변수를 생성한다.
// 배열[left] 값과 배열[right] 값의 평균이 주어진 평균보다 큰지 작은지 확인한다.
// 작은경우 left 값을 +1 한다.
// 큰 경우 right 값을 -1 한다.
// 이 것을 left < right 인 경우 반복한다.
// 만약 구한 평균이 주어진 평균과 같으면 true를 return 한다.
// 그렇지 않은 경우 false를 return 한다.

function averagePair(arr, avg) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    if (((arr[left] + arr[right]) / 2) < avg) {
      left++;
    }

    if (((arr[left] + arr[right]) / 2) > avg) {
      right--;
    }

    if (((arr[left] + arr[right]) / 2) === avg) {
      return true;
    }
  }
  return false;
}

console.log(averagePair([1,2,3,4,5], 6));

// averagePair 솔루션
// function averagePair(arr, num){
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2 
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }
//   return false;
// }

// feedback
// 평균값에 대한 반복 부분을 변수로 설정하여 썼으면 훨씬 깔끔한 코드를 작성할 수 있었을듯
// 반복에 대해서는 줄이려고 하자