function getIt()
{
  $('p').on('click', function(){
    alert("Hey!")
});
}

function frameIt()
{
  $('img').on('load', function(){
  
});
}

function pressIt()
{
  $(document).on('keypress', function(e) {
  if(e.which === 71){
      alert('g was pressed');}})
}

function submitIt()
{
  $("form").on("submit", function() {
  if ($( "input:first" )) {
    alert('Your form is going to be submitted now.');
    return;
  }

});
}



$(document).ready(function(){


getIt()
pressIt()
submitIt()

});
