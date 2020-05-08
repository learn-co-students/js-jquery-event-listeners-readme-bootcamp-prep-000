function getIt() {
  $('p').click(() => {
    alert("Hey!")
  })
}

function frameIt() {
  $(document).load(() => {
    $('img').addClass("tasty")
  })
}

function submitIt() {
  $('form').submit(() => {
    alert("Your form is going to be submitted now.")
  })
}

function pressIt() {
  $("#typing").keydown((event) => {
    if (event.which === 71) {
      alert("")
    }
  })
}

$(document).ready(function(){
  frameIt()
  pressIt()
});
