const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(ani => {
  return ani === "elephant";
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(aniS => {
  return aniS.charAt(0) === "s";
});

console.log(startsWithS);