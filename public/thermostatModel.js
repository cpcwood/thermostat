"use strict"

function ThermostatModel(){
  var defaultTemp = 20;
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
  this.reset = function(){
    this.temperature = defaultTemp;
  }
  this.energyUsage = function(){
    if (this.temperature < 18){
      return "low-usage";
    }
    else if(this.temperature < 25){
      return "medium-usage";
    }
    else{
      return "high-usage";
    }
  }
  this.powerSavingMode = function() {
    return (this.powerSaving ? "On" : "Off")
  }
}
