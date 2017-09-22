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
    
    setInterval(function(){
        setTimeout(function(){
            $('.text-toggle').text('SMART');
        }, 1000);
        setTimeout(function(){
            $('.text-toggle').text('JOVIAL');
        }, 2000);
        setTimeout(function(){
            $('.text-toggle').text('CHIBUOKEM...');
        }, 3000);
    }, 3000);
    
    $(window).on('scroll', function(){
        $(".determinate").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(".html").addClass("flow-html");
                $(".css").addClass("flow-css");
                $(".js").addClass("flow-js");
                $(".python").addClass("flow-python");
                $(".php").addClass("flow-php");
            }
        });
    });
    
    $('.slider').slider({
        interval: 3000
    });
})