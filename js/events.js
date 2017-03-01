//define functions here
function getIt() {
  return alert("Hey!")
}

function frameIt() {
  addClass("tasty")
}

function submitIt() {
  return alert("Your form is going to be submitted now.")
}

/*function pressIt() {
  const key = $('input').keydown()
  if (key === 73) {
      return alert("You have pressed 'g'!")
    }
}*/

$(document).ready(function(){

// call functions here
$('p').click(getIt)

$('img').load(frameIt)

$('form').submit(submitIt)

//$('input').keydown(pressIt)

});
