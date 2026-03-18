(function ($) {

	"use strict";

	(function() {

		$(window).on('load', function () {

    setTimeout(function () {
        jQuery('.loader').fadeOut(200);

        jQuery('.loader-wrapper').addClass('loader-exit');

        setTimeout(function () {
            jQuery('.loader-wrapper').remove();
        }, 600);

    }, 2000); // 2 sec stay

});

	/*
	======================================
		Scroll Init
	======================================
	*/
	(function() {

		$(window).on('scroll', function() {

			var $headerH 	= jQuery('.header-area').height();
			var $windowH 	= jQuery(window).scrollTop();
			var $nav 		= jQuery('.header-area');
			var $mNav		= jQuery('.saastrace-mobile-menu-area');

			if( $windowH > $headerH ) {
				$nav.addClass('fixed');
				$mNav.addClass('fixed');
			} else {
				$nav.removeClass('fixed');
				$mNav.removeClass('fixed');
			}

		});
	})();

	if( $('.miwlo-parallax').length ) {
		$('.miwlo-parallax').parallax({
			scalarX: 10.0,
			scalarY: 10.0,
		});
	}


	/*
	======================================
		App Screenshot Slider Init
	======================================
	*/

	(function() {

		if( $('.miwlo-app-screenshot-slide').length ) {
			var ScreenshotSlider = new Swiper( '.miwlo-app-screenshot-slide', {
				paginationClickable: true,
				effect: 'coverflow',
				lazyLoadingInPrevNext: true,
				loop: true,
				centeredSlides: true,
				slidesPerView: 'auto',
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				coverflow: {
					rotate: 0,
					stretch: 100,
					depth: 350,
					modifier: 1,
					slideShadows: true,
				}
			});
		}

	})();

	

	/*
	======================================
		Testimonial v1
	======================================
	*/
	(function() {
		if( $('.miwlo-app-testimonial-slide-container').length ) {
			var testimonial = new Swiper( '.miwlo-app-testimonial-slide-container', {
				pagination: {
					el: '.testimonial-pagination',
					clickable: true,
					renderBullet: function (index, className) {
					  return '<div class="' + className + '"><div class="client-image"></div></div>';
					},
				},
			});
		}
	})();


	/*
	======================================
		Testimonial v2
	======================================
	*/

	(function() {
		if( $('.miwlo-testimonial-slide-container').length ) {
			var testimonial = new Swiper( '.miwlo-testimonial-slide-container', {
				loop: true,
				slidesPerGroup: 1,
				autoplay: {
					delay: 3000,
					disableOnInteraction: false
				},
				breakpoints: {
					// when window width is >= 320px
					320: {
					  slidesPerView: 1
					},
					// when window width is >= 480px
					992: {
					  slidesPerView: 2,
					  spaceBetween: 70
					}
				  }
			});
		}


		$('.testimonial-pagination .swiper-pagination-bullet:nth-child(1) .client-image').append('<img src="images/testimonial-slider/teamr-1.jpg"/>');
		$('.testimonial-pagination .swiper-pagination-bullet:nth-child(2) .client-image').append('<img src="images/testimonial-slider/teamr-2.jpg"/>');
		$('.testimonial-pagination .swiper-pagination-bullet:nth-child(3) .client-image').append('<img src="images/testimonial-slider/teamr-3.jpg"/>');
	})();



	/*
	======================================
		Slinky Menu Init
	======================================
	*/
	(function() {
		if( $('.miwlo-header-area-mobile .col').length ) {
			const slinky = $('.miwlo-header-area-mobile .col').slinky();
		}
	})();



	/*
	======================================
		Counter Plugin Init
	======================================
	*/
	(function() {
		if( $('.counter').length ) {
			$('.counter').counterUp({
				delay: 10,
				time: 1000
			});
		}
	})();

	  
})(jQuery);
