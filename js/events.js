function getIt(){
  $('p').on("click", function(){
    alert('Hey!')
  })
}
function frameIt() {
  $('img').on("load", function(){
    $('img').addClass("tasty")
  })
}
function pressIt() {
  $('#typing').on("keydown", function(e){
    let key = parseInt(e.detail || e.which)
    console.log(`${key}`)
    if(key == 71)
    alert('Hey you justed pressed g!')
  })
}
function submitIt() {
  $('form').on("submit", function(){
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
getIt()
frameIt()
pressIt()
submitIt()
});
