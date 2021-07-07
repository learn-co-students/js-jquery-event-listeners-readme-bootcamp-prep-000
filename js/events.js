function getIt(){
  debugger;
  $('p').on('click', function() {
    alert("Hey!");
  })
}

function frameIt(){
  $('img').on('load', function(){
    $( "img" ).addClass( "tasty" )
  })
}


function pressIt(){
  $('form input#typing').on('keydown', function(key) {
    console.log(key.which)
  if(key.which == 71){
      alert('g was pressed');
  }
});
}

function submitIt(){
  $('form').on('submit', function() {
      alert('Your form is going to be submitted now.');
  })
};


$(document).ready(function(){
  debugger;
  getIt();

  frameIt();

  pressIt();

  submitIt();

})
