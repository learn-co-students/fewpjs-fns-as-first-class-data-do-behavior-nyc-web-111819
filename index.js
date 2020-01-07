/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeString) {
  const parsedTime = parseInt(timeString, 10)
  if (parsedTime < 12) {
  return "Good Morning"
  }
  else if (parsedTime > 17) {
    return "Good Evening"
  }
  else {
    return "Good Afternoon"
  }
}

function displayMessage(msg) {
  const el = document.getElementById("greeting")
  el.innerText = msg
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
