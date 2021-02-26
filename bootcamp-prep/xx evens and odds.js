// Arrays II - Even and Odds
// return all evens in an array and then all odds in an array
// would be more efficient to do a forEach and loop through the array once and create two arrays

const evenAndOdd=(arr)=>{
   return [arr.filter(c=>c%2===0),arr.filter(c=>c%2===1)]
}
