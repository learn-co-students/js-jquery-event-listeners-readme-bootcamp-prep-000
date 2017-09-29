//define functions here

$(document).ready(function(){
getIt();
frameIt();
submitIt();
pressIt();
// call functions here

});

function getIt(){
  $('p').click(function(){
    alert('Hey!')
  })
}

function frameIt(){
  $(window).on('load', function(){
  $('img').addClass('tasty');
  })
}

function submitIt(){
  $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

function pressIt(){
  $(document).on('keydown', function(e){
    if(e.which === 71 || e.which === 103){
      alert('g or G was pressed');
    }
  })
}
