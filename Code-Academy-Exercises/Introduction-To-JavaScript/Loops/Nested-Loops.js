// Write your code below

const bobsFollowers = ["Frank", "John", "Sam", "Bjorn"];
const tinasFollowers = ["Sam", "Bjorn", "Jen"];
const mutualFollowers = [];

for (let i=0; i < bobsFollowers.length; i++) {
  for (let j=0; j < tinasFollowers.length; j++)
    { 
      	if (bobsFollowers[i] === tinasFollowers[j]) {
      console.log(mutualFollowers.push(tinasFollowers[j]));
    }
   }
};

console.log(mutualFollowers);