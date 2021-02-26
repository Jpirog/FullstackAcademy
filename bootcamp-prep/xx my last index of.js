// Arrays I - 03 My Last Index Of
// finding the last value in an array without using lastIndexOf

const myLastIndexOf =(arr,str,start=arr.length)=>{
  arr = arr.splice(0,start). // adjust the array if there is a starting index
  arr.reverse()              // reverse it
  let x = arr.findIndex(c=>c===str) //find the first
  return x===-1? -1: arr.length - 1 - x  // return
}