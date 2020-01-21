function ThermostatController(thermostatModel, thermostatView) {
  this._thermostatModel = thermostatModel;
  this._thermostatView = thermostatView;

  // run update thermostat view upon construction of thermostatcontroller, i.e. opening of webpage
  this._updateThermostatView();
};

ThermostatController.prototype = {
  _updateThermostatView: function() {
    this._thermostatView.display(this._thermostatModel.temperature);
  }
};
