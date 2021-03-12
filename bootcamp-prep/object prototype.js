// This is from the pre-access workshop
// I did not understand the problem well, was looking at the testem only
// Later I saw the readme and it was a little more clear
// They want a recursive chain of prototypes for the passed argument
// I thought they wanted the functions available in the prototype
// That solution was this:
// let x=Object.getPrototypeOf(obj);
// return Object.getOwnPropertyNames(x)
// the above worked for objects and arrays
// bottom line - the below works but I needed to look at their solution

const traceTheChain = (obj) =>{
  let res=[]
  
  while (Object.getPrototypeOf(obj)){
    obj=Object.getPrototypeOf(obj)
    res.push(obj)
  }

  return res
}
