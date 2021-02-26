// PBV vs PBR
// 04 MySplice
// Kept this as it was frustrating as I was not aware of some array behavior
// Assigning an array to arr did NOT alter the original array
// Also tried arr=myCopy.slice() and it did not change the original array
// -- needed to set the length to 0 and then copy individually to arr to actually change it

// YOUR CODE BELOW
const mySplice=(arr,start=0,del=0,addThis)=>{
  
  let removed= del > 0 ? arr.slice(start,start+del) : []  
  
  let myCopy=arr.slice(0,start)
  if (addThis){
    myCopy.push(addThis)
  }
  myCopy=myCopy.concat(arr.slice(start+del))

  arr.length=0
  for (let i=0; i < myCopy.length; i++){
    arr[i]=myCopy[i]
  }

  return removed
}