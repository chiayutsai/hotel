$('.alert').hide();
$(document).ready(function () {
    let wdth = $(window).width();


    $('.navbar-togglebtn').click(function () {
        $(this).toggleClass('open');
        $('.navbar-collapse').toggleClass('open');
    });
    $('[data-toggle="dropdown"]').click(function (e) {
        e.preventDefault();
        $(this).next('.dropdown-menu').slideToggle();

    });
    $('.dropdown-item').click(function () {
        $(this).parent(".dropdown-menu:not('.js-quantity-menu')").slideUp()
    });
    $(window).click(function () {
        $('.dropdown-menu').slideUp();

    });

    $('.dropdown').click(function (event) {
        event.stopPropagation();
    });

    $('.dropUp').click(function (event) {
        event.stopPropagation();
    });
    $('.js-sort').click(function (e) {
        e.preventDefault();
        $('[data-toggle="sort"]').slideToggle();

    });
    $('.js-sort').focusout(function () {
        $('[data-toggle="sort"]').slideUp();

    });
    $('.js-filter').click(function (e) {
        e.preventDefault();
        $('[data-toggle="filter"]').css('height', '100vh');

    });
    $('.js-close').click(function (e) {
        e.preventDefault();
        $('[data-toggle="filter"]').css('height', '0');

    });
    $('.js-reservation').click(function (e) {
        e.preventDefault();
        $('.js-reservation-list').slideToggle();
        $('.js-reserve-price').toggleClass('opacity-0');
        $('.js-arrow-rotate').toggleClass('transform  rotate-180')
    });

    $('.js__card--hover').hover(function () {
        $(this).find(".slick-arrow").css('opacity', '1')

    }, function () {
        $(this).find(".slick-arrow").css('opacity', '0')
    });
    $('.js-country').click(function () {
        let select = $(this).children(".js-countrytext").data('country');
        console.log(select);
        $('.js-countryInput input').removeClass("hidden");
        $('.js-countryInput input').addClass("block");
        $('.js-countryInput p').addClass("text-xs uppercase font-bold text-black");
        $('.js-countryInput input').val(select);
    })
    $('.js-minus').click(function (e) {
        e.preventDefault();
        let quantity = parseInt($(this).next('input[type=number]').val());
        if (quantity > 0) {
            quantity = quantity - 1;
            $(this).next('input[type=number]').val(quantity);
        }
    });
    $('.js-plus').click(function (e) {
        e.preventDefault();
        let quantity = parseInt($(this).prev('input[type=number]').val());
        quantity = quantity + 1;
        $(this).prev('input[type=number]').val(quantity);

    })
    $('.js-form-quantity').click(function () {

        let quantity
        let adult = $('.js-adult').val();
        let child = $('.js-child').val();
        let room = $('.js-room').val();
        if (adult == 0 && child == 0) {
            quantity = room + " rooms"
        } else if (child == 0) {
            quantity = adult + " adults・" + room + " rooms"
        } else if (adult == 0) {
            quantity = child + " childs・" + room + " rooms"
        } else {
            quantity = adult + " adults・" + child + " childs・" + room + " rooms"
        }

        $('.js-quantityInput input').removeClass("hidden");
        $('.js-quantityInput input').addClass("block");

        $('.js-quantityInput p').addClass("text-xs uppercase font-bold text-black");
        $('.js-quantityInput input').val(quantity);
    })
    $('.js-room-quantity').click(function () {
        $('.js-price').slideDown();
        let roomA_num = parseInt($('.js-roomA').val());
        let roomB_num = parseInt($('.js-roomB').val());
        let roomC_num = parseInt($('.js-roomC').val());
        let roomA_price = parseInt($('.js-roomA').data('price'));
        let roomB_price = parseInt($('.js-roomB').data('price'));
        let roomC_price = parseInt($('.js-roomC').data('price'));
        let room = roomA_num + roomB_num + roomC_num;
        let roomPrice = (roomA_price * roomA_num + roomB_price * roomB_num + roomC_price * roomC_num) * 2
        $('.js-roomNum').text(room);
        $('.js-roomTotal').text(roomPrice);
    })
    $('.js-cancle').click(function (e) {
        e.preventDefault();
        $('.js-price').slideUp()

    })
    $(function () {
        let date = new Date();
        let today = date.toLocaleDateString();
        let month = ["January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"];

        $('a[data-toggle="date"]').daterangepicker({
            "autoUpdateInput": false,
            "autoApply": true,
            "locale": {
                "format": "YY/MM/DD",
                "separator": " | ",
                "applyLabel": "Apply",
                "cancelLabel": "Cancel",
                "fromLabel": "From",
                "toLabel": "To",
                "customRangeLabel": "Custom",
                "weekLabel": "W",
                "daysOfWeek": [
                    "S",
                    "M",
                    "T",
                    "W",
                    "T",
                    "F",
                    "S"
                ],
                "monthNames": month,
                "firstDay": 0,

            },

            "minDate": today
        });
        $('a[data-toggle="date"]').on('apply.daterangepicker', function (ev, picker) {
            $('.js-date input').removeClass("hidden");
            $('.js-date input').addClass("block");

            $('.js-date p').addClass("text-xs uppercase font-bold text-black");
            let startDate = picker.startDate.format('DD')
            let startmonth = month[parseInt(picker.startDate.format('MM')) - 1];
            let startDay = startDate + ' ' + startmonth
            let endDate = picker.endDate.format('DD')
            let endmonth = month[parseInt(picker.endDate.format('MM')) - 1];
            let endDay = endDate + ' ' + endmonth
            $('.js-date input').val(startDay + ' - ' + endDay);
        });
    });
    $("#slider-range").slider({
        range: true,
        min: 800,
        max: 4000,
        values: [800, 4000],
        slide: function (event, ui) {
            $(".js-min").val("TWD " + ui.values[0]);
            $(".js-max").val("TWD " + ui.values[1]);

        }
    });
    $(".js-min").val("TWD " + $("#slider-range").slider("values", 0));
    $(".js-max").val("TWD " + $("#slider-range").slider("values", 1) + '+');




    /*form check*/
    $('.js-alert-close').click(function () {
        $('.alert').fadeOut();
        $('body').removeClass('alert-open')

    })
    $('.alert').click(function () {
        $('.alert').fadeOut();
        $('body').removeClass('alert-open')

    });

    $('.js-subscribe').click(function (e) {
        e.preventDefault();
        $('body').addClass('alert-open')
        let email = $('.js-subscribe-input').val();
        if (email == '') {
            $('.js-fail').fadeIn();


        } else {
            $('.js-success').fadeIn();
            $('.js-subscribe-input').removeClass('form-danger');
            $('.js-subscribe-input').val('')
        }
    })
    $('.js-subscribe-focus').click(function () {
        $('.js-subscribe-input').focus();
        $('.js-subscribe-input').addClass('form-danger');
    })

    $('.js-formcheck').click(function (e) {
        e.preventDefault();
        let name = $('.js-reservation-name').val();
        let email = $('.js-reservation-email').val();
        if (name == '' || email == '') {
            $('body').addClass('alert-open')
            $('.js-fail').fadeIn();
        } else {
            window.location.href = "success.html"
        }

    })

    $('.js-formCheck-focus').click(function () {
        let name = $('.js-reservation-name').val();
        let email = $('.js-reservation-email').val();
        if (name == '') {
            $('.js-reservation-name').addClass('form-danger');
            $('.js-reservation-name').focus();
        } else {
            $('.js-reservation-name').removeClass('form-danger');
            $('.js-reservation-email').focus();
        }
        if (email == '') {
            $('.js-reservation-email').addClass('form-danger');
        }
    })

    $('.js-login').click(function (e) {
        e.preventDefault();
        let password = $('.js-login-password').val();
        let email = $('.js-login-email').val();
        if (password == '' || email == '') {
            $('body').addClass('alert-open')
            $('.js-fail').fadeIn();
        } else {
            window.location.href = "member.html"
        }

    })

    $('.js-login-focus').click(function () {
        let password = $('.js-login-password').val();
        let email = $('.js-login-email').val();
        if (email == '') {
            $('.js-login-email').addClass('form-danger');
            $('.js-login-email').focus();
        } else {
            $('.js-login-email').removeClass('form-danger');
            $('.js-login-password').focus();
        }
        if (password == '') {
            $('.js-login-password').addClass('form-danger');
        }
    })


    /* animation */
    AOS.init({

        duration: 800,
        easing: 'ease-in-out',
        once: true,



    });


    /* slick */
    $('.banner-slick').slick({
        arrows: true,
        autoplay: true,
    });
    $('.card-slick').slick({
        slidesToShow: 4,
        arrows: true,

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    centerMode: true,
                    centerPadding: '60px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '75px',
                }
            }]
    });
    $('.card-noarrow-slick').slick({
        slidesToShow: 3,
        arrows: false,

        responsive: [

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                    centerMode: true,
                    centerPadding: '75px',
                }
            }]
    });
    $('.card__imgSlick').slick({
        slidesToShow: 1,
        arrows: true,
    })

    $('.room-slick').slick({
        slidesToShow: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick'

            },
            {
                breakpoint: 576,
                settings: {
                    init: true,
                    slidesToShow: 1,
                    arrows: true,
                }
            },

        ]
    });
    $(window).on('resize', function () {
        var viewportWidth = $(window).width();

        if (viewportWidth < 576) {
            $('.room-slick').slick({
                slidesToShow: 1,
                arrows: true,
            });
        } else {

            $('.room-slick').slick('unslick');
        }
    });
});