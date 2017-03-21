function getIt() {
  $('p').on('click', function() {
    alert('Hey!')
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(key) {
    // 'g' corresponds to 71
    if (key.which === 71) {
      alert("'g' was pressed!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(sub) {
    alert('Your form is going to be submitted now.')
  })
}


//define functions here

$(document).ready(function(){

// call functions here

});
