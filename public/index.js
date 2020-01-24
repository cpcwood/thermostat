"use strict"

window.addEventListener("load", function() {
  var thermostatDisplay = document.getElementById('thermostat');

  // Creates new controller when webpage is opened
  var thermostatController = new ThermostatController(new ThermostatModel(), new ThermostatView(thermostatDisplay));
});
