//define functions here

  function getIt(){
    $('p').on('click', function(){
      alert ("Hey!");
      return;
    })
  }
  
  function frameIt(){
    $('img').on('load',function(){
    return  $('img').addClass('tasty');
    })
  }
  
  function pressIt(){
    $('form').on('keydown',function(e){
      if(e.which==71){
        alert('G was pressed');
      }
      return;
    })
  }
  function submitIt(){
  $("form").on("submit", function() {
    alert('your form is going to be submitted now');
    return;
  })
  }

$(document).ready(function(){
  
getIT()

frameIt()

submitIt()

pressIt()




// call functions here

});
