"use strict"

function ThermostatController(thermostatModel, thermostatView) {
  this.thermostatModel = thermostatModel;
  this.thermostatView = thermostatView;

  this.updateThermostatView = function() {
    this.thermostatView.display(this.thermostatModel.temperature);
  }

  // run update thermostat view upon construction of thermostatcontroller, i.e. opening of webpage
  this.updateThermostatView();
}
