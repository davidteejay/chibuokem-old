$(function(){
    $('.parallax').parallax();
    
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
    
    $(window).on('scroll', () => {
        $(".determinate").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 300) {
                $(".html").addClass("flow-html");
                $(".css").addClass("flow-css");
                $(".js").addClass("flow-js");
                $(".python").addClass("flow-python");
                $(".php").addClass("flow-php");
            }

            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                $('.to-top').addClass('slideup').removeClass('slidedown');
            } else {
                $('.to-top').addClass('slidedown').removeClass('slideup');
            }
        });
    });
    
    $('.slider').slider({
        interval: 4500
    });
    
    // My custom parallax
    $(window).on('scroll', () => {
        var ypos = window.pageYOffset;
        $('.parallax-img').css('top', ypos * .7 + 'px');
    });
});