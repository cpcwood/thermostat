describe("Thermostat View", function() {

  beforeEach(function() {
    thermostatDivMock = {};
    thermostatView = new ThermostatView(thermostatDivMock);
  });

  describe("::new", function() {
    it("should create new ThermostatView instance", function() {
      expect(thermostatView instanceof ThermostatView).toBe(true);
    });
  });

  describe("#display", function() {
    it("should set innerHTML of thermostatElement to passed var", function() {
      thermostatView.display(30);
      expect(thermostatDivMock.innerHTML).toBe(30);
    });
  });

});
