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
        "img/wedding1.jpg",
        "img/wedding2.jpg",
        "img/wedding3.jpg",
        "img/wedding7.jpg",
        "img/birthday1.jpg",
        "img/birthday3.jpg",
        "img/birthday5.jpg",
        "img/birthday7.jpg"

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
