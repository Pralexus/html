$(document).ready(function() {
    $('html').addtocopy({
        htmlcopytxt: '<br> Подробнее: <a href="' + window.location.href + '">' + window.location.href + '</a>',
        minlen: 10,
        addcopyfirst: false
    });

    if ($('.validat').length) {
        $('.validat').liValidForm({
            captcha: 'code'
        })
    }
});