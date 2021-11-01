// Write a function that checks if a given string (case insensitive) is a palindrome.

// 8 kyu

// function isPalindrome(x) {
//   x = x.toLowerCase();
//   for (let i = 0; i < x.length; i++){
//   if(x[i] !== x[x.length - 1 - i])
//     return false;
//   }
//   return true;
// }

// const isPalindrome = x => {
//   x = x.toLowerCase()
//   return x === x.split('').reverse().join('')
// }