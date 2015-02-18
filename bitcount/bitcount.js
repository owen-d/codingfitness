// From codewars.com

// Write a function that takes an (unsigned) integer as input,
// and returns the number of bits that are equal to one 
// in the binary representation of that number.

// Example:
// The binary representation of 1234 is 1     0   0   1   1  0  1  0   0  1  0, 
//                                      1024,512,256,128,64,32,16, 8 , 4 , 2, 0
// so the function should return 5 in this case.

// This article might be useful to understand the context of the problem:
// http://en.wikipedia.org/wiki/Hamming_weight ,
// but it is not at all needed to solve the toy problem.


var bitcount = function (n) {
  // Your code here
  // 
  // arr takes structure [val]
  var arr = [[1]];
  var remainder = n;
  var increment = 2;
  while (increment <= n) {
    arr.push([increment]);
    increment *= 2;
  }
  arr.reverse();

  var str = arr.reduce(function(prev, cur){
    if (remainder >= cur) {
      remainder-= cur;
      return prev+1;
    } else {
      return prev+0;
    }
  }, '');

  // return str;
  return str.split('').reduce(function(prev, cur){
    return parseFloat(cur) === 1 ? prev + 1 : prev;
  }, 0);
};
