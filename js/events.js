function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  $("img").on('load', function() {
    this.className = "tasty"
  })
}

function pressIt() {
  $("input").on("keydown", function(event){
    if (event.detail === "71" || event.which == "71") {
      alert("G has been pressed")
    }
  })
}

function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

  getIt()
  frameIt()
  pressIt()
  submitIt()
});
