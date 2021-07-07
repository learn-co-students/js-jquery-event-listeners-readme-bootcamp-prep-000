//define functions here

function getIt() {
$("p").on("click", function() {
  alert ("Hey!")
  });
}

function frameIt() {
$('img').on("load", function() {
  $('img').addClass("tasty")
  });
}

function pressIt() {
$('input').on('keydown', function(key) {
  if (key.which == 71){
    alert('g was pressed');
  }
});
}

function submitIt() {
$("form").on("submit", function() {
  alert ("Your form is going to be submitted now.")
})
}



$(document).ready(function(){

getIt() 

frameIt()

pressIt()

submitIt()

})

/*
ALT ATTEMPTS

function frameIt() {
$("img'").on("load", function() {
  $("img").addClass("tasty")
  });
}

function frameIt() {
var images = document.getElementsByTagName("img");
var i;

for(i = 0; i < images.length; i++) {
    images[i].className += "tasty"
    }
}

function getIt() {
$("p").on("click", function() {console.log("Hey!")});
}


function getIt() {
$("p").on("click", function() {alert ("Hey!")});
return;
}

$(document).ready(function(){

getIt() 

  
})

function getIt() {
  $('p').on("click", 'button.alert', function() {
    alert("Hey!");
}) 

function getIt() {
  $('p.alert').click(function(){
    alert("Hey!");
})

//Difference between .on('click') vs .click() - Stack Overflow https://stackoverflow.com/questions/9122078/difference-between-onclick-vs-click

});
*/