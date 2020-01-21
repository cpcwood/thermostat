describe("Thermostat", function() {

  var dummyElement = document.createElement('div');

  document.getElementById = jasmine.createSpy('thermostat').and.returnValue(dummyElement);

  it("starts at 20", function() {
    expect(thermostat.temperature).toBe(20);
  });
})
