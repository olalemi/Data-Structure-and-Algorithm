// 1) Palindrome Numbers
// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindromeNumber(x) {
    if (x < 0) {
      return false;
    }
    x = x.toString();
    console.log(x.length);
    let left = 0;
    let right = x.length - 1;
  
    while (left < right) {
      if (x[left] !== x[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
  
  //Time complexity is O(n)
  console.log(isPalindromeNumber(101));
  
  //2) Given a string s consisting of words and spaces, return the length of the last word in the string.
  
  // A word is a maximalk substring consisting of non-space characters only.
  
  var lengthOfLastWord = function (s) {
    let word = s.trim();
    let splitWord = word.split(' ');
    let set = new Set();
    for (let i = 0; i < splitWord.length; i++) {
      if (splitWord[i]) {
        set.add(splitWord[i]);
      }
    }
    let arr = [...set];
    let lastWord = arr[arr.length - 1];
    return lastWord.length;
  };
  
  console.log(lengthOfLastWord('   fly me   to   the moon '));




  
  
  function staircase(n) {
      for (let i =1;  i <= n; i++) {
        let emp = " ".repeat(n - i);
        let hash = "#".repeat(i);
        console.log(emp + hash + "\n");
      }
    }