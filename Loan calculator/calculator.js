window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});  

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let Values = {
    amount: 9000,
    years: 4,
    rate: 3}
  let xAmount = document.getElementById("loan-amount");
  xAmount.value = Values.amount
  let xYears = document.getElementById("loan-years");
  xYears.value = Values.years
  let xRate = document.getElementById("loan-rate");
  xRate.value = Values.rate

  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let inputValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(inputValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let payment = (values.rate/100) / 12;
  let num = Math.floor(values.years * 12);
  return((payment * values.amount)
  /
  (1 - Math.pow((1 + payment), -num)))
  .toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
 let payment = document.getElementById("monthly-payment")
payment.innerText = "$" + monthly
}
