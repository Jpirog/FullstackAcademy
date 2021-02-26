//Arrays II - remove columns
//Write a function removeColumns that accepts two arguments//
//originalGrid (two-dimensional array), numColums (number)
//removeColumns should return a new grid with the correct number of columns removed.

const removeColumns=(grid,col)=>{
  for (let i=0; i < grid.length; i++){
    for (let j=0; j < col; j++){
      grid[i].pop()
    }
  }
  return grid
}
