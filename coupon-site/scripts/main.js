// Add a "click" event listener to the image. Call the switchCouponImage function when the image is clicked.
const myImage = document.querySelector("img");
myImage.addEventListener("click", switchCouponImage)

function switchCouponImage() {
  const originalImage = "images/coupon-59.png";
  const secondImage = "images/coupon-60.png";
  // If the current image source is the original image, change it to the second image. Otherwise, change it to the original image.
  myImage.src = myImage.src === originalImage ? secondImage : originalImage;
}

// Select the button and heading elements. We'll switch the name in the heading when the button is clicked.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Add a "click" event listener to the button. Call the setUserName function when the button is clicked.
myButton.addEventListener("click", setUserName)

// Select the name input element and store the original border color. We'll later change this color to red if the user doesn't enter a name.
const userNameInput = document.querySelector("input");
const nameInputOriginalBorderColor = userNameInput.style.borderColor;

function setUserName(event) {
  // Form elements refresh the page by default when the user input is submitted. Prevent the form from submitting.
  event?.preventDefault(); 

  // If the name input is empty, change the border color to red and stop the function from continuing.
  const myName = userNameInput.value;
  if (!myName) {
    userNameInput.style.borderColor = "red";
    return
  }
  localStorage.setItem("name", myName);
  myHeading.textContent = `Youpons is cool, ${myName}`;
  // Reset the border color to the default color.
  userNameInput.style.borderColor = nameInputOriginalBorderColor;
}
  
// When the user first visits the site, ask them for their name and store it in local storage.
function onFirstVisit() {
  const nameSavedOnPreviousVisit = localStorage.getItem("name")
  if (!nameSavedOnPreviousVisit) {
    setUserName();
  }
}

onFirstVisit()