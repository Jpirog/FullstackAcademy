//Arrays II - mySlice
// Basically creating the mySlice functionality without using it
// Tricky mainly because the possible negative starting and ending indexes
//Define a function, mySlice, that accepts up to three arguments:
//originalArray, startIdx (number, optional), endIdx (number, optional)

const mySlice=(arr,start=0,end=arr.length)=>{
  let res=[]
  if (start < 0) start=arr.length+start;
  if (end < 0) end=arr.length+start-1;
  for (let i=start; i < end; i++){
    res.push(arr[i])
  }
  return res
}

