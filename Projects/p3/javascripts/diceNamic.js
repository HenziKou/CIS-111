// jshint esversion: 6

//1. when the button gets clicked, Who you gonna call
let clickHandler = function() {
  //a. select the img element and assign it to a variable, imgElem
  //

  let imgElem = document.querySelector("img");
  //let imgArr = document.querySelectorAll("img");
  //img[0].setAttribute("src", imgURL);
  //img[1].setAttribute("src", imgURL2);


  //b. get a random number 1 .. 6 and assign it to a variable, n
  //
  //console.log(n);

  var n = Math.floor(Math.random() * 6) + 1;
  var m = Math.floor(Math.random() * 6) + 1;

  console.log("die" + n + ".png");
  console.log("die" + m + ".png");

  let imgURL = `images/die${n}.png`;
  let imgURL2 = `images/die${m}.png`;

  console.log(imgURL);
  console.log(imgURL2);

  //c. set the imgElem's src property
  //

  document.querySelector("img[id='lead-photo']").setAttribute("src", imgURL);
  document.querySelector("img[id='lead-photo2']").setAttribute("src", imgURL2);

  //d. set the imgElem's style.width property
  //

  imgElem.style.width = "160px";
  imgElem.style.height = "160px";
  //imgArr.style.width = "160px";
  //imgArr.style.height = "160px";
};

//2. register the click handler after the DOM is complete
window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", clickHandler);
});
