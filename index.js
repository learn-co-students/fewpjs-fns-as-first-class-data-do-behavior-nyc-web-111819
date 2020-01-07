/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(str){
  let string = parseInt(str)
  if (string < parseInt("12:00"))
    return 'Good Morning'
  else if (string > parseInt('17:00'))
    return 'Good Evening'
  else
    return 'Good Afternoon'
}

// function greet(str){
//   let string = parseInt(str.split(0,2))
//   if(string < 12)




/* Write your implementation of displayMessage() */
function displayMessage(testContent){
  document.getElementById("greeting").innerText = testContent
  


}

//   describe("displayMessage() function", () => {
//     it("updates the DOM with an appropriate message", () => {
//       let testContent = "TEST"
//       displayMessage(testContent)
//       let content = document.getElementById("greeting").innerText
//       expect(content).to.equal(testContent)
//     })
//   })
// })

// The displayMessage() function
// The displayMessage function should take one argument, a String.

// When the function runs it should update the text inside the #greeting 
// node with the content of the first argument.

// It does not return anything.