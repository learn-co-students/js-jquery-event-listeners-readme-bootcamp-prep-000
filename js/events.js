//define functions here

function getIt(){
  $('p').on("click", function(e){
    alert("Hey!")
  })
}

function frameIt(){
  $('img').on("load", function(){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  $('input#typing').on("keydown", function(e){
    const key = parseInt(e.which || e.detail)
    if (parseInt(key) == 71) {
      alert("You pressed the 'G' button!")
    }
  })
}

function submitIt(){
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
// call functions here

});
