// 다중 포인터 - isSubsequence
// 두 문자열을 받아 첫 번째 문자열의 문자가 두 번째 문자열의 문자의 일부에 포함되는지 확인하는 isSubsequence라는 함수를 작성합니다.
// 즉, 이 함수는 첫 번째 문자열의 문자가 순서가 바뀌지 않고 두 번째 문자열의 어딘가에 나타나는지 확인해야 합니다.

// my solution
// 두 문자열을 입력 받는다.
// index 0값을 활용하여 left, right 변수를 생성한다.
// str2[right]값이 str1[left]의 값이랑 동일한지 확인한다. 동일하면 left값을 +1 한다.
// 다음 동일한 문자가 있는지 파악하기 위하여 right 값에 ++를 한다. 
// 해당 과정을 반복하여 left 값이 str1 길이와 같다면 ture를 반환한다.
// 아니라면 false를 반환한다.

function isSubsequence(str1, str2) {
    let left = 0;
    let right = 0;
    let count = 0;
    while(right < str2.length) {
        if(str2[right] === str1[count]) {
            count ++;
            left = right;
        }
        if(count === str1.length) {
            return true;
        }
        right ++;
    }
    return false;
}

// refactoring
function isSubsequence(str1, str2) {
    let right = 0;
    let left = 0;
    while(right < str2.length) {
        if(str2[right] === str1[left]) {
            left ++;
        }
        if(left === str1.length) {
            return true;
        }
        right ++;
    }
    return false;
}


// isSubsequence 솔루션 - 반복
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// isSubsequence 솔루션 – O(1) 공간이 아닌 재귀
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//   return isSubsequence(str1, str2.slice(1))
// }

// 재귀는 재귀를 공부하고 난 다음에 보도록 하고
// 나는 다중 포인터에 대해서 한쪽 문자열에서만 생각하였는데 그게 아니라 각 문자열의 하나씩의 포인터를 가지고도 할 수 있겠다는 생각이 들었다.
// 변수의 경우 적을수록 좋으니 
// 심지어 나의 경우도 left를 전혀 쓰지 않는다.
// 코드를 다 작성한 이후 다시 한번 보고 refactoring 과정을 거치도록 

