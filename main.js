// Your code below.

const makeDino = function (name, period, carnivore, extinct) {
  const newDino = {
    species: name,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
  if (extinct === undefined) {
    newDino.extinct = false
  }
  return newDino
}

const makeExtinct = function (dino1) {
  const deadDino = makeDino(dino1.species, dino1.period, dino1.carnivore, dino1.extinct);
  deadDino.extinct = true;

  return deadDino;
}

const truncateSpecies = function (name, period, carnivore, extinct) {
  const shortNameDino = {
    species:name,
    period: period,
    carnivore: carnivore,
    extinct: extinct,
  }
  return shortNameDino   
}

/* So not sure how this truncate works.  I know we can .slice but not sure how to use that in 
in a function.  Would I use an if statement, would I add another function.  This is where I get 
stuck when you ask me to extract something, return something less, ugh feeling defeated yet again.
Sorry this is far as I could get even with reading online articles.
*/

const makeSingular = function (name, period, carnivore, extinct) {
  const noUsInName = {
    species:name,
    period: period,
    carnivore: carnivore, 
    extinct: extinct,
  }
  return noUsInName
}

//  Best I can do is give you a non-mutated object. 

// Our code below; DO NOT TOUCH!
if (typeof makeDino === 'undefined') {
  makeDino = undefined;
}

if (typeof makeExtinct === 'undefined') {
  makeExtinct = undefined;
}

if (typeof truncateSpecies === 'undefined') {
  truncateSpecies = undefined;
}

if (typeof makeSingular === 'undefined') {
  makeSingular = undefined;
}


module.exports = {
  makeDino,
  makeExtinct,
  truncateSpecies,
  makeSingular,
}
