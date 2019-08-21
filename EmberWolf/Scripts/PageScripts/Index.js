function ValidateEmail(elm) {
    var inputText = $(elm).val();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.match(mailformat)) {
        $(elm).removeClass('Invalid');
        return true;
    }
    else {
        $(elm).addClass('Invalid');
        return false;
    }
}

function ValidateNotBlank(elm) {
    var inputText = $(elm).val();
    if (inputText != "") {
        $(elm).removeClass('Invalid');
        return true;
    }
    else {
        $(elm).addClass('Invalid');
        return false;
    }
}

function OpenStory(story) {
    $('#Main').fadeOut(400);
    $('.storyblock').fadeOut(300).removeClass('open');
    HorizontalScroll = true;
    setTimeout(function () {
        $('#' + story).fadeIn(200).addClass('open');
        setTimeout(function () {
            $('#' + story).find('content').first().addClass('active')
        }, 200)
    }, 450)
};

function OpenMain() {
    $('.storyblock').addClass('opacity-0').removeClass('open');
    HorizontalScroll = false;
    setTimeout(function () {
        $('.storyblock .storyboard').animate({
            scrollLeft: 0
        }, 0);
        $('#Main').fadeIn(200);
        $('.storyblock').hide().removeClass('open').removeClass('opacity-0');
        $('content.active').removeClass('active');
        //$('.storyblock').find('content').first().addClass('active'); 
    }, 200)
};

function OpenOptin(elm) {
    if (elm != null && elm != undefined) {
        if (ValidateEmail(elm)) {
            $('#Optin').fadeIn(200);
        }
    } else {
        $('#Optin').fadeIn(200);
    }
}

function ScrollToSection(elm) {
    Scrolling = true;
    $('section.active').removeClass('active');
    $('html, body').animate({
        scrollTop: $(elm).offset().top
    }, 800);

    setTimeout(function () {
        $('.section-indicator.active').removeClass('active')
        $('a.section-indicator[href="#' + $(elm).attr('id') + '"]').addClass('active');
        $(elm).addClass('active');
        Scrolling = false;
    }, 1000)
}

function ScrollToStory(elm) {
    Scrolling = true;
    $('content.active').removeClass('active');
    var width = $(window).outerWidth();
    var count = $(elm).prevAll().length;
    console.log(elm);
    console.log(count);
    console.log(width);
    $('.storyblock.open .storyboard').animate({
        scrollLeft: (width * count)
    }, 800);
    console.log($(elm).offset().left);
    setTimeout(function () {
        $(elm).addClass('active');
        Scrolling = false;
    }, 1000)
}

//Set Scroll
var Scrolling = false;
var HorizontalScroll = false;
$(window).bind('mousewheel', function (e) {

    if (!HorizontalScroll) {
        //var elm = $('section.active');
        //if ($(elm).length != 0 && !Scrolling) {
        //    if (e.originalEvent.wheelDelta / 120 > 0) { // up
        //        var scrollTo = $(elm).prev('section');
        //        if ($(scrollTo).length != 0) { //prev elm
        //            ScrollToSection(scrollTo)
        //        }
        //    }
        //    else { // down
        //        $('#ScrollWheel').fadeOut(500);
        //        var scrollTo = $(elm).next('section');
        //        if ($(scrollTo).length != 0) { //next elm
        //            ScrollToSection(scrollTo)
        //        }
        //    }
        //}
    } else {
        var elm = $('content.active');
        if ($(elm).length != 0 && !Scrolling) {
            if (e.originalEvent.wheelDelta / 120 > 0) { // up
                var scrollTo = $(elm).prev('content');
                if ($(scrollTo).length != 0) { //prev elm
                    ScrollToStory(scrollTo)
                }
            }
            else { // down
                var scrollTo = $(elm).next('content');
                this.console.log(elm);
                this.console.log(scrollTo);
                if ($(scrollTo).length != 0) { //next elm
                    ScrollToStory(scrollTo)
                }
            }
        }
    }
});

function CheckScrollPosition(elm) {
    var scrollTop = $(elm).scrollTop();
    var windowHeight = window.innerHeight;
    var elmScrollHeight = $(elm)[0].scrollHeight;
    var Delta = (windowHeight - elmScrollHeight)

    if (scrollTop == 0 && (Delta < 1 && Delta > -1)) {
        return 0;
    }
    else if ((scrollTop + windowHeight + 2) >= elmScrollHeight) {
        return 1;
    } else if (scrollTop <= 0) {
        return 2;
    } else {
        return null;
    }
}

////Smooth Scrolling

$('a')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    //$('section.active').removeClass('active');
                    //$target.addClass('active')

                    //$('.section-indicator.active').removeClass('active')
                    //$('a.section-indicator[href="#' + $target.attr('id') + '"]').addClass('active');

                    $target.focus();


                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

// Sticky navbar
// =========================
$(document).ready(function () {

    // Custom function which toggles between sticky class (is-sticky)
    var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
        var stickyHeight = sticky.outerHeight();
        var stickyTop = stickyWrapper.offset().top;
        if (scrollElement.scrollTop() >= stickyTop) {
            if (!sticky.hasClass('is-sticky')) {
                stickyWrapper.height(stickyHeight);
                sticky.addClass("is-sticky");

            }
        }
        else {
            sticky.removeClass("is-sticky");
            stickyWrapper.height('auto');
        }
    };

    // Find all data-toggle="sticky-onscroll" elements
    $('[data-toggle="sticky-onscroll"]').each(function () {
        var sticky = $(this);
        var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
        sticky.before(stickyWrapper);
        sticky.addClass('sticky');

        // Scroll & resize events
        $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
            stickyToggle(sticky, stickyWrapper, $(this));
        });

        // On page load
        stickyToggle(sticky, stickyWrapper, $(window));
    });
});


// Hide header on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

//$(window).scroll(function (event) {
//    didScroll = true;
//    if ($(window).scrollTop() != 0) {
//        $('#Header-Logo').fadeIn(200);
//        $('header').addClass('shadow-lg').addClass('bg-white');
//        $('header').find('.text-white').addClass('text-dark').removeClass('text-white')
//        $('header').find('.btn-outline-light').addClass('btn-outline-primary').removeClass('btn-outline-light')
//    } else {
//        $('#Header-Logo').fadeOut(200);
//        $('header').removeClass('shadow-lg').removeClass('bg-white');
//        $('header').find('.text-dark').removeClass('text-dark').addClass('text-white')
//        $('header').find('.btn-outline-primary').removeClass('btn-outline-primary').addClass('btn-outline-light')
//    }
//});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scrolled down and past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        if ($(window).scrollTop() > 650) {
            $('header').removeClass('nav-down').addClass('nav-up');
        }
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    lastScrollTop = st;
}

function Optin() {
    let Range = $("#ValueRange").val();
    var Project = $('#ProjectType').val();
    var Email = $('#EmailInput').val();

    var From = Range.split(";")[0]
    var To = Range.split(";")[1]

    var hasEmail = ValidateEmail($('#EmailInput'));
    var hasRange = ValidateNotBlank($('#ProjectType'))

    if (hasEmail && hasRange) {

    }

}