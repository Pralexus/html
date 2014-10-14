/*-------------------------------  main.js  ------------------------------------*/
    $(document).ready(function() {
        if (navigator.vendor === 'Apple Computer, Inc.') {
            $('html').addClass('safari');
            if ((navigator.platform).slice(0, 3) === 'Win') {
                $('html').addClass('safari-win');
            }
        }

        if (document.all) {
            $('html').addClass('ie');
            if (document.all && !document.addEventListener) {
                $('html').addClass('ie8');
            } else if (document.all && !window.atob) {
                $('html').addClass('ie9');
            }
        }


        if (!Modernizr.input.placeholder) {
            $('input[placeholder]').each(function() {
                var el = $(this);
                var ph = el.attr('placeholder');
                if (el.val() === '') {
                    el.val(ph);
                }
                el.focus(function() {
                    if (el.val() === ph) {
                        el.val('');
                    }
                }).blur(function() {
                    if (el.val() === '') {
                        el.val(ph);
                    }
                });
            });
        }
        /*-----------------------*/
        $(window).load(function() {

            jQuery.fn.liQuotes = function(options) {
                var o = jQuery.extend({}, options);
                return this.each(function() {
                    htmlreplace($(this));

                    function htmlreplace(element) {
                        if (!element) element = document.body;
                        var nodes = $(element).contents().each(function() {
                            if (this.nodeType == Node.TEXT_NODE) {
                                $(this).wrap('<span class="node_t"/>');
                            } else {
                                htmlreplace(this);
                            }
                        });
                    }
                    $('.node_t').each(function() {
                        var el = $(this),
                            str = el.html(),
                            raquo_one = /'\s/g,
                            laquo_one = /\s'/g,
                            raquo_two = /"\s/g,
                            laquo_two = /\s"/g,
                            raquo_brack_one = /'\)/g,
                            laquo_brack_one = /\('/g,
                            raquo_brack_two = /"\)/g,
                            laquo_brack_two = /\("/g,
                            raquo_tag_one = /'$/g,
                            laquo_tag_one = /^'/g,
                            raquo_tag_two = /"$/g,
                            laquo_tag_two = /^"/g,
                            raquo_one_coma = /'\,/g,
                            raquo_one_dot = /'\./g,
                            raquo_two_coma = /"\,/g,
                            raquo_two_dot = /"\./g,
                            raquo_one_colon = /'\:/g,
                            raquo_two_colon = /"\:/g,
                            quest_one_colon = /'\?/g,
                            quest_two_colon = /"\?/g,
                            exclam_one_colon = /'\!/g,
                            exclam_two_colon = /"\!/g,
                            semic_one_colon = /'\;/g,
                            semic_two_colon = /"\;/g;
                        var result = str.replace(laquo_one, " &laquo;").replace(raquo_one, "&raquo; ").replace(laquo_two, " &laquo;").replace(raquo_two, "&raquo; ").replace(raquo_one_coma, "&raquo;,").replace(raquo_one_dot, "&raquo;.").replace(raquo_two_coma, "&raquo;,").replace(raquo_two_dot, "&raquo;.").replace(raquo_one_colon, "&raquo;:").replace(raquo_two_colon, "&raquo;:").replace(quest_one_colon, "&raquo;?").replace(quest_two_colon, "&raquo;?").replace(exclam_one_colon, "&raquo;!").replace(exclam_two_colon, "&raquo;!").replace(laquo_brack_one, "(&laquo;").replace(raquo_brack_one, "&raquo;)").replace(laquo_brack_two, "(&laquo;").replace(raquo_brack_two, "&raquo;)").replace(laquo_tag_one, "&laquo;").replace(raquo_tag_one, "&raquo;").replace(laquo_tag_two, "&laquo;").replace(raquo_tag_two, "&raquo;").replace(semic_one_colon, "&raquo;;").replace(semic_two_colon, "&raquo;;");
                        el.html(result);
                    });
                    $('.node_t').each(function() {
                        var html = $(this).html();
                        $(this).after(html).remove();
                    });
                });
            };
            $('.q').liQuotes();
        });
    });
/*-------------------------------  liValidForm.js  ------------------------------------*/ 
    jQuery.fn.liValidForm = function(options) {
        // настройки по умолчанию
        var o = jQuery.extend({
            valid: 'valid', //valid element selector 
            r: 'r', //mandatory element selector 
            row: 'row', //form str selector 
            noValid: 'noValid', //noValid element selector 
            captcha: false, //'slider', 'code' or false
            capLabel: '',
            capError: ''
        }, options);

        return this.each(function() {

            var form = $(this);
            var but = $('.submit', form);
            var butWrap = but.closest('.row');
            var capLabel;
            var capError;

            var createCpatcha = function() {
                if (o.captcha == 'code') {

                    capLabel = 'Введите код';
                    capError = 'Неправильно введен проверочный код'
                    if (o.capLabel) {
                        capLabel = o.capLabel
                    }
                    if (o.capError) {
                        capError = o.capError
                    }
                    captchaHtml =
                        '<div class="row">' +
                        '<label class="label">' + capLabel + '</label>' +
                        '<div class="controls">' +
                        '<input class="captchaInput valid" data-error="' + capError + '" type="text" name="hislo" maxlength="4" size="4"/>' +
                        '<img class="captchaPic" src="pic/securimage_show.png" id="image" />' +
                        '<a class="refreshCptcha" title="Обновить изображение" href="#">update image</a>' +
                        '</div>' +
                        '</div>'
                }
                if (o.captcha == 'slider') {

                    capLabel = 'Передвиньте ползунок в правый край';
                    capError = 'Позиция ползунка неправильна'
                    if (o.capLabel) {
                        capLabel = o.capLabel
                    }
                    if (o.capError) {
                        capError = o.capError
                    }
                    captchaHtml =
                        '<div class="row">' +
                        '<label class="label">' + capLabel + '</label>' +
                        '<div class="controls">' +
                        '<input type="hidden" class="amount" />' +
                        '<input type="text"  class="valid captchaView" data-error="' + capError + '">' +
                        '<div class="slWrap">' +
                        '<div class="slider"></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>	'
                }
                butWrap.before(captchaHtml)
            }
            if (!$('.costumCaptcha', form).length) {
                //createCpatcha()
            }



            var captchaView = $('.captchaView', form).val('');
            var amount = $('.amount', form);
            var capSlider = $('.slider', form);
            var slWrap = $('.slWrap', form).css({
                width: (captchaView.width() - 29) + 'px'
            });
            var fLabel = $('.label', form);
            var valid_form = $('.' + o.valid, form);
            var mand_el = valid_form.length; //Кол-во обязательных эл-тов



            var butTop = 0;
            if (but.css('top') != 'auto') {
                butTop = but.css('top');
            }

            //Создаем щит для кнопки
            var bw = but.actual('outerWidth');
            var bh = but.actual('outerHeight');

            var psevdo_but = $('<div>').css({
                width: bw,
                height: bh,
                left: 0,
                top: butTop,
                position: 'absolute',
                zIndex: '100',
                marginLeft: but.css('marginLeft'),
                marginTop: but.css('marginTop'),
                opacity: '0.1'
            }).addClass('psevdo_but');






            var servCaptcha = 9668; //offline test value
            var data = 1;
            var captchaHtml = '';

            var addErrorFunc = function(elError) {
                if (!elError.closest('.controls').find('.errorBox').length) {
                    if (elError.is('[data-error]')) {
                        var errorText = 'Неправильно заполнено поле!';
                        if (elError.data('error') != '') {
                            errorText = elError.data('error')
                        }
                        var errorBox = $('<div>').addClass('errorBox').hide().html(errorText).appendTo(elError.closest('.controls'));
                        errorBox.slideDown()
                    }
                }
            };
            var removeErrorFunc = function(elError) {
                elError.closest('.controls').find('.errorBox').slideUp(function() {
                    $(this).remove();
                });
            }

            //email
                function ValidEmail(emailAddress) {
                    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
                    return pattern.test(emailAddress);
                }

                //url
                function ValidUrl(urlAddress) {
                    var pattern = new RegExp(/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i);
                    return pattern.test(urlAddress);
                }

                //digits
                function ValidDigits(dig) {
                    var pattern = new RegExp(/^\d+$/);
                    return pattern.test(dig);
                }

                //radio
                function ValidRadio(el_r) {
                    var el_name = el_r.attr('name')
                    var check = el_r.closest("form").find('[name=' + el_name + ']').filter(':checked').length
                    if (check > 0) {
                        check_el = true
                    } else {
                        check_el = false
                    }
                    return check_el
                }


            var add_w = function(el_f) {
                el_f.addClass('wrong');
            }
            var remove_w = function(el_f) {
                el_f.removeClass('wrong');
            }
            var add_c = function(el_f) {
                el_f.addClass('indicator');
                addErrorFunc(el_f);
            }
            var remove_c = function(el_f) {
                el_f.removeClass('indicator');
                removeErrorFunc(el_f);
            }


            var wrong = function() {
                var wrong_el = $('.wrong', form).length //Кол-во незаполненых эл-тов

                if (wrong_el > 0) {
                    but.addClass('disabled').css({
                        opacity: '0.5'
                    });
                    if (!$('.psevdo_but', form).length)
                        but.after(psevdo_but)
                } else {
                    but.removeClass('disabled').css({
                        opacity: '1'
                    });
                    $('.psevdo_but', form).remove()
                }
            }

            var valider = function(z_el_form, z_el_val) {

                var z_el_val = $.trim(z_el_form.val());

                if (z_el_val != '') {

                    if (z_el_form.is(':not(".email")') && z_el_form.is(':not(".url")') && z_el_form.is(':not(".digits")') && z_el_form.is(':not("[name=hislo]")') && z_el_form.is(':not("[type=radio]")') && z_el_form.is(':not("[type=checkbox]")') && z_el_form.is(':not("select")')) {

                        if (z_el_form.next('.fakefile').length) {
                            remove_w(z_el_form.next('.fakefile').find('input'));
                            remove_c(z_el_form.next('.fakefile').find('input'));
                        } else {
                            remove_w(z_el_form);
                            remove_c(z_el_form);
                        }
                    } else {
                        //if select
                        if (z_el_form.is('select')) {
                            if (!z_el_form.find('option:selected').is('.placeholder')) {
                                remove_w(z_el_form);
                                remove_c(z_el_form);
                            } else {
                                add_w(z_el_form);
                                add_c(z_el_form);
                            }
                        }

                        //if email
                        if (z_el_form.is('.email')) {
                            if (ValidEmail(z_el_val)) {

                                remove_w(z_el_form);
                                remove_c(z_el_form);
                            } else {
                                add_w(z_el_form);
                                add_c(z_el_form);
                            }
                        }
                        //if url
                        if (z_el_form.is('.url')) {
                            if (ValidUrl(z_el_val)) {
                                remove_w(z_el_form);
                                remove_c(z_el_form);
                            } else {
                                add_w(z_el_form);
                                add_c(z_el_form);
                            }
                        }
                        //if digits
                        if (z_el_form.is('.digits')) {
                            if (ValidDigits(z_el_val)) {
                                remove_w(z_el_form);
                                remove_c(z_el_form);
                            } else {
                                add_w(z_el_form);
                                add_c(z_el_form);
                            }
                        }

                        //if radio
                        if (z_el_form.is('[type=radio]') || z_el_form.is('[type=checkbox]')) {
                            if (ValidRadio(z_el_form)) {
                                $('[name=' + z_el_form.attr('name') + ']', form).each(function() {
                                    $(this).removeClass('wrong').removeClass('indicator');
                                    removeErrorFunc($(this));
                                })
                            } else {
                                $('[name=' + z_el_form.attr('name') + ']', form).each(function() {
                                    $(this).addClass('wrong').addClass('indicator');
                                    addErrorFunc($(this));
                                })

                            }
                        }


                        //if captcha
                        if (z_el_form.is('.captchaInput')) {
                            if (o.captcha) {

                                if (o.captcha == 'code' && z_el_val.length == 4) {

                                    /*
    									$.get("/ajax/check_captcha.php?num="+z_el_val, function(data){
    									*/

                                    if (data == 1) {
                                        z_el_form.removeClass('wrong');
                                        z_el_form.removeClass('indicator');
                                        removeErrorFunc(z_el_form);
                                    } else {
                                        z_el_form.addClass('wrong');
                                        z_el_form.addClass('indicator');
                                        addErrorFunc(z_el_form);
                                    }
                                    wrong()
                                    /*
    									});	
    									*/
                                } else {
                                    add_w(z_el_form);
                                    add_c(z_el_form);
                                }

                            }
                        }


                    }
                } else {
                    if (z_el_form.next('.fakefile').length) {
                        add_w(z_el_form.next('.fakefile').find('input'));
                        add_c(z_el_form.next('.fakefile').find('input'));
                    } else {
                        add_w(z_el_form);
                        add_c(z_el_form);
                    }
                }
                wrong()
            }

            var validMain = function() {

                fLabel.each(function() {
                    $('<span>').addClass(o.r).html('&nbsp;').appendTo($(this));
                })
                $('.' + o.noValid).each(function() {
                    $(this).closest('.' + o.row).find('.' + o.r).html('&nbsp;').removeClass('mand');
                })


                valid_form.not('.' + o.noValid).blur(function() {
                    valider($(this), $(this).val())
                })
                valid_form.not('.' + o.noValid).keyup(function() {
                    valider($(this), $(this).val())
                })
                valid_form.not('.' + o.noValid).change(function() {
                    valider($(this), $(this).val())
                })

                psevdo_but.click(function() {
                    valid_form.not('.' + o.noValid).each(function() {
                        valider($(this), $(this).val())
                    })
                    return false;
                })

                var mySubmit = function() {
                    valid_form.not('.' + o.noValid).each(function() {
                        valider($(this), $(this).val());
                    });
                    if (form.find('.valid.wrong').size() == 0) {
                        form.trigger('submit');
                    }
                };

                $('*', form).on('keydown', function(e) {

                    if (e.keyCode == 13 && !$(e.target).is('textarea')) {
                        return false;
                    }

                });

                but.on('click', function() {
                    mySubmit();
                    return false;
                });

                valid_form.not('.' + o.noValid).each(function() {
                    $(this).closest('.' + o.row).find('.r').html('*').addClass('mand');
                    var el_form = $(this);
                    var el_val = $.trim(el_form.val());
                    if (el_val != '') {
                        if (el_form.is(':not(".email")') && el_form.is(':not(".url")') && el_form.is(':not(".digits")') && el_form.is(':not("[name=hislo]")') && el_form.is(':not("[type=radio]")') && el_form.is(':not("[type=checkbox]")') && el_form.is(':not("select")')) {
                            if (el_form.next('.fakefile').length) {
                                remove_w(el_form.next('.fakefile').find('input'));
                            } else {
                                remove_w(el_form);
                            }
                        } else {
                            //if select
                            if (el_form.is('select')) {
                                if (!el_form.find('option:selected').is('.placeholder')) {
                                    remove_w(el_form);
                                } else {
                                    add_w(el_form);
                                }
                            }

                            //if email
                            if (el_form.is('.email')) {
                                if (ValidEmail(el_val)) {
                                    remove_w(el_form);
                                } else {
                                    add_w(el_form);
                                }
                            }
                            //if url
                            if (el_form.is('.url')) {
                                if (ValidUrl(el_val)) {
                                    remove_w(el_form);
                                } else {
                                    add_w(el_form);
                                }
                            }
                            //if digits
                            if (el_form.is('.date')) {
                                if (ValidDate(el_val)) {
                                    remove_w(el_form);
                                } else {
                                    add_w(el_form);
                                }
                            }

                            //if radio
                            if (el_form.is('[type=radio]') || el_form.is('[type=checkbox]')) {
                                if (ValidRadio(el_form)) {
                                    $('[name=' + el_form.attr('name') + ']', form).each(function() {
                                        $(this).removeClass('wrong');
                                    })
                                } else {
                                    $('[name=' + el_form.attr('name') + ']', form).each(function() {
                                        $(this).addClass('wrong');
                                    })
                                }
                            }

                            if (el_form.is('.captchaInput')) {
                                if (o.captcha) {


                                    if (o.captcha == 'code' && el_val.length == 4) {

                                        /*
    									$.get("/ajax/check_captcha.php?num="+el_val, function(data){
    									*/

                                        if (data == 1) {
                                            remove_w(el_form);
                                        } else {
                                            add_w(el_form);
                                        }

                                        /*	
    									});	
    									*/

                                    } else {
                                        add_w(el_form);
                                    }
                                }
                            }


                        }
                    } else {
                        if (el_form.next('.fakefile').length) {
                            el_form.next('.fakefile').find('input').addClass('wrong');
                        } else {
                            el_form.addClass('wrong');
                        }
                    }
                })




                wrong()


            }

            var captchaTest = function(ui) {
                var uiHandleLeft = $(ui.handle).attr('style').split('%')[0].split(' ')[1];
                var hideVal = amount.val()
                if (uiHandleLeft == 100 && hideVal == servCaptcha) {
                    remove_w(captchaView);
                    remove_c(captchaView);
                    captchaView.val('Вы прошли проверку');
                    valider(captchaView, captchaView.val());
                } else {
                    add_w(captchaView);
                    add_c(captchaView);
                    captchaView.val('');
                    valider(captchaView, captchaView.val());
                }
            }
            var sliderIni = function() {
                capSlider.slider({
                    value: 0,
                    min: 0,
                    max: servCaptcha,
                    step: 0.1,
                    slide: function(event, ui) {
                        amount.val(ui.value);
                    },
                    stop: function(event, ui) {
                        captchaTest(ui);
                    }
                });
                amount.val(capSlider.slider('value'));
            }
            if (o.captcha) {
                if (o.captcha == 'slider') {
                    /*
    				$.ajax({
    					url: "testCaptcha.html", //Здесь надо генерировать число от 1000 до 9999 и передавать его обратно
    					cache: false,
    					success: function(data){
    						servCaptcha = data;
    				*/
                    sliderIni()
                    validMain()
                    /*		
    					}
    				})
    				*/
                }
                if (o.captcha == 'code') {
                    validMain()
                }
            } else {
                validMain()
            }
        });
    };
/*-------------------------------  liActualSize.js  ------------------------------------*/
    (function($) {
        $.fn.actual = function() {
            if (arguments.length && typeof arguments[0] == 'string') {
                var dim = arguments[0];
                if (this.is(':visible')) return this[dim]();
                var clone = $(this).clone().css({
                    position: 'absolute',
                    top: '-9999px',
                    visibility: 'hidden'
                }).appendTo('body');
                var s = clone[dim]();
                clone.remove();

                return s;
            };
            return undefined;
        };
    }(jQuery));