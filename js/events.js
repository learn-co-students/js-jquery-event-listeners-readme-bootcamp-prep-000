//define functions here

$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});

function getIt() {
  $('p').on("click", function(){
    alert("Hey!")
  });
}

function frameIt() {
  $('img').on('load', function(){
    let img = $('img')
    img.addClass('tasty')
  });
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    if(key.which == 71){
      alert('g was pressed');
    }
  });
}

function submitIt() {
  let form = $('form')[0]
  $(form).on("submit", function() {
    return alert('Your form is going to be submitted now');
  });
}
