//define functions here
function getIt(){
  $('p').on('click',alert("Hey!"))
}
function frameIt(){
  $('img').on('load',function(e){
    $(this).addClass('tasty')
  })
}
function pressIt(){
  $('input').on('keydown',function(e){
    if (e.which==71) {
      alert('G was pressed')
    }
  })
}
function submitIt(){
  $('form').on('submit',alert("Your form is going to be submitted now."))
}
$(document).ready(function(){

// call functions here

});
