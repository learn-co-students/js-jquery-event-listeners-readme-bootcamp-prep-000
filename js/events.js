//define functions here



function getIt() {
$('p').on ('click', () => {
  alert("Hey!")
})
}
function frameIt() {
$('img').on('load',function () {

  $('img').addClass('tasty')
})
}
function submitIt() {
$('form').on('submit', function () {
  alert("Your form is going to be submitted now.")
})
}
function pressIt() {
  $('input').on('keydown',(e) => {
    if (e.which == 71) {
      alert("g")
    }
  })
}

$(document).ready(function(){

// call functions here
frameIt();
getIt();
pressIt();
submitIt();
});
