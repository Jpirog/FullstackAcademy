// Object methods
// 05 Taco Cat Inc
// methods to record a sale object and return inventory - iterating through objects

let tacoCatInc = {
  gourmetShell: {
    'hard treat shell': {cost: 2, quantity: 100},
    'soft treat shell': {cost: 1.5, quantity: 100}
  },

  gourmetFishFilling: {
    'salmon': {cost: 5, quantity: 100},
    'tuna': {cost: 5.5, quantity: 100},
    'sardines': {cost: 1.5, quantity: 100}
  },

  gourmetVeggie: {
    'cat grass': {cost: 1, quantity: 100}
  },

  gourmetSeasoning: {
    'cat nip': {cost: 0.5, quantity: 100},
    'treat dust': {cost: 0.1, quantity: 100}
  },

  cash: 0,

// YOUR CODE BELOW
  currentInventory: function() {
    let invAmt=0
    for (let foodType in tacoCatInc){
      if (typeof tacoCatInc[foodType] === 'object'){
        for (let menuItem in tacoCatInc[foodType]){
          invAmt += tacoCatInc[foodType][menuItem].cost * tacoCatInc[foodType][menuItem].quantity
        }
      }
    }
    return invAmt
  },
  
  sale: function(order){
    let orderTot = 0
    for (const [key, value] of Object.entries(order)) {
      orderTot += tacoCatInc[key][value].cost;
      tacoCatInc[key][value].quantity--;
    }
    this.cash += orderTot
    return orderTot
  }
};
