// You are given un unsorted array of integers and a target integer.
// Write a function that returns a pair of numbers from the array
// that is as close to the target number as possible but does not exceed it.
// The return value should be an array of length 2.
// Example:
// array [10, -2, -7, 8, 5], target 7 => returns [-2, 8].
// The order of numbers in the resulting array does not matter.
// If there are two pairs of integers with the same sum, any pair can be returned.
// If the length of the original unsorted array is less than 2, return null.

var targetSum = function(array, n){
  // Your code here
  var best = null;
  if (array.length < 2) {
    return null;
  }
  for (var i = 0; i < array.length-1; i++) {
    var first = array[i];
    for (var j = i+1; j < array.length; j++) {
      var second = array[j];
      if (!best && first+second <= n) {
        best = [first, second];
      }
      else if (best && n-first-second >= 0 && n-first-second < n-best[0]-best[1]) {
        best = [first, second];
      }
    }
  }
  return best;
}
