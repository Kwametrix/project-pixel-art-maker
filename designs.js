// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function makeGrid(grid) {
  var row_input = $('#input_height').val();
  var col_input = $('#input_width').val();
  for (var i = 1; i <= row_input; i++) {
   $('table').append("<tr></tr>");
   for (var j = 1; j <= col_input; j++) {
    $('tr:last').append("<td></td>");
    $('td').attr("class", 'cells');
   }
  }
  grid.preventDefault();
});


$('.cells').click(function (event) {
  var paint = $('#colorPicker').val();
  $(event.target).css('background-color', paint);
});


