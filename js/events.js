function getIt(){
  $('p').on('click', alert('Hey!'))
}
function frameIt(){
  $('img').on('load', function(){
    $('img').addClass('tasty')
  })
}
function pressIt(){
  $('input').on('keydown', function(key){
    if (key.which === 71){ alert('Your form is going to be submitted now.')};})
}
function submitIt(){
  $('input').on('submit', alert('Your form is going to be submitted now.'))

}

$(document).ready(function(){

getIt()

frameIt()

pressIt()

submitIt()
});
