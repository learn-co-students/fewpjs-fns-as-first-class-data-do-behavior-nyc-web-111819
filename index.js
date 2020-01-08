/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str) {
  let divider = str.indexOf(':');
  let hour = parseInt(str.slice(0, divider));
  console.log('divider equals', divider)

  if (hour < 12) {
    return "Good Morning";
  } else if (hour < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
};

/* Write your implementation of displayMessage() */
function displayMessage(str) {
  document.getElementById('greeting').innerText = str;
};