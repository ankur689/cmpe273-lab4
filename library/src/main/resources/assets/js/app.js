//On click sendLost Function
function sendLost(id) {   
	var isbn = id;
    $.ajax({
        url: '/library/v1/books/' + isbn + '/?status=lost',
        dataType: "json",
        type: 'PUT',
        success: function(data) {
        			alert('Reported lost on ISBN ' + isbn); 
        			window.location.reload(); 
                },
        error: function(xhr, status) {
                        alert("Sorry, there was a problem!");
                }
        });
    document.getElementById(isbn).disabled = true;
};        

//On refresh functions, that loops over cells and disables buttons
$(document).ready(function() {
	var table = document.getElementById("books_table");
	for (var i = 0, row; row = table.rows[i]; i++) {
			var newStatus=table.rows[i].cells[4].innerHTML;
			if (newStatus=="lost")
				{
				var newIsbn=table.rows[i].cells[0].innerHTML;
				document.getElementById(newIsbn).disabled = true;
				}
		}
}); 





