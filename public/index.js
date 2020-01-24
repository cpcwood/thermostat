
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
      updateJSON();
    });

    $('#dropTemp').click(function(){
      thermostatController.thermostatModel.decrease();
      thermostatController.updateThermostatView();
      updateJSON();
    });

    $('#reset').click(function(){
      thermostatController.thermostatModel.reset();
      thermostatController.updateThermostatView();
      updateJSON();
    });

    $('#ecoToggle').click(function(){
      thermostatController.thermostatModel.togglePowerSaving();
      updateJSON();
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

    // Update page values upon load

    function loadJSON(callback) {
      var xobj = new XMLHttpRequest();
            xobj.overrideMimeType("application/json");
        xobj.open('GET', 'my_data.json', true); // Replace 'my_data' with the path to your file
        xobj.onreadystatechange = function () {
              if (xobj.readyState == 4 && xobj.status == "200") {
                // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
                callback(xobj.responseText);
              }
        };
      xobj.send(null);
    }

    loadJSON(function(json) {
      var data = JSON.parse(json)
      thermostatController.thermostatModel.temperature = data['temperature']
      thermostatController.thermostatModel.powerSaving = data['eco']
      thermostatController.updateThermostatView();
    });

    var updateJSON = function(){
      loadJSON(function(json) {
        var data = JSON.parse(json)
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '/temperature', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
            temperature: thermostatController.thermostatModel.temperature,
            eco: thermostatController.thermostatModel.powerSaving
        }));
      })
    }



    //  Update on page load

    console.log(thermostatController.thermostatModel.temperature)

    // updatePageOnLoad()


  })
})
