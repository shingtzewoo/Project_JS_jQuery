var buildSquares = function () {
  var i = 0;
  var count = 256;
  for (var i = 0; i < count; i++) {
  $("#container").append($("<div class='square'/>"));
  };
}

$(document).ready(function() {
  buildSquares();
  $("#container").on('mouseenter', '.square', function() {
    event.preventDefault();
    $(this).addClass('black');
  });
});

