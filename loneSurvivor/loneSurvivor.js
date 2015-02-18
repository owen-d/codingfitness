/** THE PROBLEM *************************************************************
-----------------------------------------------------------------------------
 * Take a second to imagine that you are in a room with 100 chairs arranged in
 * a circle. These chairs are numbered sequentially from One to One Hundred.
 * At some point in time, the person in chair #1 will be told to leave the room.
 * The person in chair #2 will be skipped, and the person in chair #3 will be 
 * told to leave. Next to go is person in chair #6. In other words, 1 person 
 * will be skipped initially, and then 2, 3, 4.. and so on. This pattern of 
 * skipping will keep going around the circle until there is only one person 
 * remaining...the survivor.
 *
 * Note that the chair is removed when the person leaves the room.
 * Write a program to figure out which chair the survivor is sitting in.
 * 
 * EXTRA CREDIT: solve recursively 
 ****************************************************************************/



var loneSurvivor = function(chairs, skip, start) {
  //your code here
  start = start || 0;
  var pointer = start;
  var jump = skip;
  if (chairs.length === 1) {
    return chairs[0];
  } else {
    // debugger;
    while (jump > 0) {
      pointer >= chairs.length-1 ? pointer = 0 : pointer++;
      jump--;
    }
    chairs.splice(pointer, 1);
    //reset pointer if it points out of bounds.
    pointer === chairs.length ? pointer = 0 : void 0;
    // console.log('chairs:', chairs, '\npointer:', pointer, 'nextSkip:', skip+1);
    return loneSurvivor(chairs, skip+1, pointer);
  }
};
