// You are given a set of unique characters and a string.

// Find the smallest substring of the string containing all the characters in the set.

// ex:
// Set : [a, b, c]
// String : "abbcbcba"

// Result: "cba"

// The target time complexity is linear!

var charSetInString = function(chars, str){
  var shortest;
  var strArray = str.split('');
  var q = [];
  var current = [];
  var allLetters = false;
  var removeLeadingChars = function(char, array) {
    while(array[0] === char) {
      array.shift();
    }
  };
  var leaveOneChar = function(char, array) {
    while(array[1] === char) {
      array.shift();
    }
  };
  var findMultiples = function(char, q) {
    var count = 0;
    for (var i = 0; i < q.length; i++) {
      if (q[i] === char) {
        if (count) {
          return true;
        }
        count++;
      }
    }
    return false;
  };
  var allThere = function(charSet, array) {
    var result = true;
    charSet.forEach(function(item){
      if (array.indexOf(item) === -1) {
        result = false;
      }
    });
    return result;
  };

  for (var i = 0; i < strArray.length; i++) {
    if (!current.length) {
      current.push(strArray[i]);
      q.push(strArray[i]);
      if (allThere(chars, q)) {
        allLetters = true;
      }
    }
    else if (current.length && current[0] === strArray[i]) {
      removeLeadingChars(current[0], current);
      q.shift();
      q.push(strArray[i]);
      current.push(strArray[i]);
      var j = findMultiples(current[0], q);
      while (j) {
        removeLeadingChars(current[0], current);
        q.shift();
        j = findMultiples(current[0], q);
      }
      leaveOneChar(current[0], current);
    } else {
      if (current[current.length-1] !== strArray[i]) {
        q.push(strArray[i]);
        if (allThere(chars, q)) {
          allLetters = true;
        }
      }
      current.push(strArray[i]);
    }

    console.log('i', i, 'cur:', current, 'q:', q);
    if (allLetters && (shortest === undefined || shortest.length > current.length)) {
      shortest = current.join('');
    }

  }


  return shortest;
};
