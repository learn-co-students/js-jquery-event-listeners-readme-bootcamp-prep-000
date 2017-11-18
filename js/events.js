//define functions here

function getIt(){
  $('p').on('click', function(){
    alert("Hey!");
  });
};

function frameIt(){
  $('img').load(function(){
    $('img').addClass('tasty').css("border", "solid 2px red");
  })
}

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.");
  })
}

function pressIt(){
  $('form').on('keydown', function(key){
    if(key.which == 71){
      alert("You have pressed the G key.");
    }
  })
}

$(document).ready(function(){

// call functions here
getIt();

frameIt();

submitIt();

pressIt();

});
