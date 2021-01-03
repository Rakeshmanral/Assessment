$( document ).ready(function() {
$('.mobile-trigger').click(function() {
$('body').toggleClass('mobile-open');
$('.menu-section').slideToggle(250);
});

});