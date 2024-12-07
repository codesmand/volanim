// Function that handles either a direct value or a reference to a signal
function signalRefOrValue(input) {
    // Check if input is a signal reference or a direct value
    if (typeof input === 'object' && input.isSignal) {
        // Process the signal reference to get the current value
        return input.getValue();
    } else {
        // Return the direct value
        return input;
    }
}

// Example filter object with a 'gt' property
const filter = {
    gt: 10  // This could be a numeric threshold or a signal reference
};

// Use the function to determine the value of 'val'
const val = signalRefOrValue(filter.gt);

console.log(val);  // Outputs: 10
