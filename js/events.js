function getIt(){
  return $('p').on('click', function(key){
    alert('Hey!')
  })
}

function frameIt(){
  return $('img').on('load', function(tasty){
    $('img').addClass('tasty')
  })
}

function pressIt(){
  return $('form').on('keydown', function(key){
    if (key.which === 71){
      alert('G was pressed')
    }
  })
}

function submitIt(){
  return $('form').on('submit', function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  frameIt()
  submitIt()
});
