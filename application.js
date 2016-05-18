//the default option for building the sketch pad when the page first loads;
var buildSquares = function () {
  var count = 256;
  for (var i = 0; i < count; i++) {
  $("#container").append($("<div/>").addClass('square'));
  };
}
//when mouse hovers over squares, changes their color into a random color;
var randomColor = function () {
  $('#container > div').mouseenter(function() {
    $(this).css('background-color', "#"+((1<<24)*Math.random()|0).toString(16));
  });
}
//when mouse hovers over squares, changes their color into black;
var blackColor = function () {
  $("#container").on('mouseenter', 'div', function() {
    $(this).addClass('black');
  });
}
//this function prompts the user how many squares they would like for their grid
var buildSquares2 = function () {
      var ask = parseInt(prompt("How many squares per side would you want for your new sketch grid? (Max = 64)", "16"));
      var value = ask * ask;
      var width = $('#container').width() / ask;
      var height = $('#container').height() / ask;
      if (ask < 65 && ask > 1) {
        for (var i = 0; i < value; i++) {
          $("#container").append($("<div/>").css({
            'height': height,
            'border-width': '0.5px',
            'border-style': 'dotted',
            'border-color': 'black',
            'display': 'inline-block',
            'float': 'left',
            'width': width,
            'padding': '0',
            'margin': '0'
          }));
        };
      }
      else {
        alert("Please enter a number between 1 and 64");
        var ask = parseInt(prompt("How many squares per side would you want for your new sketch grid? (Max = 64)", "16"));
      }
    };

$(document).ready(function() {
  // the default, 16 x 16 grid, squares will be colored black when mouse enters
  buildSquares();
  blackColor();
  // When the #clear button is clicked, a new sketch grid can be generated and when the mouse enters, the color black will be generated for the background-color of that particular square.
  $("#clear").on('click', function() {
    event.preventDefault();
    $('div > div').remove();
    buildSquares2();
    blackColor();
  })
// When #random button is clicked, a new sketch grid can be generated and when the mouse enters, random colors will be generated for the background-color of that particular square.
  $("#random").on('click', function() {
    event.preventDefault();
    $('div > div').remove();
    buildSquares2();
    randomColor();
  })
});

