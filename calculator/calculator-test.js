
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 50000,
    years: 10,
    rate: .10,
  };
  expect(Math.floor(calculateMonthlyPayment(values))).toEqual(418);
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 50000,
    years: 10,
    rate: 0.10,
  };
  expect(calculateMonthlyPayment(values)).toBeCloseTo(418.77,2)
});


