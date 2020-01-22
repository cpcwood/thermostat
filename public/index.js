"use strict"

window.addEventListener("load", function() {
  var thermostatDisplay = document.getElementById('thermostat');
  var powerSavingStatus = document.getElementById('power-saving-status');
  var usage = document.getElementById('usage');
  var increaseTempButton = document.getElementById('increase');
  var decreaseTempButton = document.getElementById('decrease');
  var resetTempButton = document.getElementById('reset');
  var powerSavingToggleButton = document.getElementById('power-saving-toggle');

  // Creates new controller when webpage is opened
  new ThermostatController(new ThermostatModel(), new ThermostatView(thermostatDisplay), increaseTempButton);
});
