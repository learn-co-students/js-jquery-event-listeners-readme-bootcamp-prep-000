//define functions here



function getIt(){
  $('p').on("click",function(){
    alert("Hey!")
  })

}

/*

The function should bind the load event that adds the class 
tasty to the image to add a red frame to the image.
*/

function frameIt(){
  $('img').on("load",function(){
  
  $('img').addClass("tasty")
  
  })
  
}

function pressIt(){
  $('input').on("keydown",function(key){
    if(key.which===71){
      alert("you pressed G")
    }
  })
}


function submitIt(){
  $('form').on("submit",function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()

//and that below is the end of document.ready

});
