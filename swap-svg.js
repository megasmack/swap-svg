/*
 * Swap-SVG v1.0.0
 * https://bitbucket.org/gsmke/swap-svg/
 */
;(function ($) {
    'use strict';

    if (!Modernizr.svg) {
        $('img[src$=svg]').attr('src', function () {
            return $(this).attr('src').replace('.svg', '.png');
        });
        $('img[src$=svgz]').attr('src', function () {
            return $(this).attr('src').replace('.svgz', '.png');
        });
    }

})(jQuery);
