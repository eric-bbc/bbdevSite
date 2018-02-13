/////////////////////////////////////////
//           ROYAL SLIDER              //
/////////////////////////////////////////

$(document).ready(function($) {
  $(".casestudy-slider").royalSlider({
        keyboardNavEnabled: true,
        imageScaleMode:'none',
        autoScaleSlider: true
    });
});

/* =========================================================================
    Body Class
========================================================================= */


// $(document).on('click', '.js-body-add-class', function() {
//     $('body').addClass($(this).data('body-class'));
// });
//
// $(document).on('click', '.js-body-remove-class', function() {
//     $('body').removeClass($(this).data('body-class'));
// });
//
// $(document).on('click', '.js-body-toggle-class', function() {
//     $('body').toggleClass($(this).data('body-class'));
// });

$('.desktop-view-more-trigger').on('click', function() {
  $('.view-more').toggleClass('view-more-open')
})

$("#clock4").clock({"format":"24","calendar":"false"});
$("#destroyclock4").click(function(){ $("#clock4").clock("destroy") });
