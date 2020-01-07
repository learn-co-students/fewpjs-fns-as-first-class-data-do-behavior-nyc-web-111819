/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

function greet(str){
  let string = parseInt(str.split(0,2))
  if(string < 12){
    return 'Good Morning'
  }
  if(string > 12 && string < 17){
    return 'Good Afternoon'
  }
  if(string > 17){
    return 'Good Evening'
  }
}
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}
