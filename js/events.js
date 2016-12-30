function getIt() {
  $('p').on('click', function(event){
    alert("Hey!")
  })
}
function frameIt() {
  $('img').on('load', function(){
    $('img').addClass("tasty")
  })
}
function pressIt() {
  $('input').on('keydown', function(element) {
    console.log(element.which)
    if (element.which == 71){
      alert('"g" is pressed')
    }
  })
}
function submitIt() {
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
  })
}
//define functions here

$(document).ready(function(){

// call functions here

});
