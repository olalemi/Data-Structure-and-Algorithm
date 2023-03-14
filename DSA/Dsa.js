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

// second solution to palindrome number

var isPalindrome = function (x) {
  let a = x.toString().split("");
  let l = a.length;
  for (let i = 0; i < l / 2; i++) {
    if (a[i] !== a[l - 1 - i]) {
      return false;
    }
  }
  return true;
};

//Time complexity is O(n)
console.log(isPalindromeNumber(101));

//2) Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximalk substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
  let word = s.trim();
  let splitWord = word.split(" ");
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

console.log(lengthOfLastWord("   fly me   to   the moon "));

// If you have studied for software development interviews, then I am sure you have, or will eventually run into the “Staircase” problem where…

// n is an integer denoting the size of the staircase
// print a staircase of size n using # symbols and spaces and make it right-aligned
// Example: n = 4 should print:

function staircase(n) {
  for (let i = 1; i <= n; i++) {
    let emp = " ".repeat(n - i);
    let hash = "#".repeat(i);
    console.log(emp + hash + "\n");
  }
}

// write a function that returns the factoria of the given number

function factorial(n) {
  if (n < 0 || n == 0) {
    return 1;
  } else if (n > 0) {
    return (n = n * factorial(n - 1));
  }
}
console.log(factorial(5));

//  Given five positive integers, find the minimum and maximum values that can be calculated
//  by summing exactly four of the five integers. Then print the respective minimum and maximum
//  values as a single line of two space-separated long integers.

function miniMaxSum(arr) {

  let minSum = Infinity;
  let maxSum = -Infinity;
 
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum += arr[j];
      }
    }
    minSum = Math.min(minSum, sum);
    maxSum = Math.max(maxSum, sum);
  }



  console.log(minSum, maxSum)
}


console.log(miniMaxSum([1,3,5,7,9]))


// how to calculate the second maximum number in an array

function findSecondMax(arr) {
  let max = arr[0];
  let secondMax = arr[1];

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      secondMax = max;
      max = arr[i];
    } else if (arr[i] > secondMax) {
      secondMax = arr[i];
    }
  }

  return secondMax;
}