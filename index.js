/* Given Code, don't edit */
let greeting = document.getElementById('greeting')
function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}
function displayMessage(msg){
  greeting.innerText = msg 
}


function greet(timeString){
const hour = parseInt(timeString)
if (hour < 12) return "Good Morning"
if (hour > 17) return "Good Evening"
return "Good Afternoon"

}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
