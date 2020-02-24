// jshint esversion: 6

//1. when the button gets clicked, Who you gonna call
let clickHandler = function() {
  //a. select the img element and assign it to a variable, imgElem
  //

  let imgElem = document.querySelector("img");

  //b. get a random number 1 .. 6 and assign it to a variable, n
  //
  //console.log(n);

  var n = Math.floor(Math.random() * 6) + 1;
  console.log("pic" + n + ".png");
  let imgURL = `images/pic${n}.png`;
  console.log(imgURL);

  //c. set the imgElem's src property
  //

  document.querySelector("img").setAttribute("src", imgURL);

  //d. set the imgElem's style.width property
  //

  imgElem.style.width = "160px";
  imgElem.style.height = "160px";

};

//2. register the click handler after the DOM is complete
window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", clickHandler);
});
