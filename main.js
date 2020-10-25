// Your code below.

const makeDino = function (newSpecies, newPeriod, newCarnivore, newExtinct = false) {
  return {
    species: newSpecies,
    period: newPeriod,
    carnivore: newCarnivore,
    extinct: newExtinct
  }
}
// Default Parameter --> newExtinct = false 
// if new extinct is undefined then give it my own value
// (newExtinct = undefined)
// newExtinct = false;
// newSpecies = 'T-Rex' don't forget quotation marks if giving value in array.
// order of parameter does matter

const makeExtinct = function (dino1) {
  return makeDino(dino1.species, dino1.period, dino1.carnivore, true);
}
// or 
const makeExtinctAlt = function (dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct)

  newDino.extinct = true;

  return newDino;
}

// I want a new dinosaur with all parameters passed in with extinct set to true.
// or 
// Make exact copy and return a new dinosaur set to .extinct true

const truncateSpecies = function (dinosaur) {
  const newDino = makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct);

  if (newDino.species.length >= 10) {
    newDino.species = newDino.species.slice(0, 7) + '...';
  }
  return newDino;
}

// Makes copy of it 
// Than says if length of this species is greater than > or = equal to 10 >=
// Let it be a slice of that sting 0 - 6 indexes 
// With '...' at end

const makeSingular = function (dinosaur) {
  if (dinosaur.species.endsWith('us')) {
    return makeDino(dinosaur.species.slice(0, -2), dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  } else {
    return makeDino(dinosaur.species, dinosaur.period, dinosaur.carnivore, dinosaur.extinct)
  }
}

// if character ends with ('us')
// .slice(0, -2) is everything but the last 2


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
