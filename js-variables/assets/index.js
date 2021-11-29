var plants = ['willow', 'nightshade', 'foxgrove', 'fennel', 'thyme'];

plants.push('periwinkle')
animals.push('koala')

var animals = ['dolphin', 'black bear', 'anaconda', 'tuna']

function combinePlantsAndAnimals(){
  var combinedList = [];
  for(var i = 0; i < plants.length; i++){
    combinedList.push(plants[i])
  }

  for(var i; i < animals.length; i++){
    combinedList.push(animals[i])
  }
}

console.log(combinedList)