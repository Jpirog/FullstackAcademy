// Objects - compare objects (completed three different ways)
const compareObjects=(obj1,obj2)=>{
// method 1 - JSON stringify
//  if (JSON.stringify(obj1) !== JSON.stringify(obj2)) return false;
//  return true
  
// method 2 - compare key/values to each other
//  let obj1Ent = Object.entries(obj1).sort((a,b)=> a-b)
//  let obj2Ent = Object.entries(obj2).sort((a,b)=> a-b)
//  if (obj1Ent.length !== obj2Ent.length) return false;
//  for (let i=0; i < obj1Ent.length; i++){
//    if (obj1Ent[i][0] !== obj2Ent[i][0] || obj1Ent[i][1]!==obj2Ent[i][1]) 
//      return false
//  }
//  return true
  
// method 3 - loop through each and ensure the same keys and values
  for (let key in obj1){
    if (!(key in obj2 && obj1[key] === obj2[key])) return false
  }
  for (let key in obj2){
    if (!(key in obj1 && obj2[key] === obj1[key])) return false
  }
  return true
}
