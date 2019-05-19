// JavaScript Document
$(document).ready(function(){
	///AutoPlay Owl Carousel
	var storeslider = $('#storeslider');
	storeslider.owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		center:true,
		responsiveClass:true,
		autoplay:true,
		autoplayTimeout:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:4,
				nav:true
			},
			600:{
				items:5,
				nav:false
			},
			1000:{
				items:6,
				nav:true
			}
		}
	});


});
