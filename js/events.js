function getIt() {
  $('p').on('click', function(e) {
    window.alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    var img = $('img')
    img.addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
      if((e.which || e.detail) === 71) {
        window.alert()
      }
  })
}

function submitIt() {
    $('form').on('submit', function() {
      window.alert("Your form is going to be submitted now.")
    })
}

$(document).ready(function(){

getIt();
frameIt();
pressIt();
submitIt();

});
