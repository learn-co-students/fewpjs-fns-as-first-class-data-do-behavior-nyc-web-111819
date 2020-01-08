
function handleClick(e) {
  console.log("This is a click", e)
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

const greet = function(time){
  if (parseInt(time) < 12){
    return "Good Morning";
  }
    else if (parseInt(time) > 17){
      return "Good Evening";
    } else {
        return "Good Afternoon";
      }
      
  }

  function displayMessage(string){
    let greeting = document.getElementById('greeting')
    greeting.innerText = string
  }

