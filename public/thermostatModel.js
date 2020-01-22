function ThermostatModel(){
  var min = 10;
  this.powerSaving = true;
  this.temperature = 20;

  this.increase = function(){
    if (this.temperature < this._maxTemp()){ this.temperature++; }
  };
  this.decrease = function(){
    if (this.temperature > min){ this.temperature--; }
  }
  this.togglePowerSaving = function(){
    this.powerSaving = !this.powerSaving;
  }
  this._maxTemp = function(){
    return (this.powerSaving ? 25 : 32);
  }
}
