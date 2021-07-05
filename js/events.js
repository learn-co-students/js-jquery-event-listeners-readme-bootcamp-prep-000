//define functions here
function getIt() {
  $('p').on("click", function(){
    alert("Hey!");
  });
}

function frameIt() { /* This will execute when it knows that the image has loaded, as is the case with mocha.run(). But without those tests (which wind up calling this function twice, I think, in order to set up stuff and check values), frameIt doesn't always know whether the image has been loaded. */

  //console.log("Will this display?");
  //$('img').trigger('load');
  $('img').on('load', function() {
    //console.log("Testing again!");
    
    $('img').addClass("tasty");
    
   // console.log("This is a sentence.");
    //This works, too: document.getElementsByTagName('img')[0].className = "tasty";
  });
}

function pressIt() {
  //console.log("Testing")
  $("form input:first").on("keydown", function(key) {
    
    if(key.which == 71){
      alert('g was pressed');
    }
  });
} 

/* function pressIt(){ //This doesn't work as intended. With keydown, it's better to check the key value using key.which

  $('input:first').on('keydown', function() {
    if($( 'input:first' ).val() == "g"){
      alert("g was pressed");
    }
  });
} */

function submitIt() {
  $('form').on("submit", function() {
    alert ("Your form is going to be submitted now.");
  })
}

$(document).ready(function(){
  //console.log('jump1');
  frameIt();
  getIt();
  pressIt();
  submitIt();
  //console.log('jump');
});
