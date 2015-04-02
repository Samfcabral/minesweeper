$(function () {

  var setBoard = function (boardSize) {
    createDivs(boardSize);
    var x = setMines(boardSize);
    var boxes = $('.box');
    console.log(boxes);
    $('.box').click(function (e){
      var box = e.target;
      var id = Array.prototype.indexOf.call(boxes,box);
      console.log(id);
      console.log(x[id]);
      console.log(e.target);
    });
  }

  // Create divs according to board size.
  var createDivs = function(num) {
    var height = 600 / num - 1;
    var width = 600 / num - 1;
    console.log(height);
    console.log(width);
    for (var i = 1; i <= (num * num); i++) {
      $(".square").append("<div class='box' id='div_" + i + "' style='height:" + height + "px; width:" + width + "px'></div>");
    }
  }

  // Set Initial Array based on board size
  var setMines = function (boardSize) {
    var initialArr = [];
    for (var i = 0; i < boardSize; i++) {
      initialArr.push(1);
    }
    for (var j = 0; j < ((boardSize * boardSize) - boardSize); j++) {
      initialArr.push(0);
    }
    shuffle(initialArr);
    console.log(initialArr);
    return initialArr;
  };


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
}

setBoard(10);

});