//define functions here


function getIt(){
  $('p').on('click', function(){
    alert('hey!')
  })
}

function frameIt() {
 $('img').on('load', function() {
   // load the .tasty css file (this will add a red border around the minion)
  $('img').addClass("tasty")
  return;
})
}

function pressIt() {
  $("form").on("keydown", function(e) {
    console.log(e.which)
    if (e.which == 71){
    window.alert('g was pressed!')
  }
})
}

function submitIt() {
  $("form").on("submit", function() {
  window.alert("Your form is going to be submitted now.")
})
}


$(document).ready(function(){

// call functions here

getIt()
frameIt()
pressIt()
submitIt()

});
