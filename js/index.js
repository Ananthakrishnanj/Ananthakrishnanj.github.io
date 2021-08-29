$(document).ready( function() {
    const heroHeading = $('.hero-text-container .heading').text().replace(/\S/g,"<span class='letter'>$&</span>");
    $('.hero-text-container .heading').html(heroHeading);

    $('iframe').contents().find("nav").attr("style","display:none")

    $.fn.isInViewport = function() {
        var elementTop = $(this).offset().top;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
        };

    $(".hero-section .scroll-down").click( function() {
        $('main').css('scroll-snap-type', 'none');
        $('main').animate({
            scrollTop: $(".about-section").offset().top
        }, 1000)
        .promise()
        .done(() => {
            $('main').css('scroll-snap-type', 'y mandatory');
            $(".hero-section .scroll-down").css('display', 'none');
        })
    });

    $('main').on("scroll", function() {
        if($(".about-section").isInViewport()) {
            $(".hero-section .scroll-down").css('display', 'none');
        }
        });

    anime.timeline({loop: false})
    .add({
        targets: '.hero-text-container .heading .letter',
        rotateY: [-90, 0],
        easing: "easeOutExpo",
        duration: 3000,
        delay: (el, i) => 45 * i,
    });

    anime.timeline({loop: false})
    .add({
        targets: '.hero-text-container .description',
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1500,
        delay: 2000,
    })
    .add({
        targets: '#scene img',
        scale: [0,1],
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 1000,
        delay: (el, i) => 500 *i
    })
    .add({
        targets: ".hero-section .scroll-down",
        opacity: [0,1],
        easing: "easeOutCirc",
        duration: 2000,
        delay: 0
    })
    ;

    anime.timeline({loop: true})
    .add({
        targets: ".hero-section .scroll-down i",
        translateY: [0, 40],
        easing: "linear",
        duration: 1000,
        delay: 0
    })

    anime.timeline({loop: true})
    .add({
        targets: '.works-section .shapes',
        scale : [0, 1],
        opacity : [0, 1],
        easing: "easeOutCirc",
        duration: 3000,
        delay: (el, i) => 1000 *i
    })
    .add({
        targets: '.works-section .shapes',
        scale : [1, 0],
        opacity : [1, 0],
        easing: "easeOutCirc",
        duration: 2000,
        delay: (el, i) => 600 *i
    })
})