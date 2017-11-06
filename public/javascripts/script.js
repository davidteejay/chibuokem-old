$(function(){
    $('.modal').modal({
        opacity: 1,
        starting_top: '0%',
        ending_top: '0%',
        complete: function(){
            window.location.hash = "#!"
        }
    });
    
    var hash = window.location.hash;
    
    if (hash == "#thanks"){
        $(hash).modal('open');
    }
    
    $('.parallax').parallax();
    
    //smooth scrolling on anchor link clicks
    $(".next, .to-top").on('click', function(event){
        event.preventDefault();

        var hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900);
    });
    
    $('.slider').slider({
        interval: 4500
	});
    
    //animations
    $(window).on('scroll', function(){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $('.to-top').addClass('slideup').removeClass('slidedown');
            $('.a2a_kit').fadeIn();
        } else {
            $('.to-top').addClass('slidedown').removeClass('slideup');
            $('.a2a_kit').fadeOut();
        }

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
    
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slideup");
            }
        });

        $(".slideanim2").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slidedown");
            }
        });

        $(".slideanim3").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("slideright");
            }
		});
		
		$(".slideanim4").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            
            if (pos < winTop + 600) {
                $(this).addClass("scaleup");
            }
        });
    });
    
    // Skills percentage Countup
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
	});
    
    var options = [
        { selector: '#social-menu', offset: 200, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } 
        },
    ];
    
     Materialize.scrollFire(options);
});