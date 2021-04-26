/*global $ jQuery navigator window setTimeout */

(function () {
    "use strict";

    // iPad and iPod detection
    var isiPad = function () {
        return navigator.platform.indexOf("iPad") !== -1;
    },

    isiPhone = function () {
        return (
            navigator.platform.indexOf("iPhone") !== -1 ||
            navigator.platform.indexOf("iPod") !== -1
        );
    },

    // Parallax
    parallax = function () {
        $(window).stellar();
    },

    // Burger Menu
    burgerMenu = function () {
        $("body").on("click", ".js-fh5co-nav-toggle", function (event) {
            event.preventDefault();

            if ($("#navbar").is(":visible")) {
                $(this).removeClass("active");
            } else {
                $(this).addClass("active");
            }
        });
    },

    goToTop = function () {
        $(".js-gotop").on("click", function (event) {
            event.preventDefault();

            $("html, body").animate(
                {
                    scrollTop: $("html").offset().top
                },
                500
            );

            return false;
        });
    },

    // Page Nav
    clickMenu = function () {
        $('#navbar a:not([class="external"])').click(function (event) {
            var section = $(this).data("nav-section"),
                navbar = $("#navbar");

            if ($('[data-section="' + section + '"]').length) {
                $("html, body").animate(
                    {
                        scrollTop:
                            $('[data-section="' + section + '"]').offset().top -
                            50
                    },
                    500
                );
            }

            if (navbar.is(":visible")) {
                navbar.removeClass("in");
                navbar.attr("aria-expanded", "false");
                $(".js-fh5co-nav-toggle").removeClass("active");
            }

            event.preventDefault();
            return false;
        });
    },

    // Reflect scrolling in navigation
    navActive = function (section) {
        var $el = $("#navbar > ul");
        $el.find("li").removeClass("active");
        $el.each(function () {
            $(this)
                .find('a[data-nav-section="' + section + '"]')
                .closest("li")
                .addClass("active");
        });
    },

    navigationSection = function () {
        var $section = $("section[data-section]");

        $section.waypoint(
            function (direction) {
                if (direction === "down") {
                    navActive($(this.element).data("section"));
                }
            },
            {
                offset: "150px"
            }
        );

        $section.waypoint(
            function (direction) {
                if (direction === "up") {
                    navActive($(this.element).data("section"));
                }
            },
            {
                offset: function () {
                    return -$(this.element).height() + 155;
                }
            }
        );
    },

    // Window Scroll
    windowScroll = function () {
        var lastScrollTop = 0;

        $(window).scroll(function (event) {
            var header = $("#fh5co-header"),
                scrlTop = $(this).scrollTop(),
                expander = $("#expander");

            if (expander.hasClass("active")) {
                return;
            }

            if (scrlTop > 500 && scrlTop <= 2000) {
                header.addClass("navbar-fixed-top fh5co-animated slideInDown");
            } else if (scrlTop <= 500) {
                if (header.hasClass("navbar-fixed-top")) {
                    header.addClass(
                        "navbar-fixed-top fh5co-animated slideOutUp"
                    );
                    setTimeout(function () {
                        header.removeClass(
                            "navbar-fixed-top fh5co-animated slideInDown slideOutUp"
                        );
                    }, 100);
                }
            }
        });
    };

    // Document on load.
    $(function () {
        parallax();
        burgerMenu();
        clickMenu();
        windowScroll();
        navigationSection();
        goToTop();
    });
}());
