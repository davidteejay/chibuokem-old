$(function(){
    $('.parallax').parallax();
    
    $(".next").on('click', function(event) {
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function() {
            window.location.hash = hash;
        });
    });
    
    // Typewriter script
    setTimeout(() => {
        var app = document.getElementById('animateText');

        var typewriter = new Typewriter(app, {
            loop: true,
            typingSpeed: 300
        });



        typewriter.typeString("SOCIAL")
            .pauseFor(200)
            .deleteAll()
            .typeString('JOVIAL')
            .pauseFor(200)
            .deleteAll()
            .typeString('SMART')
            .pauseFor(200)
            .deleteAll()
            .typeString('EGOCENTRIC')
            .start();
    }, 3000);
    
    $(window).on('scroll', function(){
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
        });
    });
    
    $('.slider').slider({
        interval: 4500
    });
    
    // My custom parallax
    $(window).on('scroll', function(){
        var ypos = window.pageYOffset;
        $('.parallax-img').css('top', ypos * .7 + 'px');
    })
})