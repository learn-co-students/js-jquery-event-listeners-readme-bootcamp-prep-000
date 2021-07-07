// Define your functions outside of the document ready, and call them inside of this.
//(This way, your tests will run as expected and you can test your code in the browser as well.)
//define functions here
function getIt () {// binds a `click` event to the `p` tag
	$("p").on("click", function () {
		alert (`"Hey!"`) // When the paragraph is clicked, the function should alert `"Hey!"`
	})
}
function frameIt () {// bind the `load` event that adds the class `tasty` to the image to add a red frame to the image
	$("img").on("load", function () {
		$( "img" ).addClass(`tasty`)
	})
}
function pressIt () {// binds a `keydown` event to the input field of the form that alerts a user when they have pressed the `G` key
		$(document).on("keydown", function (key) {
			if (key.which == 71) {
				alert (`G was pressed`)
			}
		})
}
function submitIt () {// bind a `submit` event to the form that alerts `"Your form is going to be submitted now."`
	$("form").on("submit", function () {
		alert(`Your form is going to be submitted now.`)
	})
}

$(document).ready(function(){
// call functions here
getIt ()
frameIt ()
pressIt ()
submitIt ()
})
