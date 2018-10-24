let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
tool = "marker"
let writingUtensil = tool || "pen"
if (tool) {

console.log(`The ${writingUtensil} is mightier than the sword.`);
}