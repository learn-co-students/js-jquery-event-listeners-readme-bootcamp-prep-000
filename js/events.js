function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
};
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
};
function submitIt(){
  $("form:last").on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
};

function pressIt(){
  $("form:first").on("keydown", function(e){
    if(parseInt(e.which) === 71){
      alert("G was pressed!")
    }//end if
  })//end jquery event
}//end function


$(document).ready(function(){

// call functions here

});
