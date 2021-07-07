//define functions here

   function getIt () {
  $('p').on('click', function () {
    alert ("Hey!")
  })}
  
   function frameIt() {   
   $(window).on('load', function () {
    $('img').addClass("tasty")
    $('img').css({ "display": "inline-block" })
    $('img').css({ "border-color": "red", "border-style": "solid", "border-weight": "5px"}); 
    })}
    
    function pressIt () {    
    $(document).on('keydown', function (key) {
      
      if (key.which == 71) {
        alert ('G was pressed!')
      }
    })}
    
    function submitIt () {  
    $('form').on('submit', function () {
      alert ('Your form is going to be submitted now.')
    })}

$(document).ready(function() {

getIt()

frameIt()

pressIt()

submitIt()

});
