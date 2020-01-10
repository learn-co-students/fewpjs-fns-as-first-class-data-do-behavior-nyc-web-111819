/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(timestring) {
  timestring = parseInt(timestring)
  if (timestring > 17) {
    return "Good Evening"
  } else if (timestring > 12){
    return "Good Afternoon"
  } else {
    return "Good Morning"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str) {
  const timeString = document.getElementById('greeting')
  timeString.innerText = str
}