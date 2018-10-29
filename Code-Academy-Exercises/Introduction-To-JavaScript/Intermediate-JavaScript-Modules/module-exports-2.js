//2-airplane.js file

const Airplane = require('./2-airplane.js')

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
  return this.myAirplane;
	}
};

//2-missionControl.js file

const Airplane = require('./2-airplane.js');

console.log(Airplane.displayAirplane());