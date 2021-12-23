

$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    dots:true,
    adaptiveHeight: true,
    slidesToShow: 4,
    slidesToScroll:4,
    speed:1000,
    easing:'ease',
    draggable:false,
    waitForAnimate:true,
    responsive:[
      {
        breakpoint:760,
        settings:{
          slidesToShow:2,
          slidesToScroll:2,
        }
      }
    ]
  });
});

"use strict"
var $popOverlay = $(".popup-overlay");
var $popWindow = $(".popWindow");
var $popupMainWindow = $(".popup-main-window");
var $popThankYouWindow = $(".thank-you-window");
var $popClose = $(".close-btn");
var $popOpen = $("#for-popup-form");

$(function() {
// Close Pop-Up after clicking on the button "Close"
$popClose.on("click", function() {
history.replaceState(null, null, ' ');
$popOverlay.fadeOut();
$popWindow.fadeOut();
$popThankYouWindow.fadeOut();
});

// Close Pop-Up after clicking on the Overlay
$(document).on("click", function(event) {
if ($(event.target).closest($popWindow).length) return;
history.replaceState(null, null, ' ');
$popOverlay.fadeOut();
$popWindow.fadeOut();
$popThankYouWindow.fadeOut();
event.stopPropagation();
});


// popup form
$(".popup-form").submit(function() {
    var th = $(this);
    $(".popup-submit").prop('disabled', true);
    $.ajax({
    type: "POST",
    url: "https://formcarry.com/s/ClkxyW6IPH1",
    data: th.serialize(),
    })
    //.done(function() {
    // после успешной отправки скрываем форму подписки и выводим окно с благодарностью за заполнение формы
    $popupMainWindow.fadeOut();
    $popThankYouWindow.fadeIn();
    // очищаем форму
    setTimeout(function() {
    $(".popup-submit").prop('disabled', false);
    th.trigger("reset");
    }, 1000);
    //});
    return false;
    });
});

$(document).ready(function() {
$popOpen.click(function(){
window.location.hash = "#popup";
$popOverlay.fadeIn();
$popupMainWindow.fadeIn();
return false;
});
});

$(window).on('hashchange', function (event) { //при клике на "назад" скрывать форму
if(window.location.hash == "#popup"){
$popOverlay.fadeIn();
$popupMainWindow.fadeIn();
}
else{
if(window.location.hash != "#popup") {
$popOverlay.fadeOut();
$popupMainWindow.fadeOut();
$popThankYouWindow.fadeOut();
}
}
});