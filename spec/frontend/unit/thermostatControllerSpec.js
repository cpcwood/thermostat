"use strict"

describe("Thermostat Controller", function() {

  var thermostatModelMock,
      thermostatViewMock,
      increaseClickHandler,
      thermostatController;

  beforeEach(function() {

    thermostatModelMock = { temperature: 20}
    thermostatViewMock = jasmine.createSpyObj('thermostatView', ['display'])

    thermostatController = new ThermostatController(thermostatModelMock, thermostatViewMock);
  });

  describe("::new", function() {
    it("Should set thermostatView to initial temperature", function() {
      expect(thermostatViewMock.display).toHaveBeenCalledWith(20);
    });
  });
});
