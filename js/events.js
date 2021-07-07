//define functions here

function getIt() {
    $("p").on("click", function () {
        alert("Hey!");
    });
}

function frameIt() {
    $('img').on("load", function() {
        $('img').addClass("tasty");
    });
}


function pressIt() {
    $(document).on("keydown", function (e) {
        // console.log(e.key)
        // if (e.key == 'G') {
        //     alert('You pressed G!!!');
        // }
        if (e.which == 71) {
            alert('g was pressed');
        }
    });
}


function submitIt() {
    $('form').on("submit", function() {
        alert("Your form is going to be submitted now.");
    });
}


$(document).ready(function(){

    getIt();
    frameIt();
    pressIt();
    submitIt();

});
