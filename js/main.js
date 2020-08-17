$(document).ready(function(){
	$('nav a').on('click', function(event){
		
		if ($('.top-row-burger').hasClass('active') && $('.menu-burger').hasClass('active')) {
			
			$('.top-row-burger').removeClass('active');

			$('.menu-burger').removeClass('active');

			$('body').removeClass('lock');
		};
		
		event.preventDefault();

		let href = $(this).attr('href');

		let offset = $(href).offset().top;


		$('body,html').animate({
			scrollTop: offset,
		}), 700;
	});

	// swiper

	var mySwiper = new Swiper('.swiper-container', {
	  // Optional parameters
	  direction: 'horizontal',
	  // slidesPerView: 1,
	  loop: true,

	  // If we need pagination
	  pagination: {
	    el: '.swiper-pagination',
	    clickable: true,
	  },

	  // Navigation arrows
	  navigation: {
	    nextEl: '.right-scroll',
	    prevEl: '.left-scroll',
	  },

	  // And if we need scrollbar
	  scrollbar: {
	    el: '.swiper-scrollbar',
	  },

	  breakpoints: {
	 
		    // 320: {
		    //   slidesPerView: 1,
		    // },

		    320: {
		      slidesPerView: 1,
		      // spaceBetween: 20,
		      // loopedSlides: 1,
		    },

		    410: {
		      slidesPerView: 'auto',
		      spaceBetween: 15,
		      // loopedSlides: 1,
		    },

		    820: {
		      slidesPerView: 2,
		      spaceBetween: 35,
		      // loopedSlides: 1,
		    },

		    1025: {
		      slidesPerView: 'auto',
		      spaceBetween: 30,
		      // loopedSlides: 1,
		    },

		    1340: {
		      slidesPerView: 3,
		      spaceBetween: 30,
		      // loopedSlides: 1,
		    },
  	  }

	})

	// form popup
	$('.input-tel').inputmask({"mask": "+7(999) 999-99-99"});
	
	function bodyLock() {
		const lockPaddingValue = $(window).outerWidth() - $('body').width() + 'px';
		console.log( lockPaddingValue);
		$('body').css('padding-right', lockPaddingValue);
	};
		

	$('.popup-button').on('click', function(){
		$('.popup').fadeIn(800);
		bodyLock();
		$('body').addClass('lock');

	});

	$('.popup-closer').on('click', function(event){
		event.preventDefault();
		$('.popup').fadeOut(800);
		setTimeout (function(){
			$('body').removeClass('lock');
			$('body').css('padding-right', 0);
		}, 800);
	});

	$('.container-form').on('click', function(event){
		if (event.target == this) {
			$('.popup').fadeOut(800);
			setTimeout (function(){
			$('body').removeClass('lock');
			$('body').css('padding-right', 0);
		}, 800);
			
		};
	});

	// form popup-more
	$('.popup-button-more').on('click', function(){
		$('.popup-more').fadeIn(800);
		bodyLock();
		$('body').addClass('lock');

	});

	$('.popup-closer').on('click', function(event){
		event.preventDefault();
		$('.popup-more').fadeOut(800);
		setTimeout (function(){
			$('body').removeClass('lock');
			$('body').css('padding-right', 0);
		}, 800);
	});
	
	$('.container-form').on('click', function(event){
		if (event.target == this) {
			$('.popup-more').fadeOut(800);
			setTimeout (function(){
			$('body').removeClass('lock');
			$('body').css('padding-right', 0);
		}, 800);
			
		};
	});

	// отправка формы
	$('form').each(function () {
			$(this).validate({
				errorPlacement(error, element) {
					return true;
					},
				focusInvalid: false,
				rules: {
					phone: {
						required: true,
					},
					name: {
						required: true,
					},
					email: {
						required: true,
					}
				},
				
				submitHandler(form) {
					let th = $(form);

				$.ajax({
					type: 'POST',
					url: 'mail.php',
					data: th.serialize(),
					// eslint-disable-next-line func-names
				}).done(() => {

					th.trigger('reset');
				});

				return false;
				}
		});
	});

});