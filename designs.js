// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var submitSize;

submitSize = $('input[type="submit"]')

submitSize.click(function(event) {
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
	
	// Select size input
	var pixelCanvas, gridHeight, gridWidth, rows, cell;
	
	pixelCanvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWidth').val();
	
	pixelCanvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	pixelCanvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = pixelCanvas.find('td');
	
	// When cell is clicked, color of the cell is changed
	cell.click(function() {
		var color;
		color = $("#colorPicker").val();
		$(this).attr('background-color', color);
	});
	
}
