"use strict"

window.addEventListener("load", function() {
  var thermostatDisplay = document.getElementById('thermostat');

  // Creates new controller when webpage is opened
  window.thermostatController = new ThermostatController(new ThermostatModel(), new ThermostatView(thermostatDisplay));


  // jQuery
  // =======================

  $(document).ready(function(){

    // Update fuctions

    // var updatePowerSavingMode = function(){
    //   $('#power-saving-status').text(function(){
    //     thermostatController.thermostatModel.powerSavingMode()
    //   })
    // }

    // $('#power-saving-status').text(function(){
    //   thermostatController.thermostatModel.powerSavingMode()
    // })

    // var updatePowerUsage = function(){
    //   $('#usage').text(function(){
    //     thermostatController.thermostatModel.energyUsage()
    //   })
    // }

    // $('#usage').text(function(){
    //   thermostatController.thermostatModel.energyUsage()
    // })

    console.log(thermostatController)



    // jQuery events

    $('#increase').click(function(){
      thermostatController.thermostatModel.increase()
      thermostatController.updateThermostatView()
    });

    $('#decrease').click(function(){
      thermostatController.thermostatModel.decrease()
      thermostatController.updateThermostatView()
    });

    $('#reset').click(function(){
      thermostatController.thermostatModel.reset()
      thermostatController.updateThermostatView()
    });

    $('#toggle').click(function(){
      thermostatController.thermostatModel.togglePowerSaving()

    });

    // Inital page setup
    // updatePowerSavingMode()
    // updateEnergyUsage()

  });




});
