//Functions in JavaScript form particular tasks or calucate something

var warrior = {
  name: 'Flabber Gast',
  attack: 70, 
  defence: 55,
  mana: 100
}

//level up function
function levelUp(prop, val) {
  warrior[prop ]+= val;
}

// warrior.attack = warrior.attack + 2;
levelUp('attack', 2)
levelUp('attack', 8)
levelUp('attack', 17)

// warrior.attack += 2;
// warrior.defence += 10;
// warrior.mana += 25;

console.log(warrior);




function toCelsius(f) {
  var temp = (5/9) * (f -32)
  return temp.toFixed(2);
}

// var cel = toCelsius(46);

var weather = 'The Temperature outside is ' + cel + ' celsius!';

console.log(weather);


function calcArea(w,l) {
  return w * l;
}

var kitchenArea = calcArea(15, 18);
var bedroomArea = 12 * 10;


//console.log(kitchenArea);
//console.log(bedroomArea);