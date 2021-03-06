// code for Recursive functions I
// Feb 2021

const countToTen = (nbr) =>{
  if (nbr > 10) return;
  console.log(nbr);
  countToTen(nbr+1)
}

const backwardString =(str)=>{
  if (str.length == 0) return;
  console.log(str[str.length-1])
  backwardString(str.slice(0,-1))
}

const sumNums =(nbr)=>{
  if (nbr < 1) return 0
  return nbr+sumNums(nbr-1)
}

const countVowels=(str)=>{
  if (str.length===0) return 0
  return str[0].match(/[aeiou]/i) ? 1+countVowels(str.slice(1)):0+countVowels(str.slice(1));
}

const reverseArray=(arr)=>{
  // this took me a while as I was modifying the original array
  // after thinking it through, a copy of the array was necessary
  // to avoid changing the original
  
  if (arr.length === 1) return [arr[0]];
  let arrCopy=arr.slice();
  return [arrCopy.pop()].concat(reverseArray(arrCopy))
}

const sumDigits=(nbr)=>{
  if (nbr < 10) return nbr
  return nbr % 10 + sumDigits(Math.floor(nbr / 10))
}

const isPalindrome=(str)=>{
  if (str.length < 2 || (str.length === 2 && str[0].toLowerCase() === str[1].toLowerCase()))
    return true;
  if (str[0].toUpperCase() != str[str.length-1].toUpperCase()) 
    return false;
  return isPalindrome(str.slice(1,-1))
}

// Recursive function II

// 01 Array Sum
const arraySum=(arr)=>{
  // base case = end of loop of array
  // recursive case = the array element is an array
  let sum=0;
  arr.forEach((c,i) =>{
    if (Array.isArray(c)){
      sum += arraySum(c);
    } else{
      sum += c;
    }
  })
  return sum;
}

// 02 All Systems Go

const allSystemsGo = (status) =>{
  console.log("Start",status)
  // base case: element is a boolean, iterate through
  // recursive case: the element is an object
  let allGo=true
  
  for (elem in status){
    console.log(elem, status[elem])
    if (typeof status[elem] === "object"){
      // for a boolean end result, need to include it in the call 
      // similar to a total or concatenation
      allGo = allGo && allSystemsGo(status[elem])
    } else{
      if (status[elem] === false){
        return false
      }
    }
  }
  return allGo
}

// 03 The Truth Counts

const theTruthCounts=(arr)=>{
  // base case - looping through the array
  // recursive case - if the current element is an array
  let truthyCounts = 0
  
  arr.forEach (elem => {
    if (Array.isArray(elem)){
      truthyCounts += theTruthCounts(elem)
    } else{
        if (elem) {truthyCounts++;}
    }
  })
  
  return truthyCounts
}

// 04 Get Longest Name

const getLongestName = (obj) => {
  // base case - loop through the top level of elements - where the value is null
  // recursive case - if the element is an object
  // this is a case where the function needs to know the longest name so far
  let maxLen=0;
  let maxName;
  let ents=Object.keys(obj);

  ents.forEach (c => {
    if (obj[c] === null){
      if (c.length > maxLen){
        maxLen = c.length;
        maxName = c;
      }
    }
    else{
      let x = getLongestName(obj[c])
      if (x.length > maxLen){
        maxLen=x.length;
        maxName=x;
      }
    }
  })
  return maxName
}

// 05 Search Party
// This was pretty tough. Logic was:
//   Loop through the object entries - this is the base case since when the loop is done, it's over
//     if the entry is a string, check if equal to the name and if so, return that path
//     if the entry is an array, loop through it and if an entry equals the name, return that path
//     if the entry is an object, do the recursive call
//        I had most of this, where I missed was doing a return null if the array returned null
//        and it should only have returned the valid path from the recirsive call

const searchParty = (name, world) => {
  let x = Object.entries (world);

  for (let c in world){
    if (typeof world[c] === "string"){
      if (world[c] === name){
        return [c];
      }
    } else if (Array.isArray (world[c])){
        for (let i = 0; i < world[c].length; i++){
          if (world[c][i] === name){
            return [c]
          } // if
        } //for
      }  // else if
      else{ // must be an object
        let x = searchParty(name, world[c])
        if (x != null){  // this + the next return in the opposite order
          return [c].concat(x);
        } // if
      } // else
    } //for
  
  return null
}
