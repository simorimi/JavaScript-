// 문제 ## 빈도수 세기
// 가변적인 수의 인수(a variable number of arguments)를 받아들이고 전달된 인자 중 중복이 있는지 확인하는 areThereDuplicates라는 함수를 구현합니다.
// 빈도 카운터 패턴 또는 다중 포인터 패턴을 사용하여 이 문제를 해결할 수 있습니다.

// my solution
// 나머지 변수를 활용하여 입력받은 값들을 배열화 한다.
// 빈 객체를 생성한다
// 빈도수 세기를 활용하여 해당 배열의 각 값의 빈도수를 객체에 넣는다.
// 만약 key에 대한 value가 1보다 크다면 true를 반환한다
// 그게 아니라면 false를 반환한다.

// function areThereDuplicates(...val) {
//     let frequency = {};

//     for(let i = 0; i < val.length; i ++) {
//         frequency[val[i]] = (frequency[val[i]] || 0) + 1;
//     }

//     for(let key in frequency) {
//         if(frequency[key] > 1) {
//             return true;
//         }
//     }
//     return false;
//   }

// areThereDuplicates 솔루션 (빈도 수 세기)
// function areThereDuplicates(...arguments) {
//     let collection = {}
//     for(let val in arguments){
//       collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//     }
//     for(let key in collection){
//       if(collection[key] > 1) return true
//     }
//     return false;
//   }

// feedback
// 이 것은 코드가 동일 
// 차이점은 for i 대신 for in을 썼다는 정도? 배열의 반복문의 경우 for of나 for in을 쓰는게 효율적일듯 


// ## 다중 포인터

// my solution
// 나머지 변수로 배열화한다.
// 배열을 크기대로 분류한다.
// index 0 값을 left, index 1 값을 right로 설정하여 index를 1씩 늘려가며 중복인지 확인한다
// 중복이 있는 경우 false를 리턴한다.
// 중복이 없는 경우 true를 리턴한다.

function areThereDuplicates(...val) {
  const ARR = val.sort();

  console.log(ARR);
  for (let i = 0; i < ARR.length; i++) {
    let left = i;
    let right = i + 1;
    if (ARR[left] === ARR[right]) {
      return true;
    }
  }
  return false;
}

// areThereDuplicates 솔루션 (다중 포인터)
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// areThereDuplicates One Liner 솔루션
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }

// feedback
// Set.size 이용하는 거 그렇게 많이 다뤘는데 생각하지 못했다는게 아쉽.. 해당 방법에 대해서 생각하는 것도 좋지만 기존에 알던 지식을 떠올려보기