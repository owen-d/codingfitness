// This function takes in a string (a sentence) that contains several words
// and an integer n. 
// It outputs an array of strings, where each string contains as many words
// as possible but is never longer than n characters.
// The strings in the output array, when combined, should contain the original sentence.
// Words may not be split, but you may assume that no single word is too long.


// Example1: telegram("Bring your dog to the office", 6) =>
// ["Bring", "your", "dog to", "the", "office"]

// Example2: telegram("The rain in Spain stays mainly in the plain", 8) = >
// ["The rain", "in Spain", "stays", "mainly", "in the", "plain"]


// For simplicity let's assume that the input string contains only one sentence
// without any special characters (periods, commas etc).



var telegram = function(string, n){
  // Your code here
  var strArray = string.split(' ');
  strArray.forEach(function(item, index, array){
    if (index !== array.length-1) {
      array[index]+= " ";
    }
  });
  var results = [];
  strArray.reduce(function(prev, cur, index, array) {
    if (index === strArray.length-1) {
      if (prev.length + cur.length > n) {
        results.push(prev);
        results.push(cur);
      } else {
        results.push(prev+cur);
      }
      return;
    }
    console.log(prev, cur);
    if (prev.length + cur.length > n) {
      results.push(prev);
      return cur;
    } else {
      // console.log(prev+cur);
      return prev+cur;
    }
  });

  console.log('result:', results);
  return results;
}
