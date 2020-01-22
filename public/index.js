"use strict"

// takes the thermostat value from homepage.erb and assigns to variable
var thermostatDisplay = document.getElementById('thermostat');

// Creates new controller when webpage is opened
new ThermostatController(new ThermostatModel(), new ThermostatView(thermostatDisplay));
