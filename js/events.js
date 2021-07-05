//define functions here

function getIt() {
  $('p').on('click',function() {
    return alert('Hey!')
    console.log('clicked')
});
}

function frameIt() {
  $(document).on('load',function(){
    $('img').addClass("tasty")
  });
}

function submitIt() {
  $("form").on("submit", function() {
    return alert("Your form is going to be submitted now.")
  });
}

function pressIt() {
  $('input').on('keydown', function(e) {
    if (e.which == 71) {
      return alert('You pressed the G key.')
    }
  })
}

$(document).ready(function(){
getIt()
frameIt()
submitIt()
pressIt()
})
