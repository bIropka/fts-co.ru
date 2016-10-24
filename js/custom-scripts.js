$(document).ready(function () {

    /******************************
     ******* init scripts *********
     ******************************/

    setTimeout(function() {
        $('.slider').animate({opacity: 1});
    }, 500);

    /******************************
     ******* other scripts ********
     ******************************/

    $('.to-top').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });

    $('.burger').click(function() {
        $(this).siblings('.nav').slideToggle();
    });


    /*******************************
     ******* slider scripts ********
     ******************************/

    $('.slider').slick({
        arrows: false,
        dots: true
    });

    /*******************************
     ******* digits  script ********
     ******************************/
    var show = true;
    var countbox = ".statistics";
    $(window).on("scroll load resize", function() {

        if (!show) return false;

        var w_top = $(window).scrollTop();
        var e_top = $(countbox).offset().top;

        var w_height = $(window).height();
        var d_height = $(document).height();

        var e_height = $(countbox).outerHeight();

        if (w_top + w_height * 0.8 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {

            var space_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

            $('#years').animateNumber(
                {
                    number: 15,
                    numberStep: space_separator_number_step
                }, 1500
            );

            $('#countries').animateNumber(
                {
                    number: 194,
                    numberStep: space_separator_number_step
                }, 1500
            );

            $('#cargo').animateNumber(
                {
                    number: 900,
                    numberStep: space_separator_number_step
                }, 1500
            );

            $('#contracts').animateNumber(
                {
                    number: 450,
                    numberStep: space_separator_number_step
                }, 1500
            );

            $('#transports').animateNumber(
                {
                    number: 3,
                    numberStep: space_separator_number_step
                }, 1500
            );

            show = false;
        }
    });

});

