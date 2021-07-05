// JavaScript Document
function getIt() {
  $("p").on("click", function(e) {
    alert("Hey!")
  })
}//

function frameIt() {
  $("img").on("load", function(e) {
    console.log($(this));
    $(this).addClass("tasty");
})
}

function pressIt() {
  $("input").on("keydown", function(e) {
    if (e.which === 71) {
	 alert("You pressed 'G'.");
    }
    //console.log(e.which);
})
}

function submitIt() {
	$("form").on("submit", function(e) {
		alert("Your form is going to be submitted now.");
	})
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();
});
