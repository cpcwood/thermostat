"use strict"

function ThermostatController(thermostatModel, thermostatView, increaseTempButton) {
  this._thermostatModel = thermostatModel;
  this._thermostatView = thermostatView;
  this._increaseTempButton = increaseTempButton;

  var self = this

  this._updateThermostatView = function() {
    this._thermostatView.display(this._thermostatModel.temperature);
  }

  this._increaseTempButton.addEventListener("click", function() {
    self._thermostatModel.increase();
    self._updateThermostatView();
  });

  // run update thermostat view upon construction of thermostatcontroller, i.e. opening of webpage
  this._updateThermostatView();
}
