// Objects - 07 Attendance Check
// Produce a list of those present on the given day
// classRoom is an array of objects with an array of days - -tough to navigate through

let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// YOUR CODE BELOW
const attendanceCheck=(day)=>{
  let res=[]
  
  for (let i=0; i < classRoom.length; i++){
    let ent=classRoom[i]
    let key=Object.keys(ent)
    for (let j= 0; j < ent[key].length; j++){
         if (ent[key][j][day]) res.push(key.join(''))
    }
  }
  return res
}

