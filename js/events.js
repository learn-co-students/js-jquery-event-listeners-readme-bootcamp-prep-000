//define functions here
function getIt(){
  $('p').click(function(){
    alert('Hey');
  })
}//end getIt
function frameIt(){
  $('img').load(function(){
    $('img').addClass("tasty")
  })
}//end frame
function pressIt(){
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      alert('s was pressed');
  }
});
}//end pressIt
function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")

  })
}// end submit
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
