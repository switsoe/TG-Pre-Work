let availableAirplanes = [
  {
    name: 'AeroJet',
    fuelCapacity: 800,
    availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
    maxSpeed: 1200,
    minSpeed: 300
   }, 
   {name: 'SkyJet',
    fuelCapacity: 500,
    availableStaff: ['pilots', 'flightAttendants'],
    maxSpeed: 800,
    minSpeed: 200
   }
  ];
  
  let flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700,
  }
  
  function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
    let range = maxSpeed - minSpeed;
    if (range > requiredSpeedRange) {
        return true;
        } else {
          return false;
        }
    };
  
  function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
      return true;
    } else {
          return false;
    }
  }
  
  export let availableAirplanes = [...];
  
  export let flightRequirements = {...};
  
  export function meetsStaffRequirements(){
  ...
  };
  
  export function meetsSpeedRangeRequirements(){
  ...
  };
  
  