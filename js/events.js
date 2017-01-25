function getIt() {
  $('p').on("click", function() {
  alert ("Hey!")
})//action you want taken
}//define functions here

function frameIt() {
  $('img').on('load', function(){
  $('img').addClass('tasty')//actions you want to happen
})
}

function pressIt() {
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('g was pressed');
  }
})
}

function submitIt() {
  $("form").on("submit", function() {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){

// call functions here

});
