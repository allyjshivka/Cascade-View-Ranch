$(document).ready(function(){
	///AutoPlay Owl Carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		center:true,
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
        "albany can code/cascadeview images/wedding1.jpg",
        "albany can code/cascadeview images/wedding2.jpg",
        "albany can code/cascadeview images/wedding3.jpg",
        "albany can code/cascadeview images/wedding7.jpg",
        "albany can code/cascadeview images/wedding11.jpg",
        "albany can code/cascadeview images/birthday1.jpg",
        "albany can code/cascadeview images/birthday6.jpg",
        "albany can code/cascadeview images/birthday3.jpg",
        "albany can code/cascadeview images/birthday5.jpg",
        "albany can code/cascadeview images/birthday7.jpg"

    ]
    var i=0;
    function slides() {
        document.getElementById("specialimage").src = images[i];
        if(   i < (images.length-1)    ){
            i++;
        } else {

            i=0;
        }


    }
    setInterval(slides,2000);




    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:4,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

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
