// code for Higher Order Functions I
// Feb 2021

//01 Function logger
const functionLogger=(func,arg)=>{
  console.log("Function starting");
  return func(arg);
  console.log("Function complete")
}

//02 Fincer functionLogger
const finderFunction=(arr,func)=>{
  let idx=-1;
  arr.forEach((c,i)=>{
    if (func(c)){idx=i}
  })
  return idx
}

//03 Whos a special
const whosASpecial=(arr)=>{
//  const vals=Object.entries(specialPets)
  let res=""
  arr.forEach(c=>res+=`${c.name} the ${c.species} is very special! `)
  return res.trim()
}

//04 myForEach
const myForEach=(arr,func)=>{
  for (let i=0; i < arr.length; i++){
    func(arr[i],i,arr)
  }
}

//05 Chain reaction
const chainReaction=(start,arr)=>{
  for (let i = 0;i < arr.length; i++){
    start=arr[i](start)
  }
  return start
}

// Higher Order function II

// 01 Biller builder
const billerBuilder=(state)=>{
  const NJgetTot=(price)=>{
    return price*1.05 * 1.06625
  }
  const NYgetTot=(price)=>{
    return price*1.03 * 1.04
  }
  return state==="NJ"?NJgetTot:NYgetTot
}

// 02 Times Table
const timesTable=(n)=>{
  const mult=(x)=>{
    return n*x
  }
  return mult
}

// 03 Partial
const partial=(func, argA) =>{
  const sec=(argB)=>{
    return func(argA, argB)
  }
  return sec
}

// 04 Call count
const callCount=()=>{
  let ct=0
  const called=()=>{
    return ++ct
  }
  return called
}

// 05 Stringify
const stringify=(func)=>{
  const newFunc=()=>{
    return func().toString()
  }
  return newFunc
}

//06 Get Dog Breeder
const getDogBreeder=(defName, defAge)=>{
  const dogBreeder=(name, age)=>{
    if (typeof name === "number"){
      [name,age]=[defName,parseInt(name)]
    }
    if (typeof age !== "number"){
      age=defAge
    }
    if (typeof name ==="undefined"){
      name=defName
    }
    return {name: name, age:age}
  }
  return dogBreeder
}

// 07 Cache savings
const cacheSavings=(func)=>{
  let firstTime=true
  let savedVal
  let savedRet
  const callIt=(val)=>{
    if (!savedVal || val != savedVal){
      savedRet=func(val);
      savedVal=val;
    }
    return savedRet
  }
  return callIt
}