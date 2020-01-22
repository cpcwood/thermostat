"use strict"

describe("Thermostat Controller", function() {

  var thermostatModelMock,
      thermostatViewMock,
      increaseTempButtonMock,
      increaseClickHandler;

  beforeEach(function() {

    // console.log(inClickHandler);

    increaseTempButtonMock = { addEventListener: null }; // so event listener doesn't fail
    // add event listener requires two arguments, event and function, inclick handler spys on the mock addEventListener and passes through its ClickHandler to be assigned to increaseClickHandler, to mock a click being when click increaseClickHandler
    spyOn(increaseTempButtonMock, "addEventListener").and.callFake(function(_, inClickHandler) {
      increaseClickHandler = inClickHandler;
    });

    thermostatModelMock = { temperature: 20, increase: null};
    spyOn(thermostatModelMock, "increase").and.returnValue(null);

    thermostatViewMock = jasmine.createSpyObj('thermostatView', ['display'])

    new ThermostatController(thermostatModelMock, thermostatViewMock, increaseTempButtonMock);
  });

  describe("::new", function() {
    it("Should set thermostatView to initial temperature", function() {
      expect(thermostatViewMock.display).toHaveBeenCalledWith(20);
    });
  });


  describe("Clicking increase button", function() {
    it("Increase button increases temperature", function() {
      increaseClickHandler();
      expect(thermostatModelMock.increase).toHaveBeenCalledTimes(1);
    });
    it("Increase button updates view", function() {
      increaseClickHandler();
      expect(thermostatViewMock.display).toHaveBeenCalledTimes(2);
    });
  });
});
