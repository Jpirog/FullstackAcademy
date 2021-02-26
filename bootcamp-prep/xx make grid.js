//Arrays II - Make Grid
//Write a function makeGrid that accepts two arguments:
//numColumns (number), numRows (number)
//makeGrid should return a two-dimensional array that represents a grid of the given dimensions.
// I struggle with two dimensional arrays so including some of these here

const makeGrid =(cols,rows)=>{
  let res=new Array(rows)
  for (let r=0; r < rows; r++){
    res[r]=new Array(cols)
    for (let c=0; c <cols; c++){
      res[r][c]=c+1
    }
  }
  return res
}