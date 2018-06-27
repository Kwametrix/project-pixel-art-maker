function makeGrid() {
	console.log('About to create grid');
	// Select size input
	var canvas, gridHeight, gridWidth, rows, cell;
	
	canvas = $('#pixelCanvas');
	gridHeight = $('#inputHeight').val();
	gridWidth = $('#inputWidth').val();
	
	canvas.children().remove()
	
	for (x = 0; x < gridHeight; x++) {
	canvas.append('<tr></tr>');
	}
	
	rows = $('tr');
	
	for (y = 0; y < gridWidth; y++) {
	rows.append('<td></td>');
	} 
	
	cell = canvas.find('td');
	
	// When cell is clicked, color of the cell is changed
	cell.click(function() {
		console.log('Changing color of the clicked cell');
		// Select color input
		var color;
		color = $("#colorPicker").val();
		$(this).attr('bgcolor', color);
	});
	
}

// When size is submitted by the user, call makeGrid()

var submitSize;

submitSize = $('input[type="submit"]')

submitSize.click(function(event) {
  event.preventDefault();
  makeGrid();
});
