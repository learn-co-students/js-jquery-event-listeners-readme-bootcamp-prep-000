function getIt () {
    $('p').click(function Hey() {
      alert ("Hey!")
    }
  )}

function frameIt () {
  $('img').load(function Tasty() {
    $('img[src="https://s3.amazonaws.com/after-school-assets/minion-tongue.jpg"]').addClass("tasty");
  }
)}


function pressIt () {
  $('input#typing').keydown(function (key) {
  if (key.which == 71) {
    alert ("G was pressed");
  }
  }
)}

function submitIt () {
$('form').submit(function SubmitForm () {
  if ($("input:last").click()) {
    alert ("Your form is going to be submitted now.");
  }
}
)}

$(document).ready(function(){


});
