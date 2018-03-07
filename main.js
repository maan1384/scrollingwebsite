// document.getElementById('counter').innerHTML = "hello";

//initialize - set-up variables
var board = document.getElementById('board');
var fromLeft = window.pageXOffset;


board.innerHTML = "Scroll to Start";

//pseudocode - when the user is scrolling update the variable fromTop and make decisions to change stuff on the pageYOffset
//window.scroll<- boolean (yes/no)
window.onscroll = function() {
  //when the user scrolls do all of this...

  fromLeft = window.pageXOffset
  //test if it works
  console.log(fromLeft);

  board.style.left = 700 + fromLeft + "px";

  if (fromLeft > 0){
    board.innerHTML = "";
    board.style.backgroundImage="url(images/skate.png)";
  } else {
    board.innerHTML = "Scroll to Start";
    board.style.backgroundImage= "url(skateboard.png)";
  }
}
