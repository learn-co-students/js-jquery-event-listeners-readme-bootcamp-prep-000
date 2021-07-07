//define functions here

$(document).ready(function(){

// call functions here
  
});

function getIt() {
  $("p").on("click", alert("Hey!"))
}

function frameIt() {
  $("img").on("load", function(e){
    document.querySelector("img").classList.add("tasty")
  })
}

function pressIt() {
  $("input").on("keydown", function(key){
    if(key.which === 71){
      alert("You Pressed the g Key!")
    }
  })
  
  /* personally I'd rather just use vanilla javascript as follows:
  
  document.querySelector("img").addEventListener("keydown", function(e){
    if(e.key === "g"){ // rather than having to figure out the keycode we just type "g"
      alert("You Pressed the g Key!")
    }
  } */
}

function submitIt() {
  $("form").on("submit", function(){
    alert("Your form is going to be submitted now.")
  })
}