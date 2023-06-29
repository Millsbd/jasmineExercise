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
  const values = { amount: 50000, years: 20, rate: 5};
  const amountInput = document.querySelector("#loan-amount");
  amountInput.value = values.amount;
  // defines the user input amount and sets it equal to the assigned object in our values variable. 
  const yearsInput = document.querySelector('#loan-years');
  yearsInput.value = values.years;
  const rateInput = document.querySelector('#loan-rate');
  rateInput.value = values.rate;
  // assings the inputs to variables from the DOM, then adds in values to the imputs. Goes from blank to conatining the values when run. 
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const n = Math.floor(values.years  * 12);
  let monthlyPayment = (monthlyRate * values.amount) / (1 - Math.pow((1 + monthlyRate), -n));
  return monthlyPayment.toFixed(2);

  // the values for rate, amount, and years are passed into this and it uses the monthly payment equation to calculate the monthly payment then returns the value to 2 decimal places
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyInput = document.querySelector('#monthly-payment');
  monthlyInput.innerText = `$${monthly}`;
}
// using a template literal to display the mothly payment on webpage
