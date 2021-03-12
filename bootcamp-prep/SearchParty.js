let world = {
  'Fullstack': {
    '11th floor': 'Marge',
    '25th floor': 'Francis'
  },
  'Subway': ['Jackie', 'Grumio']
};

let world1={
  a: "smith",
  b: "jones",
  c: ["sue","linda"]
};

let world2={
  a: "smith",
  b: "jones",
  c: ["sue","linda"],
  d: {zz: "pirog", xx: ["susan", "karen"]}};

  let newYorkCity = {
    'Manhattan': {
      'Uptown': {
        'Washington Heights': 'Daniel',
        'UWS': 'Cathy'
      },
      'Midtown': {
        'Madison Square': 'Susan',
        'Theater District': ['Robert', 'Latisha']
      },
      'Downtown': {
        'Tribeca': 'Billy',
        'Financial District': {
          'Fullstack': {
            '11th floor': ['David', 'Nimit'],
            '25th floor': 'Ashi'
          }
        }
      }
    },
    'Brooklyn': {
      'Bushwick': 'Marilyn',
      'Bed-Stuy': ['Juan', 'Denice']
    },
    'Queens': {
      'Astoria': 'Ella',
      'Flushing': 'Eric'
    },
    'Bronx': {
      'Fordham': 'Aaron',
      'Melrose': 'Krysten'
    },
    'Staten Island': {
      'Arlington': ['Nadine', 'Mose'],
      'Elm Park': 'Arthur'
    }
  };


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

console.log("************** NEW SEARCH ******************")
console.log(searchParty("Nimit", newYorkCity))
//console.log(searchparty("susan", world2))
