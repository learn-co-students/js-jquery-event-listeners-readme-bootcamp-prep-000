//define functions here

$(document).ready(function(){

getIt()
frameIt()
pressIt()

});

function getIt() {
  $("p").on("click", function(){
    alert('Hey!')
  })
}

function frameIt() {
  var image = $("img")[0]
  $("img").on("load", function(){
    image.setAttribute('class', 'tasty')
  })
}

function pressIt() {
  $("#typing").on("keydown", function(key){
    if (key.which === 71 ){console.log(alert("You pressed g!"))}
  })
}

function submitIt(){
  $("form").on("submit", function(){
    console.log(alert("Your form is going to be submitted now."))
  })
}
