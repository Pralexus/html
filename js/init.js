$(document).ready(function() {

    // detect transit support
    var transitFlag = Modernizr.cssanimations;

    localStorage.clear(); //не забыть удалить

    function validation() {
        $('.wForm').each(function() {
            var formValid = $(this);
            formValid.validate({
                showErrors: function(errorMap, errorList) {
                    if (errorList.length) {
                        var s = errorList.shift();
                        var n = [];
                        n.push(s);
                        this.errorList = n;
                    }
                    this.defaultShowErrors();
                },
                invalidHandler: function(form, validator) {
                    $(validator.errorList[0].element).trigger('focus');
                    formValid.addClass('no_valid');
                },
                submitHandler: function(form) {
                    formValid.removeClass('no_valid');
                    if (form.tagName === 'FORM') {
                        form.submit();
                    } else {
                        $.ajax({
                            type: 'POST',
                            url: $(form).attr('data-form-url'),
                            data: $(form).find('select, textarea, input').serializeArray(),
                            dataType: 'json',
                            success: function(data) {

                            },
                            error: function() {
                                console.log('Форма отправлена.');
                            }
                        });
                    }
                }
            });
        });

        $('.wForm').on('change', '.wFile', function(event) {
            var m = $(this).prop('multiple'),
                f = this.files,
                label = $(this).siblings('.wFileVal'),
                t = label.data('txt');
            if (f.length) {
                if (m) {
                    var v = t[1].replace('%num%', f.length),
                        a = [];
                    for (var i = 0; i < f.length; i++) {
                        a.push(f[i].name);
                    }
                    label.html('<span>' + v + ' <ins>(' + a.join(', ') + ')</ins></span>');
                    $(this).blur();
                } else {
                    label.html(t[1] + ': ' + f[0].name);
                    $(this).blur();
                }
            } else {
                label.html(t[0]);
            }
        });

        /* Без тега FORM */
        $('.wForm').on('click', '.wSubmit', function(event) {
            var form = $(this).closest('.wForm');
            form.valid();
            if (form.valid()) {
                form.submit();
            }
        });

        /* Сброс Без тега FORM */
        $('.wForm').on('click', '.wReset', function(event) {
            var form = $(this).closest('.wForm');
            if (form.is('DIV')) {
                form.validReset();
            }
        });
    }

    validation();

    /* magnificPopup */

    $('body').magnificPopup({
        delegate: '.mfiA',
        callbacks: {
            elementParse: function(item) {
                this.st.ajax.settings = {
                    url: item.el.data('url'),
                    type: 'POST',
                    data: (typeof item.el.data('param') !== 'undefined') ? item.el.data('param') : ''
                };
            },
            ajaxContentAdded: function(el) {
                validation();
            }
        },
        type: 'ajax',
        removalDelay: 300,
        mainClass: 'zoom-in'
    });

    /*wTxt iframe*/
    function wTxtIFRAME() {
        var list = $('.wTxt').find('iframe');
        if (list.length) {
            for (var i = 0; i < list.length; i++) {
                var ifr = list[i];
                var filter = /youtu.be|youtube|vimeo/g; // d
                //if (typeof $(ifr).data('wraped') === 'undefined') { // без фильтра
                if (typeof $(ifr).data('wraped') === 'undefined' && !!ifr.src.match(filter)) {
                    var ratio = (+ifr.height / +ifr.width * 100).toFixed(0);
                    $(ifr).data('wraped', true).wrap('<div class="iframeHolder ratio_' + ratio.slice() + '"></div>');
                }
            }
        }
    }

    $(window).load(function() {
        wTxtIFRAME();
    });

});