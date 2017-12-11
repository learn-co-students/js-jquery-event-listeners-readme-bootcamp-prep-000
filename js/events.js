//define functions here
function getIt(){
  $('p').on('click', function(){
    alert('Hey!')
  })
}

function frameIt(){
  $('img').on('load', function(){
    $("img").addClass("tasty")
    $(this).css('border', "solid 2px red")
    return
  })
}

function pressIt(){
  $(document).on('keydown', function(key) {
    if(key.which == 71){
        alert('g was pressed')
    }
  })
}

function submitIt(){
  $('form').on('submit', function() {
    alert('Your form is going to be submitted now.')
    return
  })
}


$(document).ready(function(){

// call functions here
  getIt()

  frameIt()

  pressIt()

  submitIt()

})
