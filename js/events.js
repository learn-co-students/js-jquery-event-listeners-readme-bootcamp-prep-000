//define functions here
function getIt() {
  $('p').on("click", function(){
    alert("Hey!");
});
}

function frameIt() {
  $('img').on('load', function(){
    //The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
    $("img").addClass("tasty")
  });
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

function submitIt() {
  $("form").on("submit", function() {
      alert('Your form is going to be submitted now.');
  })
}


$(document).ready(function(){

// call functions here

});
