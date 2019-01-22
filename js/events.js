//define functions here

$(document).ready(function(){

// call functions here

})
function getIt() {
  $('p').on("click",function() {
    alert('Hey!');
  })
}


$('img').on('load',frameIt)

function frameIt () {
    $('img').addClass('tasty')
    $('img').css('border', "solid 2px black")
  }

 $('#typing').on('keydown', pressIt)
 
function pressIt() {    
        $('#typing').on('keydown', function(key) {
  if (key.which === 71){
    alert('enter was pressed');
  }
});  
    }
    


function  submitIt() {
        $('form').on('submit',function() {
    alert('Your form is going to be submitted now.');
  }
)}


