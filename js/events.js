//getIt
function getIt(){
  $('p').on('click',function(event){alert('Hey!');})
}

//frameIt
function frameIt(){
  $('img').on('load', function(event){
    $('img').attr('class', 'tasty');
  })
}

//pressIt
function pressIt(){
  $('form').on('keydown', (event)=>{
    if (event.which == 71){
      alert('G is pressed!')
    }
  })
}

//submitIt
function submitIt(){
  $('form').on('submit', (event)=>{
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
