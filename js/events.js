function getIt() {$('p').on('click', function(a) {alert("Hey!")} ) }
function frameIt() {$('img').on('load', function(b) {$('img').addClass("tasty")} ) }
function pressIt() {$('input').on('keydown', function(c) {if (c.which === 71) {alert("G was pressed.")} } ) }
function submitIt() {$('form').on("submit", function(d) {alert("Your form is going to be submitted now.")} ) }

$(document).ready(function(){

// call functions here

});
