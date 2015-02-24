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
                    $.ajax({
                        type: 'POST',
                        url: $(form).attr('data-form-url'), /* path/to/file.php */
                        data: $(form).find('select, textarea, input').serialize(),
                        dataType : 'json',
                        success: function(data) {
                            // очистка полей формы
                            // $(':input', form).not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');

                            // перезагрузка страницы
                            // window.location.reload();

                            //сообщение
                            //
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

});