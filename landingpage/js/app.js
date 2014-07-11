var newLocation;

$(document).ready(function(){

//fade effect
$('.main').css('display', 'none');

$('.main').fadeIn(2000);


$('.link').click(function() {

event.preventDefault();

linkLocation = this.href;

$('body').fadeOut(1000, newpage);

});

function newpage() {

window.location = linkLocation;

}


//icon hover effect
$(".icon-still").mouseenter(function() {
//debugger;
$(this).find('.icon-action').fadeIn(300);
});

$(".icon-still").mouseleave(function() {
$(this).find(".icon-action").fadeOut(300);
});




});