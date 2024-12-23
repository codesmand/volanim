// Define the listener function
const listener = (context, handler) => evt => {
  // Perform some action using the context, handler, and evt
  console.log(`Event "${evt.type}" occurred in ${context}`);
  handler(evt);
};

// Create a listener for a specific context and event handler
const myContext = "someContext";
const myEventHandler = event => {
  console.log(`Handling event: ${event.type}`);
};

const myListener = listener(myContext, myEventHandler);

// Attach the listener to an element
const myElement = document.getElementById("myElement");
myElement.addEventListener("click", myListener);
