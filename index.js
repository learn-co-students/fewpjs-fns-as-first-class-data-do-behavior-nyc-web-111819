/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

 function greet(greetingString) {
    const newGreeting = greetingString.split(':')[0]
    const newGreetInt = parseInt(newGreeting)
   
    if (newGreetInt < 12)
    return "Good Morning"
    else if (newGreetInt < 17)
    return "Good Afternoon"
    else
    return "Good Evening"
 }


function displayMessage(messageString){
  const newMessage = document.getElementById('greeting')
  newMessage.innerText = messageString
}

