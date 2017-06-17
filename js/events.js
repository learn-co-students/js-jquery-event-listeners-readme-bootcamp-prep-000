//define functions here
function getIt() {
	$('p').on('click', function () {
		alert('Hey!');
	})
}

function frameIt() {
	$('img').on('load', function () {
		$('img').addClass('tasty');
	})
}

function pressIt() {
    $('input[type="text"]').on('keydown', function(evt) {
        if(evt.which === 71){
            alert('You pressed on G');
        }
    })
}

function submitIt() {
    $('form').on('submit', function(){
        alert('Your form is going to be submitted now.');
    });
}

$(document).ready(function(){
    // call functions here
    getIt();
    frameIt();
});
