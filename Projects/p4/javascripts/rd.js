// jshint esversion: 6

//helper function
let rollDoubles = n => {
  let d1, d2;
  let count = 0;

  //roll until double n's
  do {
    d1 = Math.floor(Math.random() * 6) + 1;
    d2 = Math.floor(Math.random() * 6) + 1;
    count++;
  } while (d1 + d2 != 2 * n);

  return count;
};

//when the button gets clicked, Who you gonna call
let clickHandler = function() {
  let count;

  //1. get value for n entered by user
  let n = Number(document.querySelector("input").value);

  //2. roll double n's
  count = rollDoubles(n);

  //3. select img elements
  let imgArr = document.querySelectorAll("img");

  //4. set both img elements src property to display n-dot die
  imgArr[0].setAttribute("src", `images/die${n}.png`);
  imgArr[1].setAttribute("src", `images/die${n}.png`)

  //5. add rollCount to empty div on web page
  document.getElementById('output').innerHTML = "Number of Rolls = " + count;
};

//register the handler after the DOM is complete
window.addEventListener("load", function() {
  //select the button and register the handler
  document.querySelector("button").addEventListener("click", clickHandler);
});
