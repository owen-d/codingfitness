// This function should check 
// whether the integer n is the square of another integer number.
// Do not use Math.pow(n, 0.5) in your solution.

var isSquare = function(n){
  // Your code here
  var cursor = 0;
  while (cursor*cursor < n) {
    cursor++;
  }
  if (cursor*cursor === n) {
    return true;
  } else {
    return false;
  }

}
