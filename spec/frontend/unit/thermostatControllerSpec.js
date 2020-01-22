describe("Thermostat Controller", function() {

  var thermostatModelMock,
      thermostatViewMock,
      thermostatController;

  beforeEach(function() {

    thermostatModelMock = { temperature: 20 };

    thermostatViewMock = jasmine.createSpyObj('thermostatView', ['display'])

    new ThermostatController(thermostatModelMock, thermostatViewMock);
  });

  describe("::new", function() {
    it("Should set thermostatView to initial temperature", function() {
      expect(thermostatViewMock.display).toHaveBeenCalledWith(20);
    });
  });
});
