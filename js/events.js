function getIt() {
 $('p').on('click', () => {
   alert("Hey!");
 });
}

function frameIt() {
  $('img').on('load', () => {
  $('img').addClass('tasty');
});
}

function pressIt() {
  $(document).on('keydown', (key) => {
    if(key.which == 71) {
      alert('g was pressed');
    }
  });
}

function submitIt() {
$('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  }
)
}

$(document).ready( () => {
getIt();
frameIt();
pressIt();
submitIt();
});
