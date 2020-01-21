describe("Thermostat Model", function() {

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
});
