//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {

  $('img').on('load', function(){
      img = $('img')[0]
      img.className += "tasty"
      img.style.borderColor = "red"
  })
}

function pressIt() {
  $('form').on('keydown', function(key) {
    if( key.which === 71)
      alert("YOU PRESSED G")

  })
}

function submitIt() {
  $("form").on("submit", function() {

    alert("Your form is going to be submitted now.")

  })

}
