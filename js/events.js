//define functions here

function getIt(){
  $('p').on("click",function(){
   alert ('Hey!');
  });
}

function frameIt(){
  $('img').on('load',function(){
    var img = $('img')
    img[0].className ='tasty';
    img[0].border = '2px solid red';
  })
}

  function pressIt(){
    $('#typing').on('keydown',function(key){
      if(key.which == 71){
      alert (`You have pressed the letter ${key.which}`);
      }
    })
  }

  function submitIt(){
    $('form').on('submit',function(){
    alert('Your form is going to be submitted now.')
    })
  }
  $(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
  });
