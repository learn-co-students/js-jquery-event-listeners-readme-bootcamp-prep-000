//define functions here

function getIt(){
  $('p').on("click")
  return  alert('Hey!')
}
function frameIt() {
  $('img').load(function(){
    $(this).addClass("tasty")
  })
}
function pressIt(){
  $('input').keydown(function(event){
    if(event.which === 71){
      alert("you pressed G.")
    }
  })
}
function submitIt(){
  $('form').on('submit', function(){
      alert("Your form is going to be submitted now.")
  })
}
$(document).ready(function(){
// call functions here

});
