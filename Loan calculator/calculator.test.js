
it('should pull values from the DOM', function(){
  let amount = document.getElementById('loan-amount')
  expect(amount).toHaveClass('calc-container')
})







it('should return NaN', function () {
    let values = {
        amount: 9000,
        years: 8,
        rate: 3.7
    }
    expect(calculateMonthlyPayment(values)) .not.toEqual('NaN');
})


it('should calculate the monthly rate correctly', function() {
    const values = {
      amount: 9000,
      years: 4,
      rate: 3
    };
    expect(calculateMonthlyPayment(values)).toEqual('199.21');
  });

  it("should return a result with 2 decimal places", function() {
    const values = {
      amount: 8300,
      years: 3,
      rate: 4.6
    };
    expect(calculateMonthlyPayment(values)).toEqual('247.27');
  });