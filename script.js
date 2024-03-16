// 1. Personalized Greeting Input

//I use a function to change the text of the paragraph whenever the user clicks the button.
function changeText() {
  //First, I declare a variable that will contain the DOM manipulation for easier visibility
  let firstName =
    //Second, I use the getElementById to reference the input element in the HTML file
    document.getElementById("fname").value;
  //Third, I use the getElementByID to reference the paragraph element in the HTML file, this is the text that is going to change.
  document.getElementById("greetings").innerHTML =
    //Finally, I write the new text that is going to appear using strings and the variable created at the start.
    "Greetings, " + firstName + ".";
}

// 2. Element Movement Across Screen:

// First, I use an integer variable to store current position of the element
let currentPosition = 0;
// Second, I use an integer variable to determine the direction of the element left to right
let direction = 1;

// I use a function to move the element whenever I hover the element
function moveOpposite() {
  // I declare a variable that is going to contain the moving element
  const element = document.getElementById("movingdiv");
  // I start an operation: from position 0, the element is going to be pushed from the left 500 px multiplied by the direction.
  currentPosition += 500 * direction;
  element.style.left = currentPosition + "px";
  // I added a conditional to stablish that, if the element reaches the right edge of the screen, the direction will be multiplied by a negative number, which means the element will change its direction.
  if (
    currentPosition > window.innerWidth - element.offsetWidth ||
    currentPosition <= 0
  ) {
    direction *= -1;
  }
}

// 3. Text Color Change Timer:

// I use a variable that is going to contain the text item that is going to change its color.
let colorText = document.getElementById("textcolor");
// I colored it red with the style property
colorText.style.color = "red";

// I created a function in which, if the text color is red, it will change to blue, and if it's blue, it will change to red.
function changeColor() {
  if (colorText.style.color == "red") {
    colorText.style.color = "blue";
  } else if (colorText.style.color == "blue") {
    colorText.style.color = "red";
  }
}

// I used the setInterval function to change the color every 30 seconds
window.setInterval(changeColor, 30000);

// 4. Bonus- Change background color:

// I use a variable that is going to contain the button that is going to be used to change the background color to pink.
let colorButton = document.getElementById("buttoncolor");

// I created a function in which whenever you click the button, it will change to background color to pink.
function changeColorBackground() {
  document.getElementById("background").style.backgroundColor = "pink";
}
