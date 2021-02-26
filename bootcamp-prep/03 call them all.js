// Object methods
// 03 Call them all 
// calls methods in an object - check that it is a function first

const callThemAll = (obj, val) =>{
  let res=[]
  for (x in obj){
    if (typeof obj[x] === "function"){
      res.push(obj[x](val))
      }
  }
  return res
}

