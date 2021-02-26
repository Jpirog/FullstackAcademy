// PBV vs PBR
// 05 - reverse array
// kept this because I used the new ES6 syntax to swap two variables (see line below)

const reverseArray=(arr)=>{
  let end=arr.length-1
  for (let i=0; i <= Math.floor(arr.length/2)-1; i++){
    [ arr[i], arr[end--] ] = [ arr[end], arr[i] ]
  }
  return arr
}

