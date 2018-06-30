// Select color input
// Select size input
var height;
var width;
var color;
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event){
	event.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height, width);// creates the grid based on selected values for height and width.



})
function makeGrid(x, y) {
	$('tr').remove();

// Your code goes here!
	for (var k = 1; k <= x; k++){
		$('#pixelCanvas').append('<tr id = table' + i +'></tr>');
		for(var l = 1; l <= y; l++){
			$('#table'+ i).append('<td></td>'); //Adds cells to the table

		}

	}

	//adding color to cell
	$('td').click(function addColor(){
		color = $('#colorPicker').val();

		if ($(this).attr('style')) {
			$(this).removeAttr('style')// to remove any residual style attribute
		}else{
			$(this).attr('style','background-color:'+ color); // adds selected background color to the cell
		}
	})		
}
