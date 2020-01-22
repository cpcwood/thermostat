function ThermostatModel(){
  var defaultTemp = 20;
  var min = 10;
  this.powerSaving = true;
  this.temperature = defaultTemp;

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
  this.reset = function(){
    this.temperature = defaultTemp;
  }
}
