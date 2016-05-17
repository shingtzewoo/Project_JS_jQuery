var buildSquares = function () {
  var count = 256;
  for (var i = 0; i < count; i++) {
  $("#container").append($("<div/>").addClass('square'));
  };
}

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
      }
    };

$(document).ready(function() {
  buildSquares();
  $("#container").on('mouseenter', 'div', function() {
    event.preventDefault();
    $(this).addClass('black');
  });
  $("#clear").on('click', function() {
    event.preventDefault();
    $('.square').unbind();
    $("div").removeClass('black');
    $('div > div').remove();
    buildSquares2();
  });
});

