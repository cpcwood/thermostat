"use strict"

describe("Thermostat Model", function() {

  var thermostatModel;

  beforeEach(function() {
    thermostatModel = new ThermostatModel();
  });

  describe("::new", function() {
    it("Should create new ThermostatModel instance", function() {
      expect(thermostatModel instanceof ThermostatModel).toBe(true);
    });
    it("Temperature should initialize at 20", function() {
      expect(thermostatModel.temperature).toEqual(20);
    });
  });

  describe("#temperature", function() {
    it("Returns value of current temperature", function() {
      expect(thermostatModel.temperature).toEqual(20);
    });
  });

  describe("#increase", function() {
    it("Increases temperature property by 1", function() {
      thermostatModel.increase();
      expect(thermostatModel.temperature).toEqual(21);
    });
    it("Powersaving mode is on by default", function() {
      expect(thermostatModel.powerSaving).toEqual(true);
    });
    it("Powersaving mode is can be toggled", function() {
      thermostatModel.togglePowerSaving();
      expect(thermostatModel.powerSaving).toEqual(false);
    });
    it("Max temperature is 25 if powersaving mode on", function() {
      for (var i = 0; i < 6; i++) thermostatModel.increase();
      expect(thermostatModel.temperature).toEqual(25);
    });
    it("Max temperature is 32 if powersaving mode off", function() {
      thermostatModel.togglePowerSaving();
      for (var i = 0; i < 13; i++) thermostatModel.increase();
      expect(thermostatModel.temperature).toEqual(32);
    });
  });

  describe("#decrease", function() {
    it("Decreases temperature property by 1", function() {
      thermostatModel.decrease();
      expect(thermostatModel.temperature).toEqual(19);
    });
    it("Has minimum temperature limit of 10", function() {
      for (var i = 0; i < 11; i++) thermostatModel.decrease();
      expect(thermostatModel.temperature).toEqual(10);
    });
  });

  describe("#reset", function() {
    it("Resets temperature back to default", function() {
      thermostatModel.increase();
      thermostatModel.reset();
      expect(thermostatModel.temperature).toEqual(20);
    });
  });

  describe("#currentEnergyUsage", function() {
    it("Temperature less than 18 returns 'low-usage'", function() {
      for (var i = 0; i < 3; i++) thermostatModel.decrease();
      expect(thermostatModel.energyUsage()).toEqual("low-usage");
    });
    it("Temperature 18 to 24 returns 'medium-usage'", function() {
      expect(thermostatModel.energyUsage()).toEqual("medium-usage");
      for (var i = 0; i < 2; i++) thermostatModel.decrease();
      expect(thermostatModel.energyUsage()).toEqual("medium-usage");
      for (var i = 0; i < 6; i++) thermostatModel.increase();
      expect(thermostatModel.energyUsage()).toEqual("medium-usage");
    });
    it("Temperature greater than 24 returns 'high-usage'", function() {
      for (var i = 0; i < 5; i++) thermostatModel.increase();
      expect(thermostatModel.energyUsage()).toEqual("high-usage");
    });
  });

  describe("#powerSavingMode", function() {
    it("Returns 'on' if on", function() {
      expect(thermostatModel.powerSavingMode()).toEqual('On')
    });
    it("Returns 'off' if off", function() {
      thermostatModel.togglePowerSaving();
      expect(thermostatModel.powerSavingMode()).toEqual('Off')
    });
  });

});
