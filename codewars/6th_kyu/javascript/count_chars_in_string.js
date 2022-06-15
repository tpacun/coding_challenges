// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// Solution:

function count (string) {  
    let brokenString = string.split('')
    let answer = {}
    brokenString.forEach((c) => {
      if (answer[c]) {
        answer[c] += 1
      } else {
        answer[c] = 1
      }
    })
     return answer;
  }