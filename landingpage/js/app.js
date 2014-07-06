var newLocation;

$(document).ready(function(){

//fade effect
$('body').css('display', 'none');

$('body').fadeIn(2000);


$('.link').click(function() {

event.preventDefault();

linkLocation = this.href;

$('body').fadeOut(1000, newpage);

});

function newpage() {

window.location = linkLocation;

}





});