class HospitalEmployee {
    constructor(name){
        this._name = name;
        this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    takeVacationDays(daysOff){
      this._remainingVacationDays = this._remainingVacationDays -= daysOff
    }
    }
    
    class Doctor {
      constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
        this._insurance = insurance;
        takeVacationDays();
      }}
    
    class Nurse {
      constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
        this._insurance = insurance;
        takeVacationDays();
      }}