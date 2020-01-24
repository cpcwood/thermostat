"use strict"

window.addEventListener("load", function() {
  var thermostatDisplay = document.getElementById('getCurrentTemp');

  // Creates new controller when webpage is opened
  window.thermostatController = new ThermostatController(new ThermostatModel(), new ThermostatView(thermostatDisplay));


  // jQuery
  // =======================

  $(document).ready(function(){

    // Actions

    $('#raiseTemp').click (function(){
      thermostatController.thermostatModel.increase();
      thermostatController.updateThermostatView();
    });

    $('#dropTemp').click(function(){
      thermostatController.thermostatModel.decrease();
      thermostatController.updateThermostatView();
    });

    $('#reset').click(function(){
        thermostatController.thermostatModel.reset();
        thermostatController.updateThermostatView();
    });

    $('#ecoToggle').click(function(){
      thermostatController.thermostatModel.togglePowerSaving()
    })

    $('#queryUsage').click(function(){
      $('#queryUsage').text(thermostatController.thermostatModel.energyUsage())
    })

    $('#current-temperature').change(function() {
      updateFont()
    })

    function updateFont() {
      $("body").css("font-family", $('#current-temperature').val());
    }

    $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric',
    function(data) {
      $('#local-temp').text(data.main.temp);
    })

    $('#select-city').submit(function(event) {
      event.preventDefault();
      var city = $('#current-city').val();

      $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric',
        function(data) {
          $('#local-temp').text(data.main.temp);
        })

    })

    //  Update on page load

    thermostatController.updateThermostatView();

  })
})
