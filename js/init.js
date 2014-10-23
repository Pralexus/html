$(document).ready(function() {
    
    if ($('.validat').length) {
        $('.validat').liValidForm({
            captcha: 'code'
        });
    }

    // detect transit support
    /*var transitFlag = true;
    if (!Modernizr.cssanimations) {
        transitFlag = false;
    }*/

});