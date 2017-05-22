//define functions here

var getIt = () => {
    $('p').on('click', function() {
        alert('Hey!')
    })
}

var frameIt = () => {
    $('img').on("load", function() {
        $('img').attr("class", "tasty")
    })
}

var pressIt = () => {
    $('#typing').on("keydown", function(e) {
        if (parseInt(e.which) === 71) {
            alert("you pressed G")
        }
    })
}

var submitIt = () => {
    $('form').on("submit", function() {
        alert("Your form is going to be submitted now.")
    })
}

$(document).ready(function(){
    getIt()
    frameIt()
    pressIT()
    submitIt()
});
