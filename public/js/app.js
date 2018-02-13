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

/* =========================================================================
    Clock
========================================================================= */

$(document).ready(function() {
// Create two variable with the names of the months and days in an array
var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

// Create a newDate() object
var newDate = new Date();
// Extract the current date from Date object
newDate.setDate(newDate.getDate());
// Output the day, date, month and year
$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

setInterval( function() {
	// Create a newDate() object and extract the seconds of the current time on the visitor's
	var seconds = new Date().getSeconds();
	// Add a leading zero to seconds value
	$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);

setInterval( function() {
	// Create a newDate() object and extract the minutes of the current time on the visitor's
	var minutes = new Date().getMinutes();
	// Add a leading zero to the minutes value
	$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
    },1000);

setInterval( function() {
	// Create a newDate() object and extract the hours of the current time on the visitor's
	var hours = new Date().getHours();
	// Add a leading zero to the hours value
	$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
    }, 1000);
});
