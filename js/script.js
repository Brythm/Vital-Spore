// Get all the increment buttons
const incrementBtns = document.querySelectorAll('.increment');

// Get all the decrement buttons
const decrementBtns = document.querySelectorAll('.decrement');

// Get all the count inputs
const countInputs = document.querySelectorAll('.count');

// Set the minimum and maximum values
const minValue = 1;
const maxValue = 25;

// Add event listeners to each increment button
incrementBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Get the current value and convert it to a number
    let currentValue = parseInt(countInputs[index].value);

    // Increment the value if it's less than the maximum
    if (currentValue < maxValue) {
      currentValue++;
      countInputs[index].value = currentValue.toString();
    }
  });
});

// Add event listeners to each decrement button
decrementBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    // Get the current value and convert it to a number
    let currentValue = parseInt(countInputs[index].value);

    // Decrement the value if it's greater than the minimum
    if (currentValue > minValue) {
      currentValue--;
      countInputs[index].value = currentValue.toString();
    }
  });
});

