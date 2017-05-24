

function getIt() {
  $('p').on('click', function() {
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function(e) {
    $(e.target).addClass('tasty')
  })
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if(parseInt(e.which) === 71) {
      alert('you pressed G')
    }
  })
}

function submitIt() {
    $("form").on('submit', function() {
      alert('Your form is going to be submitted now.')
    })
}

$('document').ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
})
