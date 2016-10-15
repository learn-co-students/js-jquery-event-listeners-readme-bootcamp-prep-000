function getIt(){$('p').on('click',()=>alert('Hey!'))}
var frameIt=()=>$('img').on('load',
()=>$('img')[0].setAttribute('class','tasty')
)
var pressIt=()=>$('input').on('keydown',(k)=>{var c=(k.detail||k.which);
  if(parseInt(c)==71)alert('hi')})
var submitIt=()=>$('form').on('submit',()=>alert('Your form is going to be submitted now.'))

//define functions here

$(document).ready(function(){

// call functions here
getIt();frameIt();pressIt();submitIt()
});
