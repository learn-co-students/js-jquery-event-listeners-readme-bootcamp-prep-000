

function getIt() {
  $('p').on('click', function() { alert('Hey!') })
}

function frameIt() {
  $('img').on('load', function(e) {
    e.target.className = 'tasty'
  })
}

function pressIt() {
  $('input').on('keydown', (key) => {if (key.which === 71) alert('g was pressed')})
}

function submitIt() {
  $('form').on('submit', () => alert('Your form is going to be submitted now.'))
}

$(document).ready(function() {
});
