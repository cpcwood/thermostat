function ThermostatView(thermostatElement){
  this._thermostatElement = thermostatElement

  // Update element with new temperature
  this.display = function(temperature){
    this._thermostatElement.innerHTML = temperature;
  }
}
