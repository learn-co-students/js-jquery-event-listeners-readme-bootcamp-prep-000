//define functions here

$(document).ready(function(){

// call functions here
const getIt = () => {
  $('p').on('click', () => {
    alert('Hey!')
  })
}

const frameIt = () => {
  $('img').on('load', () => {
    $('img').addClass('tasty')
  })  
}

const pressIt = () => {
  $('input').on('keydown', (key) => {
    if (key.which === 71) {
      alert('G key has been pressed.')
    }
  })  
}

const submitIt = () => {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  })  
}

});
