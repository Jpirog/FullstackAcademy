// PBV vs PBR
// 06 Deeper Copy
// Keeping as I had an issue - tried to assign the array within the array to res but it did a reference
//.   so I needed to loop through it to copy elements to the new array (res)

// YOUR CODE BELOW
const deeperCopy = (arr) => {
  let res=[]
  for (let i=0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
        res.push([])
        for (let j=0; j < arr[i].length; j++){
          res[res.length-1].push(arr[i][j])
        }
    } else{ res.push(arr[i])}
  }
  return res
}
