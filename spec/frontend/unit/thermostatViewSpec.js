"use strict"

describe("Thermostat View", function() {

  var thermostatDivMock,
      thermostatView;

  beforeEach(function() {
    thermostatDivMock = {};
    thermostatView = new ThermostatView(thermostatDivMock);
  });

  describe("::new", function() {
    it("Should create new ThermostatView instance", function() {
      expect(thermostatView instanceof ThermostatView).toBe(true);
    });
  });

  describe("#display", function() {
    it("Should set innerHTML of thermostatElement to passed var", function() {
      thermostatView.display(30);
      expect(thermostatDivMock.innerHTML).toBe(30);
    });
  });

});
