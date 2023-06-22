$(document).ready(function () {


    (function initPlayVideo() {
        var $videoCover = $('.head__overflow');
        var $videoPlayerIframe = $(".head__video iframe");

        $videoCover.on("click", function () {
            $videoCover.fadeOut();
            $videoPlayerIframe[0].src += "&autoplay=1";
        });
    })();


    var swiper = null;
    function addedSlider() {
        if ($(window).width() <= 768) {
            swiper = new Swiper(".reviews__slider", {
                autoHeight: true,
                spaceBetween: 20,
                loop: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
            });
        } else {
            swiper = null;
        }
    }
    if ($(window).width() <= 768) {
        addedSlider();
    }
    $(window).resize(addedSlider);


        $('.phone').intlTelInput({
            initialCountry: "auto",
            separateDialCode: true,
            geoIpLookup: function(success, failure) {
                $.get("https://ipinfo.io", function() {}, "jsonp").always(function(resp) {
                    var countryCode = (resp && resp.country) ? resp.country : "pl";
                    success(countryCode);
                });
            },
        })

});