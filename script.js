// ==UserScript==
// @name         Visible Textareas
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  make textareas more visible
// @downloadURL  https://raw.githubusercontent.com/whitefang57/pcMomUpdate/master/script.js
// @author       You
// @match        https://*.planningcenteronline.com/*
// @grant        none
// @require      https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    $.noConflict();
    setInterval(function() {
        jQuery("textarea, input[type=text], select").css({"border-color": "#d2d2d2"});
    }, 1000);
})();
