// filename: utility.js
// wrapper function for querySelector
export function qs(selector) {
    return document.querySelector(selector);
}

// create an alert at the top of the page for 3 seconds
// requires the message to be displayed and the time in milliseconds.
export function alertMessage(message, duration=3000) {
  const alert = document.createElement("p");
  alert.innerHTML = message;
  alert.setAttribute(
    "style",
    "background-color:lightpink; border: 1px solid red; position:absolute; top:0; left:0; right:0; padding: 1em;"
  );
  document.body.appendChild(alert);
  setTimeout(function () {
    document.body.removeChild(alert);
  }, duration);
}