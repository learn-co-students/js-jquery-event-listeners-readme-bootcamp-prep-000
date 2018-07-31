//define functions here

function getIt() {
  $('p').on('click', function() {
    alert ("Hey!");
  })
}

function frameIt() {
  $('img').on('load', function(){
    $('img').addClass('tasty');
  })
}

function pressIt() {
  $(document).on('keydown', function(key){
    if(key.which === 71) {
      alert ('You have pressed G');
    }
    
  });
}

function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){

// call functions here

});


// 3) Selectors submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted:
//   TypeError: window.submitIt is not a function
//     at Context.<anonymous> (test/index-test.js:51:12)


// 5) Selectors pressIt() does not alert if another key is pressed:
//   TypeError: window.pressIt is not a function
//     at Context.it (test/index-test.js:38:14)