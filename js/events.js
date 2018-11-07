
function getIt() {
  $('p').on('click', function(eventname) {
    alert("Hey!");
  });
}


getIt();


function frameIt() {
  const tasty = document.querySelector('img');
  tasty.classList.add("tasty");
  tasty.addEventListener('load', function(eventname){
  });
}


frameIt();


function pressIt() {
  $(document).on('keydown',function(key) {
    if(key.which == 71) {
    alert('G was pressed' );
  }
})}

pressIt();

function submitIt() {
  $("form").on("submit",function() {
  alert("Your form is going to be submitted now.");
  });
}

submitIt();