$(document).ready(function() {

    // detect transit support
    /*var transitFlag = true;
    if (!Modernizr.cssanimations) {
        transitFlag = false;
    }*/

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
                    var ajUrl = $(form).attr('data-form-url'); /* path/to/file.php */
                    var ajData = $(form).find('select, textarea, input').serializeArray();
                    console.log(ajData);
                    $.ajax({
                        type: 'POST',
                        url: ajUrl,
                        data: ajData,
                        dataType: 'json',
                        success: function(data) {
                            // очистка полей формы
                            /*$(':input', form).not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');*/

                            // перезагрузка страницы
                            /*window.location.reload();*/

                            //сообщение
                            /*$.magnificPopup.open({
                                modal: true,
                                preloader: false,
                                items: {
                                    src: '<div class="modalMagnific zoomAnim"><p>'+data.message+'</p></div>',
                                    type: 'inline'
                                },
                                removalDelay: 300,
                                mainClass: 'zoom-in'
                            });
                            setTimeout(function() {
                                $.magnificPopup.close();
                            }, 3000);*/
                        },
                        error: function() {
                            console.error('Что то пошло не так!');
                        }
                    });
                }
            }
        });
    });

    /* Без тега FORM */
    $('.wSubmit').on('click', function(event) {
        var form = $(this).closest('.wForm');
        form.valid();
        if (form.valid()) {
            form.submit();
        }
    });

    $('.enterReg').magnificPopup({
        type: 'inline',
        midClick: true,
        removalDelay: 300,
        mainClass: 'zoom-in'
    });

    $('#forget_pass').on('click', function(event) {
        $('#entrForm').removeClass('visForm');
        $('#forgetForm').addClass('visForm');
    });

    $('#remember_pass').on('click', function(event) {
        $('#forgetForm').removeClass('visForm');
        $('#entrForm').addClass('visForm');
    });
});