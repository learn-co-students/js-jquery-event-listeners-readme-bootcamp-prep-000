//define functions here

function frameIt(){
  $("img").on("load",function(){
  //  $("img").style.border='2x solid red'
    $(this).addClass("tasty")
  })
}


function getIt(){
  $("p").on("click", function(){alert("Hey!")})
}


function submitIt(){
  $("form").on("submit", function(){alert("Your form is going to be submitted now.")})
}

function pressIt(){
  $("form").on("keydown", function(key){
    if(key.which == 71){
      alert('g was pressed');
  }
  })
}

$(document).ready(function(){

// call functions here

});
