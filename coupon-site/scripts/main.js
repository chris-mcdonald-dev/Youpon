// Add a "click" event listener to the image. Call the switchCouponImage function when the image is clicked.
const myImage = document.querySelector("img");
myImage.addEventListener("click", switchCouponImage)

function switchCouponImage() {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/coupon-59.png") {
    myImage.setAttribute("src", "images/coupon-60.png");
  } else {
    myImage.setAttribute("src", "images/coupon-59.png");
  }
}

// Select the button and heading elements. We'll switch the name in the heading when the button is clicked.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

// Add a "click" event listener to the button. Call the setUserName function when the button is clicked.
myButton.addEventListener("click", setUserName)

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Youpons is cool, ${myName}`;
  }
}
  
// When the user first visits the site, ask them for their name and store it in local storage.
if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Youpons is cool, ${storedName}`;
}
  