//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!');
  })
}

function frameIt(){
 $(document).on('load', function(){
   const the_img = document.querySelector('img');
   the_img.className = 'tasty';
 })
}

function pressIt(){
  $('input:text').on('keydown', function(key){
    if(key.which === 71){
      alert('You clicked on G');
    }
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.');
  })
}

$(document).ready(function(){
getIt();
frameIt();
pressIt();
submitIt();

});
