// JavaScript Document
$(document).ready(function(){
	///AutoPlay Owl Carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsiveClass:true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:1,
				nav:false
			},
			1000:{
				items:2,
				nav:true,
			}
		}
	})
	/////Automatic Slideshow
	var images = [
	    "albany can code/cascadeview images/img1.jpg",
	    "albany can code/cascadeview images/img2.jpg",
	    "albany can code/cascadeview images/img3.jpg",
	    "albany can code/cascadeview images/img4.jpg",
	    "albany can code/cascadeview images/img5.jpg",
	    "albany can code/cascadeview images/img6.jpg",
	    "albany can code/cascadeview images/img7.jpg",
	    "albany can code/cascadeview images/img8.jpg",
	    "albany can code/cascadeview images/img9.jpg",
	]
	var i=0;
	function slides() {
	    document.getElementById("slideshow").src = images[i];
	    if(i<(images.length-1))
	    i++;
	    else {

	        i=0;
	    }


	}
	setInterval(slides,2000)

});
