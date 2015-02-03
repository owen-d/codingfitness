/*
Ok guys, this one is called balancePoint.
balancePoint takes an array as its argument and returns an array of indexes at which the sub-arrays on either side of the index are balanced (if you sum the sides). Otherwise, it returns null.
ex//
  expect(balancePoint([1,2,3,2,1])).to.eql([2]);
  expect(balancePoint([1,-2,0,3,2,-3])).to.eql([0, 3]); 
  expect(balancePoint([1,-1,1,0,1,-1,1])).to.eql([3]);
  expect(balancePoint([1,2,4])).to.equal(null);
  expect(balancePoint([0,0,0])).to.eql([0,1,2]);

  note: eql in chai is a shortcut for deep equality.
 */

//To run the tests, run 'npm intall' from the root (codingfitness) folder,
//and then run 'npm test' from the balancePoint folder.

module.exports = function(array){
  var sums = [];
  var results = [];
  for (var i = 0; i < array.length; i++) {
    sums.push(sums.length ? sums[sums.length-1] + array[i] : array[i]);
  }
  var computeLeft = function(index){
    return index === 0 ? 0 : sums[index-1];
  };
  var computeRight = function(index){
    return sums[sums.length-1]-sums[index];
  };

  for (var i = 0; i < sums.length; i++) {
    if (computeLeft(i) === computeRight(i)) {
      results.push(i);
    }
  }
  return results.length ? results : null;
};



