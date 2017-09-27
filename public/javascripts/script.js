$(function(){
    //preloader
    $(window).on('load', () => {
		$('.preloader').slideUp();
	});
    
    //Initiate WOW JS
	new WOW().init();
    $('.parallax').parallax();
    
    //smooth scrolling on anchor link clicks
    $(".next, .to-top").on('click', function(){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900);
    });
    
    // Typewriter script
    setTimeout(() => {
        var app = document.getElementById('animateText');

        var typewriter = new Typewriter(app, {
            loop: true,
            typingSpeed: 300
        });



        typewriter.typeString('SOCIAL')
            .pauseFor(2000)
            .deleteAll()
            .typeString('JOVIAL')
            .pauseFor(2000)
            .deleteAll()
            .typeString('SMART')
            .pauseFor(2000)
            .deleteAll()
            .typeString('EGOCENTRIC')
            .start();
    }, 3000);
    
    //animations
    $(window).on('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $('.to-top').addClass('slideup').removeClass('slidedown');
        } else {
            $('.to-top').addClass('slidedown').removeClass('slideup');
        }
    });
    
    $(".determinate").bind('inview', function(event, visible, visiblePartX, visiblePartY){
        if(visible){
            $(".html").addClass("flow-html");
            $(".css").addClass("flow-css");
            $(".js").addClass("flow-js");
            $(".python").addClass("flow-python");
            $(".php").addClass("flow-php");
        }
    });
    
    $('.slider').slider({
        interval: 4500
    });
    
    // My custom parallax
    $(window).on('scroll', () => {
        var ypos = window.pageYOffset;
        $('.parallax-img').css('top', ypos * .7 + 'px');
    });
    
    // Countdown
    $('#skills .col .valign .right').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
		if (visible) {
			$(this).find('.timer').each(function () {
				var $this = $(this);
				$({ Counter: 0 }).animate({ Counter: $this.text() }, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.text(Math.ceil(this.Counter));
					}
				});
			});
			$(this).unbind('inview');
		}
	})
});