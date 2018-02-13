(function() {
    'use strict';

    $.noConflict();
    setInterval(function() {
        jQuery("textarea, input[type=text], select").css({"border-color": "#d2d2d2"});
    }, 1000);
})();
