function getIt() {
  $('p').on("click", function(){
    alert('Hey!');
});
}

function frameIt(){
  $('img').on("load", function () {
    $('img').addClass('tasty')
    $('img').css({"border-color": "red",
             "border-weight":"1px",
             "border-style":"solid"})
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if (key.which === 71){
    alert('g was pressed');
  }
  })
}

function submitIt(){
  $('form').on('submit', function() {
  alert('Your form is going to be submitted now.');
      return;
    })
  }



$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
});
