//define functions here

function getIt(){
  $("p").on("click", function(){
    return alert("Hey!");
    });
  }
  
function frameIt(){
    $('img').on('load', function(){
     $('img').addClass('tasty');
    }); 
}

function pressIt(){
  $('input').on('keydown', function(press){
    if (press.which === 71){
      window.alert('G was pressed');
    }
  });
}

function submitIt(){
  $('form').on('submit', function(){
    window.alert("Your form is going to be submitted now.")
  });
}