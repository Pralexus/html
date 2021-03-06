/*-------------------------------  LANG_CONSTANTS  ------------------------------------*/
    function siteLang(){var t=[true,'ru','ua','pl','en'],i,w=window.navigator,l=document.documentElement.getAttribute("lang")||w.language||w.browserLanguage||w.userLanguage||"en";l=l.toLowerCase().substr(0,2);for(i=1;i<t.length;i++){if(t[i]===l)t[0]=false;};if(t[0]){l='en'};return l;}
    $.LANG_SITE=siteLang();
    var LANG_PLUGIN = Object.create(null);
    
    LANG_PLUGIN.Magnific = {
        ru: {
            tClose: 'Закрыть (ESC)',
            tLoading: 'Загрузка контента ...',
            tNotFound: 'Контент не найден',
            tError: 'Невозможно загрузить <a href="%url%" target="_blank">Контент</a>.',
            tErrorImage: 'Невозможно загрузить <a href="%url%" target="_blank">Изображение #%curr%</a>.',
            tPrev: 'Предыдущая (клавиша Left)',
            tNext: 'Следующая (клавиша Right)',
            tCounter: '%curr% из %total%'
        },
        ua: {
            tClose: 'Закрити (ESC)',
            tLoading: 'Завантаження контенту ...',
            tNotFound: 'Контент не знайдено',
            tError: 'Неможливо завантажити <a href="%url%" target="_blank">контент</a>.',
            tErrorImage: 'Неможливо завантажити <a href="%url%" target="_blank">Зображенння #%curr%</a>.',
            tPrev: 'Попередня (клавіша Left)',
            tNext: 'Наступна (клавіша Right)',
            tCounter: '%curr% з %total%'
        },
        pl: {
            tClose: 'Zamknąć (ESC)',
            tLoading: 'Zawartość do treści ...',
            tNotFound: 'Nie znaleziono treści',
            tError: 'Niemożliwe do ściągnięcia <a href="%url%" target="_blank">treści</a>.',
            tErrorImage: 'Niemożliwe do ściągnięcia <a href="%url%" target="_blank">Obrazów #%curr%</a>.',
            tPrev: 'Poprzednia (klucz Left)',
            tNext: 'Następna (klucz Right)',
            tCounter: '%curr% z %total%'
        },
        en: {
            tClose: 'Close (ESC)',
            tLoading: 'Loading ...',
            tNotFound: 'Content not found',
            tError: '<a href="%url%" target="_blank">The content</a> could not be loaded.',
            tErrorImage: '<a href="%url%" target="_blank">The image #%curr%</a> could not be loaded.',
            tPrev: 'Previous (Left arrow key)',
            tNext: 'Next (Right arrow key)',
            tCounter: '%curr% of %total%'
        }
    };

    LANG_PLUGIN.validate = {
        ru: {
            required: "Это поле необходимо заполнить!",
            password: "Укажите пароль!",
            remote: "Пожалуйста, введите правильное значение!",
            email: "Пожалуйста, введите корректный адрес электронной почты!",
            url: "Пожалуйста, введите корректный URL!",
            date: "Пожалуйста, введите корректную дату!",
            dateISO: "Пожалуйста, введите корректную дату в формате ISO!",
            number: "Пожалуйста, введите число!",
            digits: "Пожалуйста, вводите только цифры!",
            creditcard: "Пожалуйста, введите правильный номер кредитной карты!",
            equalTo: "Пожалуйста, введите такое же значение ещё раз!",
            maxlength: "Пожалуйста, введите не больше {0} символов!",
            minlength: "Пожалуйста, введите не меньше {0} символов!",
            rangelength: "Пожалуйста, введите значение длиной от {0} до {1} символов!",
            range: "Пожалуйста, введите число от {0} до {1}!",
            filetype: "Допустимые расширения файлов: {0}!",
            filesize: "Максимальный размер {0} KB!",
            filesizeEach: "Максимальный размер каждого файла {0} KB!",
            max: "Пожалуйста, введите число, меньшее или равное {0}!",
            min: "Пожалуйста, введите число, большее или равное {0}!",
            // add
            word: "Введите корректное словестное значение!",
            login: "Введите корректный логин!",
            phoneUA: "Укажите корректный номер +38ХХХХХХХХХХ"
        },
        ua: {
            required: "Це поле необхідно заповнити!",
            password: "Вкажіть пароль!",
            remote: "Будь ласка, введіть правильне значення!",
            email: "Будь ласка, введіть коректну адресу електронної пошти!",
            url: "Будь ласка, введіть коректний URL!",
            date: "Будь ласка, введіть коректну дату!",
            dateISO: "Будь ласка, введіть коректну дату у форматі ISO!",
            number: "Будь ласка, введіть число!",
            digits: "Будь ласка, вводите тільки цифри!",
            creditcard: "Будь ласка, введіть правильний номер кредитної картки!",
            equalTo: "Будь ласка, введіть таке ж значення ще раз!",
            maxlength: "Будь ласка, введіть не більш {0} символів!",
            minlength: "Будь ласка, введіть не менш {0} символів!",
            rangelength: "Будь ласка , введіть значення довжиною від {0} до {1} символів!",
            range: "Будь ласка, введіть число від {0} до {1}!",
            filetype: "Допустимые расширения файлов: {0}!",
            filesize: "Максимальный размер {0} KB!",
            filesizeEach: "Максимальный размер каждого файла {0} KB!",
            max: "Будь ласка, введіть число, менше або рівне {0}!",
            min: "Будь ласка, введіть число, більше або рівне {0}!.",
            // add
            word: "Введіть коректне ім'я!",
            login: "Введіть коректний логін!",
            phoneUA: "Введіть корректний номер +38ХХХХХХХХХХ"
        },
        pl: {
            required: "To pole należy wypełnić!",
            password: "Określ paroll!",
            remote: "Proszę, wprowadźcie prawidłowe znaczenie!",
            email: "Proszę wpisać poprawny adres e-mail!",
            url: "Proszę podać poprawny adres URL!",
            date: "Wpisz poprawną datę!",
            dateISO: "Proszę podać poprawną datę w formacie ISO!",
            number: "Proszę wpisać numery!",
            digits: "Proszę wpisać tylko liczby!",
            creditcard: "Proszę podać poprawny numer karty kredytowej!",
            equalTo: "Proszę ponownie wprowadzić wartość!",
            maxlength: "Proszę wpisać nie więcej niż {0} znaków!",
            minlength: "Proszę podać co najmniej {0} znaków!",
            rangelength: "Prosimy podać wartość pomiędzy {0} {1} znaków!",
            range: "Wprowadź liczbę między {0} - {1}!",
            filetype: "Dopuszczalne rozszerzenia plików: {0}!",
            filesize: "Maksymalny rozmiar {0} KB!",
            filesizeEach: "Maksymalny rozmiar każdego plika {0} KB!",
            max: "Podaj numer mniejsza lub równa {0}!",
            min: "Wprowadź liczbę większą lub równą {0}!",
            // add
            word: "Wprowadź poprawne znaczenie słów!",
            login: "Proszę podać poprawną nazwę użytkownika!",
            phoneUA: "Proszę podać poprawny numer +38ХХХХХХХХХХ"
        },
        en: {
            required: "This field is required!",
            password: "Specify paroll!",
            remote: "Please fix this field!",
            email: "Please enter a valid email address!",
            url: "Please enter a valid URL!",
            date: "Please enter a valid date!",
            dateISO: "Please enter a valid date ISO!",
            number: "Please enter a valid number!",
            digits: "Please enter only digits!",
            creditcard: "Please enter a valid credit card number!",
            equalTo: "Please enter the same value again!",
            maxlength: "Please enter no more than {0} characters!",
            minlength: "Please enter at least {0} characters!",
            rangelength: "Please enter a value between {0} and {1} characters long!",
            range: "Please enter a value between {0} and {1}!",
            filetype: "Допустимые расширения файлов: {0}!",
            filesize: "Максимальный размер {0} KB!",
            filesizeEach: "Максимальный размер каждого файла {0} KB!",
            max: "Please enter a value less than or equal to {0}!",
            min: "Please enter a value greater than or equal to {0}!",
            // add
            word: "Please enter the correct word meanings!",
            login: "Please enter a valid username!",
            phoneUA: "Please enter a valid number +38ХХХХХХХХХХ"
        }
    };
/*-------------------------------  validate  ------------------------------------*/

    $.extend($.fn, {
        validateDelegate: function(delegate, type, handler) {
            return this.bind(type, function(event) {
                var target = $(event.target);
                if (target.is(delegate)) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });

    $.extend($.fn, {
    // http://jqueryvalidation.org/validate/
    validate: function(options) {

        // if nothing is selected, return nothing; can't chain anyway
        if (!this.length) {
            if (options && options.debug && window.console) {
                console.warn("Nothing selected, can't validate, returning nothing!");
            }
            return;
        }

        // check if a validator for this form was already created
        var validator = $.data(this[0], "validator");
        if (validator) {
            return validator;
        }

        // Add novalidate tag if HTML5.
        this.attr("novalidate", "novalidate");

        validator = new $.validator(options, this[0]);
        $.data(this[0], "validator", validator);

        if (validator.settings.onsubmit) {

            this.validateDelegate(":submit", "click", function(event) {
                if (validator.settings.submitHandler) {
                    validator.submitButton = event.target;
                }
                // allow suppressing validation by adding a cancel class to the submit button
                if ($(event.target).hasClass("cancel")) {
                    validator.cancelSubmit = true;
                }

                // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
                if ($(event.target).attr("formnovalidate") !== undefined) {
                    validator.cancelSubmit = true;
                }
            });

            // validate the form on submit
            this.submit(function(event) {
                if (validator.settings.debug) {
                    // prevent form submit to be able to see console output
                    event.preventDefault();
                }

                function handle() {
                    var hidden, result;
                    if (validator.settings.submitHandler) {
                        if (validator.submitButton) {
                            // insert a hidden input as a replacement for the missing submit button
                            hidden = $("<input type='hidden'/>")
                                .attr("name", validator.submitButton.name)
                                .val($(validator.submitButton).val())
                                .appendTo(validator.currentForm);
                        }
                        result = validator.settings.submitHandler.call(validator, validator.currentForm, event);
                        if (validator.submitButton) {
                            // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        if (result !== undefined) {
                            return result;
                        }
                        return false;
                    }
                    return true;
                }

                // prevent submit for invalid forms or custom submit handlers
                if (validator.cancelSubmit) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if (validator.form()) {
                    if (validator.pendingRequest) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }

        return validator;
    },
    // http://jqueryvalidation.org/valid/
    valid: function() {
        var valid, validator, errorList;

        if ($(this[0]).is("form")) {
            valid = this.validate().form();
        } else if ($(this[0]).is("div")) {
            valid = this.validate().form();
        } else {
            errorList = [];
            valid = true;
            validator = $(this[0]).validate();
            this.each(function() {
                valid = validator.element(this) && valid;
                errorList = errorList.concat(validator.errorList);
            });
            validator.errorList = errorList;
        }
        return valid;
    },
    // attributes: space separated list of attributes to retrieve and remove
    removeAttrs: function(attributes) {
        var result = {},
            $element = this;
        $.each(attributes.split(/\s/), function(index, value) {
            result[value] = $element.attr(value);
            $element.removeAttr(value);
        });
        return result;
    },
    // http://jqueryvalidation.org/rules/
    rules: function(command, argument) {
        var element = this[0],
            settings, staticRules, existingRules, data, param, filtered;

        if (command) {
            settings = $.data(element.form, "validator").settings;
            staticRules = settings.rules;
            existingRules = $.validator.staticRules(element);
            switch (command) {
                case "add":
                    $.extend(existingRules, $.validator.normalizeRule(argument));
                    // remove messages from rules, but allow them to be set separately
                    delete existingRules.messages;
                    staticRules[element.name] = existingRules;
                    if (argument.messages) {
                        settings.messages[element.name] = $.extend(settings.messages[element.name], argument.messages);
                    }
                    break;
                case "remove":
                    if (!argument) {
                        delete staticRules[element.name];
                        return existingRules;
                    }
                    filtered = {};
                    $.each(argument.split(/\s/), function(index, method) {
                        filtered[method] = existingRules[method];
                        delete existingRules[method];
                        if (method === "required") {
                            $(element).removeAttr("aria-required");
                        }
                    });
                    return filtered;
            }
        }

        data = $.validator.normalizeRules(
            $.extend({},
                $.validator.classRules(element),
                $.validator.attributeRules(element),
                $.validator.dataRules(element),
                $.validator.staticRules(element)
            ), element);

        // make sure required is at front
        if (data.required) {
            param = data.required;
            delete data.required;
            data = $.extend({
                required: param
            }, data);
            $(element).attr("aria-required", "true");
        }

        // make sure remote is at back
        if (data.remote) {
            param = data.remote;
            delete data.remote;
            data = $.extend(data, {
                remote: param
            });
        }

        return data;
    },
    validReset: function() {
        var ths = $(this[0]);
        var sett = ths.validate().settings;
        reset_InTx(ths.find('input'));
        reset_InTx(ths.find('textarea'));
        reset_Sel(ths.find('select'));

        function reset_InTx(els) {
            for (var i = 0; i < els.length; i++) {
                var t = els[i];
                var jt = $(t);
                switch (t.type) {
                    case 'radio':
                    case 'checkbox':
                        t.checked = t.defaultChecked;
                        break;
                    case 'file':
                        var fV = $(t).siblings('.wFileVal');
                        t.outerHTML = t.outerHTML;
                        fV.html(fV.data('txt')[0]);
                        jt = ths.find('#' + t.id);
                        break;
                    default:
                        t.value = t.defaultValue;
                }
                jt.removeClass(sett.errorClass).trigger('change').siblings(sett.errorElement + '.' + sett.errorClass).css('display', 'none');
            };
        }

        function reset_Sel(els) {
            for (var i = 0; i < els.length; i++) {
                [].forEach.call(els[i].options, function(el) {
                    el.selected = el.defaultSelected;
                });
                $(els[i]).removeClass(sett.errorClass).trigger('change').siblings(sett.errorElement + '.' + sett.errorClass).css('display', 'none');
            };
        }

        }
    });

    // Custom selectors
    $.extend($.expr[":"], {
        // http://jqueryvalidation.org/blank-selector/
        blank: function(a) {
            return !$.trim("" + $(a).val());
        },
        // http://jqueryvalidation.org/filled-selector/
        filled: function(a) {
            return !!$.trim("" + $(a).val());
        },
        // http://jqueryvalidation.org/unchecked-selector/
        unchecked: function(a) {
            return !$(a).prop("checked");
        }
    });

    // constructor for validator
    $.validator = function(options, form) {
        this.settings = $.extend(true, {}, $.validator.defaults, options);
        this.currentForm = form;
        this.init();
    };

    // http://jqueryvalidation.org/jQuery.validator.format/
    $.validator.format = function(source, params) {
        if (arguments.length === 1) {
            return function() {
                var args = $.makeArray(arguments);
                args.unshift(source);
                return $.validator.format.apply(this, args);
            };
        }
        if (arguments.length > 2 && params.constructor !== Array) {
            params = $.makeArray(arguments).slice(1);
        }
        if (params.constructor !== Array) {
            params = [params];
        }
        $.each(params, function(i, n) {
            source = source.replace(new RegExp("\\{" + i + "\\}", "g"), function() {
                return n;
            });
        });
        return source;
    };

    $.extend($.validator, {

        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: false,
            focusInvalid: true,
            errorContainer: $([]),
            errorLabelContainer: $([]),
            onsubmit: true,
            ignore: ":hidden",
            ignoreTitle: false,
            onfocusin: function(element) {
                this.lastActive = element;

                // Hide error label and remove error class on focus if enabled
                if (this.settings.focusCleanup) {
                    if (this.settings.unhighlight) {
                        this.settings.unhighlight.call(this, element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.hideThese(this.errorsFor(element));
                }
            },
            onfocusout: function(element) {
                if (!this.checkable(element) && (element.name in this.submitted || !this.optional(element))) {
                    this.element(element);
                }
            },
            onkeyup: function(element, event) {
                var excludedKeys = [
                    16, 17, 18, 20, 35, 36, 37,
                    38, 39, 40, 45, 144, 225
                ];

                if (event.which === 9 && this.elementValue(element) === "" || $.inArray(event.keyCode, excludedKeys) !== -1) {
                    return;
                } else if (event.which === 13 && element.tagName !== 'TEXTAREA') {
                    if ($(this.currentForm).data('validator').checkForm()) {
                        $(this.currentForm).submit();
                    }
                } else if (element.name in this.submitted || this.isValidElement(element)) {
                    this.element(element);
                }
            },
            onclick: function(element) {
                // click on selects, radiobuttons and checkboxes
                if (element.name in this.submitted) {
                    this.element(element);

                    // or option elements, check parent select in that case
                } else if (element.parentNode.name in this.submitted) {
                    this.element(element.parentNode);
                }
            },
            highlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).addClass(errorClass).removeClass(validClass);
                } else {
                    $(element).addClass(errorClass).removeClass(validClass);
                }
            },
            unhighlight: function(element, errorClass, validClass) {
                if (element.type === "radio") {
                    this.findByName(element.name).removeClass(errorClass).addClass(validClass);
                } else {
                    $(element).removeClass(errorClass).addClass(validClass);
                }
            }
        },

        // http://jqueryvalidation.org/jQuery.validator.setDefaults/
        setDefaults: function(settings) {
            $.extend($.validator.defaults, settings);
        },

        messages: {
            required: LANG_PLUGIN.validate[$.LANG_SITE].required,
            password: LANG_PLUGIN.validate[$.LANG_SITE].password,
            remote: LANG_PLUGIN.validate[$.LANG_SITE].remote,
            email: LANG_PLUGIN.validate[$.LANG_SITE].email,
            url: LANG_PLUGIN.validate[$.LANG_SITE].url,
            date: LANG_PLUGIN.validate[$.LANG_SITE].date,
            dateISO: LANG_PLUGIN.validate[$.LANG_SITE].dateISO,
            number: LANG_PLUGIN.validate[$.LANG_SITE].number,
            digits: LANG_PLUGIN.validate[$.LANG_SITE].digits,
            creditcard: LANG_PLUGIN.validate[$.LANG_SITE].creditcard,
            equalTo: LANG_PLUGIN.validate[$.LANG_SITE].equalTo,
            maxlength: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].maxlength),
            minlength: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].minlength),
            rangelength: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].rangelength),
            range: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].range),
            filetype: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].filetype),
            filesize: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].filesize),
            filesizeEach: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].filesizeEach),
            max: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].max),
            min: $.validator.format(LANG_PLUGIN.validate[$.LANG_SITE].min),
            // add
            word: LANG_PLUGIN.validate[$.LANG_SITE].word,
            login: LANG_PLUGIN.validate[$.LANG_SITE].login,
            phoneUA: LANG_PLUGIN.validate[$.LANG_SITE].phoneUA,
            extension: LANG_PLUGIN.validate[$.LANG_SITE].extension
        },

        autoCreateRanges: false,

        prototype: {

            init: function() {
                this.labelContainer = $(this.settings.errorLabelContainer);
                this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
                this.containers = $(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                this.submitted = {};
                this.valueCache = {};
                this.pendingRequest = 0;
                this.pending = {};
                this.invalid = {};
                this.reset();

                var groups = (this.groups = {}),
                    rules;
                $.each(this.settings.groups, function(key, value) {
                    if (typeof value === "string") {
                        value = value.split(/\s/);
                    }
                    $.each(value, function(index, name) {
                        groups[name] = key;
                    });
                });
                rules = this.settings.rules;
                $.each(rules, function(key, value) {
                    rules[key] = $.validator.normalizeRule(value);
                });

                function delegate(event) {
                    var validator, form, eventType;
                    form = this[0].form;

                    if (!form) {
                        form = $(this).closest("div[data-form='true']").get(0);
                    }
                    validator = $.data(form, "validator"),
                        eventType = "on" + event.type.replace(/^validate/, ""),
                        this.settings = validator.settings;
                    if (this.settings[eventType] && !this.is(this.settings.ignore)) {
                        this.settings[eventType].call(validator, this[0], event);
                    }
                }
                $(this.currentForm)
                    .validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
                        "[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
                        "[type='email'], [type='datetime'], [type='date'], [type='month'], " +
                        "[type='week'], [type='time'], [type='datetime-local'], " +
                        "[type='range'], [type='color'], [type='radio'], [type='checkbox']",
                        "focusin focusout keyup", delegate)
                    // Support: Chrome, oldIE
                    // "select" is provided as event.target when clicking a option
                    .validateDelegate("select, option, [type='radio'], [type='checkbox']", "click", delegate);

                if (this.settings.invalidHandler) {
                    $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
                }

                // Add aria-required to any Static/Data/Class required fields before first validation
                // Screen readers require this attribute to be present before the initial submission http://www.w3.org/TR/WCAG-TECHS/ARIA2.html
                $(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true");
            },

            // http://jqueryvalidation.org/Validator.form/
            form: function() {
                this.checkForm();
                $.extend(this.submitted, this.errorMap);
                this.invalid = $.extend({}, this.errorMap);
                if (!this.valid()) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                }
                this.showErrors();
                return this.valid();
            },

            checkForm: function() {
                this.prepareForm();
                for (var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++) {
                    this.check(elements[i]);
                }
                return this.valid();
            },

            // http://jqueryvalidation.org/Validator.element/
            element: function(element) {
                var cleanElement = this.clean(element),
                    checkElement = this.validationTargetFor(cleanElement),
                    result = true;
                if (checkElement === undefined) {
                    delete this.invalid[cleanElement.name];
                } else {
                    this.prepareElement(checkElement);
                    this.currentElements = $(checkElement);

                    result = this.check(checkElement) !== false;
                    if (result) {
                        this.invalid[checkElement.name] = false;
                    } else {
                        this.invalid[checkElement.name] = true;
                    }
                }
                // Add aria-invalid status for screen readers
                $(element).attr("aria-invalid", !result);

                if (!this.numberOfInvalids()) {
                    // Hide error containers on last error
                    this.toHide = this.toHide.add(this.containers);
                }
                this.showErrors();
                return result;
            },

            // http://jqueryvalidation.org/Validator.showErrors/
            showErrors: function(errors) {
                if (errors) {
                    // add items to error list and map
                    $.extend(this.errorMap, errors);
                    this.errorList = [];
                    for (var name in errors) {
                        this.errorList.push({
                            message: errors[name],
                            element: this.findByName(name)[0]
                        });
                    }
                    // remove items from success list
                    this.successList = $.grep(this.successList, function(element) {
                        return !(element.name in errors);
                    });
                }
                if (this.settings.showErrors) {
                    this.settings.showErrors.call(this, this.errorMap, this.errorList);
                } else {
                    this.defaultShowErrors();
                }
            },

            // http://jqueryvalidation.org/Validator.resetForm/
            resetForm: function() {
                if ($.fn.resetForm) {
                    $(this.currentForm).resetForm();
                }
                this.submitted = {};
                this.prepareForm();
                this.hideErrors();
                var i, elements = this.elements()
                    .removeData("previousValue")
                    .removeAttr("aria-invalid");

                if (this.settings.unhighlight) {
                    for (i = 0; elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i],
                            this.settings.errorClass, "");
                    }
                } else {
                    elements.removeClass(this.settings.errorClass);
                }
            },

            numberOfInvalids: function() {
                return this.objectLength(this.invalid);
            },

            objectLength: function(obj) {
                /* jshint unused: false */
                var count = 0,
                    i;
                for (i in obj) {

                    if (obj[i]) {
                        count++;
                    }
                }
                return count;
            },

            hideErrors: function() {
                this.hideThese(this.toHide);
            },

            hideThese: function(errors) {
                errors.not(this.containers).text("");
                this.addWrapper(errors).hide();
            },

            valid: function() {
                return this.size() === 0;
            },

            // Check if the given element is valid
            // return
            //          true  If the field is valid
            //         false  If the field is invalid
            //     undefined  If the field is not validated yet.
            //
            // Note that this method assumes that you have
            // already called `validate()` on your form
            isValidElement: function(element) {
                return this.invalid[element.name] === undefined ? undefined : !this.invalid[element.name];
            },

            size: function() {
                return this.errorList.length;
            },

            focusInvalid: function() {
                if (this.settings.focusInvalid) {
                    try {
                        $(this.errorList.length && this.errorList[0].element || [])
                            .filter(":visible")
                            .focus()
                            // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                            .trigger("focusin");
                    } catch (e) {
                        // ignore IE throwing errors when focusing hidden elements
                    }
                }
            },

            findLastActive: function() {
                var lastActive = this.lastActive;
                return lastActive && $.grep(this.errorList, function(n) {
                    return n.element.name === lastActive.name;
                }).length === 1 && lastActive;
            },

            elements: function() {
                var validator = this,
                    rulesCache = {};

                // select all valid inputs inside the form (no submit or reset buttons)
                return $(this.currentForm)
                    .find("input, select, textarea")
                    .not(":submit, :reset, :image, :disabled")
                    .not(this.settings.ignore)
                    .filter(function() {
                        if (!this.name && validator.settings.debug && window.console) {
                            console.error("%o has no name assigned", this);
                        }

                        // select only the first element for each name, and only those with rules specified
                        if (this.name in rulesCache || !validator.objectLength($(this).rules())) {
                            return false;
                        }

                        rulesCache[this.name] = true;
                        return true;
                    });
            },

            clean: function(selector) {
                return $(selector)[0];
            },

            errors: function() {
                var errorClass = this.settings.errorClass.split(" ").join(".");
                return $(this.settings.errorElement + "." + errorClass, this.errorContext);
            },

            reset: function() {
                this.successList = [];
                this.errorList = [];
                this.errorMap = {};
                this.toShow = $([]);
                this.toHide = $([]);
                this.currentElements = $([]);
            },

            prepareForm: function() {
                this.reset();
                this.toHide = this.errors().add(this.containers);
            },

            prepareElement: function(element) {
                this.reset();
                this.toHide = this.errorsFor(element);
            },

            elementValue: function(element) {
                var val,
                    $element = $(element),
                    type = element.type;

                if (type === "radio" || type === "checkbox") {
                    return this.findByName(element.name).filter(":checked").val();
                } else if (type === "number" && typeof element.validity !== "undefined") {
                    return element.validity.badInput ? false : $element.val();
                }

                val = $element.val();
                if (typeof val === "string") {
                    return val.replace(/\r/g, "");
                }
                return val;
            },

            check: function(element) {
                element = this.validationTargetFor(this.clean(element));

                var rules = $(element).rules(),
                    rulesCount = $.map(rules, function(n, i) {
                        return i;
                    }).length,
                    dependencyMismatch = false,
                    val = this.elementValue(element),
                    result, method, rule;

                for (method in rules) {
                    rule = {
                        method: method,
                        parameters: rules[method]
                    };
                    try {

                        result = $.validator.methods[method].call(this, val, element, rule.parameters);

                        // if a method indicates that the field is optional and therefore valid,
                        // don't mark it as valid when there are no other rules
                        if (result === "dependency-mismatch" && rulesCount === 1) {
                            dependencyMismatch = true;
                            continue;
                        }
                        dependencyMismatch = false;

                        if (result === "pending") {
                            this.toHide = this.toHide.not(this.errorsFor(element));
                            return;
                        }

                        if (!result) {
                            this.formatAndAdd(element, rule);
                            return false;
                        }
                    } catch (e) {
                        if (this.settings.debug && window.console) {
                            console.log("Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e);
                        }
                        if (e instanceof TypeError) {
                            e.message += ".  Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.";
                        }
                        throw e;
                    }
                }
                if (dependencyMismatch) {
                    return;
                }
                if (this.objectLength(rules)) {
                    this.successList.push(element);
                }
                return true;
            },

            // return the custom message for the given element and validation method
            // specified in the element's HTML5 data attribute
            // return the generic message if present and no method specific message is present
            customDataMessage: function(element, method) {
                return $(element).data("msg" + method.charAt(0).toUpperCase() +
                    method.substring(1).toLowerCase()) || $(element).data("msg");
            },

            // return the custom message for the given element name and validation method
            customMessage: function(name, method) {
                var m = this.settings.messages[name];
                return m && (m.constructor === String ? m : m[method]);
            },

            // return the first defined argument, allowing empty strings
            findDefined: function() {
                for (var i = 0; i < arguments.length; i++) {
                    if (arguments[i] !== undefined) {
                        return arguments[i];
                    }
                }
                return undefined;
            },

            defaultMessage: function(element, method) {
                return this.findDefined(
                    this.customMessage(element.name, method),
                    this.customDataMessage(element, method),
                    // title is never undefined, so handle empty string as undefined
                    !this.settings.ignoreTitle && element.title || undefined,
                    $.validator.messages[method],
                    "<strong>Warning: No message defined for " + element.name + "</strong>"
                );
            },

            formatAndAdd: function(element, rule) {
                var message = this.defaultMessage(element, rule.method),
                    theregex = /\$?\{(\d+)\}/g;
                if (typeof message === "function") {
                    message = message.call(this, rule.parameters, element);
                } else if (theregex.test(message)) {
                    message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
                }
                this.errorList.push({
                    message: message,
                    element: element,
                    method: rule.method
                });

                this.errorMap[element.name] = message;
                this.submitted[element.name] = message;
            },

            addWrapper: function(toToggle) {
                if (this.settings.wrapper) {
                    toToggle = toToggle.add(toToggle.parent(this.settings.wrapper));
                }
                return toToggle;
            },

            defaultShowErrors: function() {
                var i, elements, error;
                for (i = 0; this.errorList[i]; i++) {
                    error = this.errorList[i];
                    if (this.settings.highlight) {
                        this.settings.highlight.call(this, error.element, this.settings.errorClass, this.settings.validClass);
                    }
                    this.showLabel(error.element, error.message);
                }
                if (this.errorList.length) {
                    this.toShow = this.toShow.add(this.containers);
                }
                if (this.settings.success) {
                    for (i = 0; this.successList[i]; i++) {
                        this.showLabel(this.successList[i]);
                    }
                }
                if (this.settings.unhighlight) {
                    for (i = 0, elements = this.validElements(); elements[i]; i++) {
                        this.settings.unhighlight.call(this, elements[i], this.settings.errorClass, this.settings.validClass);
                    }
                }
                this.toHide = this.toHide.not(this.toShow);
                this.hideErrors();
                this.addWrapper(this.toShow).show();
            },

            validElements: function() {
                return this.currentElements.not(this.invalidElements());
            },

            invalidElements: function() {
                return $(this.errorList).map(function() {
                    return this.element;
                });
            },

            showLabel: function(element, message) {
                var place, group, errorID,
                    error = this.errorsFor(element),
                    elementID = this.idOrName(element),
                    describedBy = $(element).attr("aria-describedby");
                if (error.length) {
                    // refresh error/success class
                    error.removeClass(this.settings.validClass).addClass(this.settings.errorClass);
                    // replace message on existing label
                    error.html(message);
                } else {
                    // create error element
                    error = $("<" + this.settings.errorElement + ">")
                        .attr("id", elementID + "-error")
                        .addClass(this.settings.errorClass)
                        .html(message || "");

                    // Maintain reference to the element to be placed into the DOM
                    place = error;
                    if (this.settings.wrapper) {
                        // make sure the element is visible, even in IE
                        // actually showing the wrapped element is handled elsewhere
                        place = error.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                    }
                    if (this.labelContainer.length) {
                        this.labelContainer.append(place);
                    } else if (this.settings.errorPlacement) {
                        this.settings.errorPlacement(place, $(element));
                    } else {
                        place.insertAfter(element);
                    }

                    // Link error back to the element
                    if (error.is("label")) {
                        // If the error is a label, then associate using 'for'
                        error.attr("for", elementID);
                    } else if (error.parents("label[for='" + elementID + "']").length === 0) {
                        // If the element is not a child of an associated label, then it's necessary
                        // to explicitly apply aria-describedby

                        errorID = error.attr("id").replace(/(:|\.|\[|\]|\$)/g, "\\$1");
                        // Respect existing non-error aria-describedby
                        if (!describedBy) {
                            describedBy = errorID;
                        } else if (!describedBy.match(new RegExp("\\b" + errorID + "\\b"))) {
                            // Add to end of list if not already present
                            describedBy += " " + errorID;
                        }
                        $(element).attr("aria-describedby", describedBy);

                        // If this element is grouped, then assign to all elements in the same group
                        group = this.groups[element.name];
                        if (group) {
                            $.each(this.groups, function(name, testgroup) {
                                if (testgroup === group) {
                                    $("[name='" + name + "']", this.currentForm)
                                        .attr("aria-describedby", error.attr("id"));
                                }
                            });
                        }
                    }
                }
                if (!message && this.settings.success) {
                    error.text("");
                    if (typeof this.settings.success === "string") {
                        error.addClass(this.settings.success);
                    } else {
                        this.settings.success(error, element);
                    }
                }
                this.toShow = this.toShow.add(error);
            },

            errorsFor: function(element) {
                var name = this.idOrName(element),
                    describer = $(element).attr("aria-describedby"),
                    selector = "label[for='" + name + "'], label[for='" + name + "'] *";

                // aria-describedby should directly reference the error element
                if (describer) {
                    selector = selector + ", #" + describer.replace(/\s+/g, ", #");
                }
                return this
                    .errors()
                    .filter(selector);
            },

            idOrName: function(element) {
                return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
            },

            validationTargetFor: function(element) {

                // If radio/checkbox, validate first element in group instead
                if (this.checkable(element)) {
                    element = this.findByName(element.name);
                }

                // Always apply ignore filter
                return $(element).not(this.settings.ignore)[0];

            },

            checkable: function(element) {
                return (/radio|checkbox/i).test(element.type);
            },

            findByName: function(name) {
                return $(this.currentForm).find("[name='" + name + "']");
            },

            getLength: function(value, element) {
                switch (element.nodeName.toLowerCase()) {
                    case "select":
                        return $("option:selected", element).length;
                    case "input":
                        if (this.checkable(element)) {
                            return this.findByName(element.name).filter(":checked").length;
                        }
                }
                return value.length;
            },

            depend: function(param, element) {
                return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
            },

            dependTypes: {
                "boolean": function(param) {
                    return param;
                },
                "string": function(param, element) {
                    return !!$(param, element.form).length;
                },
                "function": function(param, element) {
                    return param(element);
                }
            },

            optional: function(element) {
                var val = this.elementValue(element);
                return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
            },

            startRequest: function(element) {
                if (!this.pending[element.name]) {
                    this.pendingRequest++;
                    this.pending[element.name] = true;
                }
            },

            stopRequest: function(element, valid) {
                this.pendingRequest--;
                // sometimes synchronization fails, make sure pendingRequest is never < 0
                if (this.pendingRequest < 0) {
                    this.pendingRequest = 0;
                }
                delete this.pending[element.name];
                if (valid && this.pendingRequest === 0 && this.formSubmitted && this.form()) {
                    $(this.currentForm).submit();
                    this.formSubmitted = false;
                } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                    $(this.currentForm).triggerHandler("invalid-form", [this]);
                    this.formSubmitted = false;
                }
            },

            previousValue: function(element) {
                return $.data(element, "previousValue") || $.data(element, "previousValue", {
                    old: null,
                    valid: true,
                    message: this.defaultMessage(element, "remote")
                });
            },

            // cleans up all forms and elements, removes validator-specific events
            destroy: function() {
                this.resetForm();

                $(this.currentForm)
                    .off(".validate")
                    .removeData("validator");
            }

        },

        classRuleSettings: {
            required: {
                required: true
            },
            email: {
                email: true
            },
            url: {
                url: true
            },
            date: {
                date: true
            },
            dateISO: {
                dateISO: true
            },
            number: {
                number: true
            },
            digits: {
                digits: true
            },
            creditcard: {
                creditcard: true
            }
        },

        addClassRules: function(className, rules) {
            if (className.constructor === String) {
                this.classRuleSettings[className] = rules;
            } else {
                $.extend(this.classRuleSettings, className);
            }
        },

        classRules: function(element) {
            var rules = {},
                classes = $(element).attr("class");

            if (classes) {
                $.each(classes.split(" "), function() {
                    if (this in $.validator.classRuleSettings) {
                        $.extend(rules, $.validator.classRuleSettings[this]);
                    }
                });
            }
            return rules;
        },

        normalizeAttributeRule: function(rules, type, method, value) {

            // convert the value to a number for number inputs, and for text for backwards compability
            // allows type="date" and others to be compared as strings
            if (/min|max/.test(method) && (type === null || /number|range|text/.test(type))) {
                value = Number(value);

                // Support Opera Mini, which returns NaN for undefined minlength
                if (isNaN(value)) {
                    value = undefined;
                }
            }

            if (value || value === 0) {
                rules[method] = value;
            } else if (type === method && type !== "range") {

                // exception: the jquery validate 'range' method
                // does not test for the html5 'range' type
                rules[method] = true;
            }
        },

        attributeRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;

            for (method in $.validator.methods) {

                // support for <input required> in both html5 and older browsers
                if (method === "required") {
                    value = element.getAttribute(method);
                    // Some browsers return an empty string for the required attribute
                    // and non-HTML5 browsers might have required="" markup
                    if (value === "") {
                        value = true;
                    }
                    // force non-HTML5 browsers to return bool
                    value = !!value;
                } else {
                    value = $element.attr(method);
                }

                this.normalizeAttributeRule(rules, type, method, value);
            }

            // maxlength may be returned as -1, 2147483647 ( IE ) and 524288 ( safari ) for text inputs
            if (rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength)) {
                delete rules.maxlength;
            }

            return rules;
        },

        dataRules: function(element) {
            var rules = {},
                $element = $(element),
                type = element.getAttribute("type"),
                method, value;

            for (method in $.validator.methods) {
                value = $element.data("rule" + method.charAt(0).toUpperCase() + method.substring(1).toLowerCase());
                this.normalizeAttributeRule(rules, type, method, value);
            }
            return rules;
        },

        staticRules: function(element) {
            if (element.form) {
                validator = $.data(element.form, "validator");
            } else {
                validator = $.data($(element).closest("div[data-form='true']").get(0), "validator");
            }

            var rules = {},
                validator = validator;

            if (validator.settings.rules) {
                rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
            }
            return rules;
        },

        normalizeRules: function(rules, element) {
            // handle dependency check
            $.each(rules, function(prop, val) {
                // ignore rule when param is explicitly false, eg. required:false
                if (val === false) {
                    delete rules[prop];
                    return;
                }
                if (val.param || val.depends) {
                    var keepRule = true;
                    switch (typeof val.depends) {
                        case "string":
                            keepRule = !!$(val.depends, element.form).length;
                            break;
                        case "function":
                            keepRule = val.depends.call(element, element);
                            break;
                    }
                    if (keepRule) {
                        rules[prop] = val.param !== undefined ? val.param : true;
                    } else {
                        delete rules[prop];
                    }
                }
            });

            // evaluate parameters
            $.each(rules, function(rule, parameter) {
                rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
            });

            // clean number parameters
            $.each(["minlength", "maxlength"], function() {
                if (rules[this]) {
                    rules[this] = Number(rules[this]);
                }
            });
            $.each(["rangelength", "range"], function() {
                var parts;
                if (rules[this]) {
                    if ($.isArray(rules[this])) {
                        rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                    } else if (typeof rules[this] === "string") {
                        parts = rules[this].replace(/[\[\]]/g, "").split(/[\s,]+/);
                        rules[this] = [Number(parts[0]), Number(parts[1])];
                    }
                }
            });

            if ($.validator.autoCreateRanges) {
                // auto-create ranges
                if (rules.min != null && rules.max != null) {
                    rules.range = [rules.min, rules.max];
                    delete rules.min;
                    delete rules.max;
                }
                if (rules.minlength != null && rules.maxlength != null) {
                    rules.rangelength = [rules.minlength, rules.maxlength];
                    delete rules.minlength;
                    delete rules.maxlength;
                }
            }

            return rules;
        },

        // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
        normalizeRule: function(data) {
            if (typeof data === "string") {
                var transformed = {};
                $.each(data.split(/\s/), function() {
                    transformed[this] = true;
                });
                data = transformed;
            }
            return data;
        },

        // http://jqueryvalidation.org/jQuery.validator.addMethod/
        addMethod: function(name, method, message) {
            $.validator.methods[name] = method;
            $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
            if (method.length < 3) {
                $.validator.addClassRules(name, $.validator.normalizeRule(name));
            }
        },

        methods: {

            // http://jqueryvalidation.org/required-method/
            required: function(value, element, param) {
                // check if dependency is met
                if (!this.depend(param, element)) {
                    return "dependency-mismatch";
                }
                if (element.nodeName.toLowerCase() === "select") {
                    // could be an array for select-multiple or a string, both are fine this way
                    var val = $(element).val();
                    return val && val.length > 0;
                }
                if (this.checkable(element)) {
                    return this.getLength(value, element) > 0;
                }
                return value.length > 0;
            },

            phone: function(value, element, param) {
                return this.optional(element) || /^([+]?[0-9]{1,2})?([0-9]{3})([\d]{7})$/.test(value);
            },

            phoneUA: function(value, element, param) {
                return this.optional(element) || /^([+]38)?([0-9]{3})([\d]{7})$/.test(value);
            },

            validTrue: function(value, element, param) {
                if ($(element).data('valid') === true) {
                    return true;
                } else {
                    return false;
                }
            },

            filesize: function(value, element, param) {
                var kb = 0;
                for (var i = 0; i < element.files.length; i++) {
                    kb += element.files[i].size;
                }
                return this.optional(element) || (kb / 1024 <= param);
            },

            filesizeEach: function(value, element, param) {
                var flag = true;
                for (var i = 0; i < element.files.length; i++) {
                    if (element.files[i].size / 1024 > param) {
                        flag = false;
                    }
                }
                return this.optional(element) || (flag);
            },

            filetype: function(value, element, param) {
                param = typeof param === "string" ? param.replace(/,/g, "|") : "png|jpe?g|doc|pdf|gif|zip|rar|tar|html|swf|txt|xls|docx|xlsx|odt";
                return this.optional(element) || value.match(new RegExp(".(" + param + ")$", "i"));
            },

            word: function(value, element) {
                return this.optional(element) || /^[a-zA-Zа-яА-ЯіІїЇєёЁЄґҐ\'\`\- ]*$/.test(value);
            },

            login: function(value, element) {
                return this.optional(element) || /^[a-zA-Zа-яА-ЯіІїЇєЄёЁґҐ][0-9a-zA-Zа-яА-ЯіІїЇєЄґҐ\-\._| ]+$/.test(value);
            },

            // http://jqueryvalidation.org/email-method/
            email: function(value, element) {
                return this.optional(element) || /^([a-zA-Z0-9_\.\-]{2,})+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
            },

            // http://jqueryvalidation.org/url-method/
            url: function(value, element) {
                // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
                return this.optional(element) || /^((https?|s?ftp):\/\/)?(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
            },

            // http://jqueryvalidation.org/date-method/
            date: function(value, element) {
                return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
            },

            // http://jqueryvalidation.org/dateISO-method/
            dateISO: function(value, element) {
                return this.optional(element) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
            },

            // http://jqueryvalidation.org/number-method/
            number: function(value, element) {
                return this.optional(element) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
            },

            // http://jqueryvalidation.org/digits-method/
            digits: function(value, element) {
                return this.optional(element) || /^\d+$/.test(value);
            },

            or: function(value, element, param) {
                var $module = $(element).parents('.wForm');
                return $module.find('.' + param + ':filled').length;
            },

            // http://jqueryvalidation.org/creditcard-method/
            // based on http://en.wikipedia.org/wiki/Luhn_algorithm
            creditcard: function(value, element) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }
                // accept only spaces, digits and dashes
                if (/[^0-9 \-]+/.test(value)) {
                    return false;
                }
                var nCheck = 0,
                    nDigit = 0,
                    bEven = false,
                    n, cDigit;

                value = value.replace(/\D/g, "");

                // Basing min and max length on
                // http://developer.ean.com/general_info/Valid_Credit_Card_Types
                if (value.length < 13 || value.length > 19) {
                    return false;
                }

                for (n = value.length - 1; n >= 0; n--) {
                    cDigit = value.charAt(n);
                    nDigit = parseInt(cDigit, 10);
                    if (bEven) {
                        if ((nDigit *= 2) > 9) {
                            nDigit -= 9;
                        }
                    }
                    nCheck += nDigit;
                    bEven = !bEven;
                }

                return (nCheck % 10) === 0;
            },

            // http://jqueryvalidation.org/minlength-method/
            minlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length >= param;
            },

            // http://jqueryvalidation.org/maxlength-method/
            maxlength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || length <= param;
            },

            // http://jqueryvalidation.org/rangelength-method/
            rangelength: function(value, element, param) {
                var length = $.isArray(value) ? value.length : this.getLength(value, element);
                return this.optional(element) || (length >= param[0] && length <= param[1]);
            },

            // http://jqueryvalidation.org/min-method/
            min: function(value, element, param) {
                return this.optional(element) || value >= param;
            },

            // http://jqueryvalidation.org/max-method/
            max: function(value, element, param) {
                return this.optional(element) || value <= param;
            },

            // http://jqueryvalidation.org/range-method/
            range: function(value, element, param) {
                return this.optional(element) || (value >= param[0] && value <= param[1]);
            },

            // http://jqueryvalidation.org/equalTo-method/
            equalTo: function(value, element, param) {
                // bind to the blur event of the target in order to revalidate whenever the target field is updated
                // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
                var target = $(param);
                if (this.settings.onfocusout) {
                    target.off(".validate-equalTo").on("blur.validate-equalTo", function() {
                        $(element).valid();
                    });
                }
                return value === target.val();
            },

            // http://jqueryvalidation.org/remote-method/
            remote: function(value, element, param) {
                if (this.optional(element)) {
                    return "dependency-mismatch";
                }

                var previous = this.previousValue(element),
                    validator, data, optionDataString;

                if (!this.settings.messages[element.name]) {
                    this.settings.messages[element.name] = {};
                }
                previous.originalMessage = this.settings.messages[element.name].remote;
                this.settings.messages[element.name].remote = previous.message;

                param = typeof param === "string" && {
                    url: param
                } || param;
                optionDataString = $.param($.extend({
                    data: value
                }, param.data));
                if (previous.old === optionDataString) {
                    return previous.valid;
                }

                previous.old = optionDataString;
                validator = this;
                this.startRequest(element);
                data = {};
                data[element.name] = value;
                $.ajax($.extend(true, {
                    mode: "abort",
                    port: "validate" + element.name,
                    dataType: "json",
                    data: data,
                    context: validator.currentForm,
                    success: function(response) {
                        var valid = response === true || response === "true",
                            errors, message, submitted;

                        validator.settings.messages[element.name].remote = previous.originalMessage;
                        if (valid) {
                            submitted = validator.formSubmitted;
                            validator.prepareElement(element);
                            validator.formSubmitted = submitted;
                            validator.successList.push(element);
                            delete validator.invalid[element.name];
                            validator.showErrors();
                        } else {
                            errors = {};
                            message = response || validator.defaultMessage(element, "remote");
                            errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                            validator.invalid[element.name] = true;
                            validator.showErrors(errors);
                        }
                        previous.valid = valid;
                        validator.stopRequest(element, valid);
                    }
                }, param));
                return "pending";
            }

        }

    });

    $.format = function deprecated() {
        throw "$.format has been deprecated. Please use $.validator.format instead.";
    };
/*-------------------------------  Magnific  ------------------------------------*/
    /*! Magnific Popup - v0.9.9 - 2014-09-06
     * http://dimsemenov.com/plugins/magnific-popup/
     * Copyright (c) 2014 Dmitry Semenov; */
    ;
    (function($) {

        /*>>core*/
        /**
         *
         * Magnific Popup Core JS file
         *
         */


        /**
         * Private static constants
         */
        var CLOSE_EVENT = 'Close',
            BEFORE_CLOSE_EVENT = 'BeforeClose',
            AFTER_CLOSE_EVENT = 'AfterClose',
            BEFORE_APPEND_EVENT = 'BeforeAppend',
            MARKUP_PARSE_EVENT = 'MarkupParse',
            OPEN_EVENT = 'Open',
            CHANGE_EVENT = 'Change',
            NS = 'mfp',
            EVENT_NS = '.' + NS,
            READY_CLASS = 'mfp-ready',
            REMOVING_CLASS = 'mfp-removing',
            PREVENT_CLOSE_CLASS = 'mfp-prevent-close';


        /**
         * Private vars
         */
        var mfp, // As we have only one instance of MagnificPopup object, we define it locally to not to use 'this'
            MagnificPopup = function() {},
            _isJQ = !! (window.jQuery),
            _prevStatus,
            _window = $(window),
            _body,
            _document,
            _prevContentType,
            _wrapClasses,
            _currPopupType;


        /**
         * Private functions
         */
        var _mfpOn = function(name, f) {
            mfp.ev.on(NS + name + EVENT_NS, f);
        },
            _getEl = function(className, appendTo, html, raw) {
                var el = document.createElement('div');
                el.className = 'mfp-' + className;
                if (html) {
                    el.innerHTML = html;
                }
                if (!raw) {
                    el = $(el);
                    if (appendTo) {
                        el.appendTo(appendTo);
                    }
                } else if (appendTo) {
                    appendTo.appendChild(el);
                }
                return el;
            },
            _mfpTrigger = function(e, data) {
                mfp.ev.triggerHandler(NS + e, data);

                if (mfp.st.callbacks) {
                    // converts "mfpEventName" to "eventName" callback and triggers it if it's present
                    e = e.charAt(0).toLowerCase() + e.slice(1);
                    if (mfp.st.callbacks[e]) {
                        mfp.st.callbacks[e].apply(mfp, $.isArray(data) ? data : [data]);
                    }
                }
            },
            _getCloseBtn = function(type) {
                if (type !== _currPopupType || !mfp.currTemplate.closeBtn) {
                    mfp.currTemplate.closeBtn = $(mfp.st.closeMarkup.replace('%title%', mfp.st.tClose));
                    _currPopupType = type;
                }
                return mfp.currTemplate.closeBtn;
            },
            // Initialize Magnific Popup only when called at least once
            _checkInstance = function() {
                if (!$.magnificPopup.instance) {
                    mfp = new MagnificPopup();
                    mfp.init();
                    $.magnificPopup.instance = mfp;
                }
            },
            // CSS transition detection, http://stackoverflow.com/questions/7264899/detect-css-transitions-using-javascript-and-without-modernizr
            supportsTransitions = function() {
                var s = document.createElement('p').style, // 's' for style. better to create an element if body yet to exist
                    v = ['ms', 'O', 'Moz', 'Webkit']; // 'v' for vendor

                if (s['transition'] !== undefined) {
                    return true;
                }

                while (v.length) {
                    if (v.pop() + 'Transition' in s) {
                        return true;
                    }
                }

                return false;
            };



        /**
         * Public functions
         */
        MagnificPopup.prototype = {

            constructor: MagnificPopup,

            /**
             * Initializes Magnific Popup plugin.
             * This function is triggered only once when $.fn.magnificPopup or $.magnificPopup is executed
             */
            init: function() {
                var appVersion = navigator.appVersion;
                mfp.isIE7 = appVersion.indexOf("MSIE 7.") !== -1;
                mfp.isIE8 = appVersion.indexOf("MSIE 8.") !== -1;
                mfp.isLowIE = mfp.isIE7 || mfp.isIE8;
                mfp.isAndroid = (/android/gi).test(appVersion);
                mfp.isIOS = (/iphone|ipad|ipod/gi).test(appVersion);
                mfp.supportsTransition = supportsTransitions();

                // We disable fixed positioned lightbox on devices that don't handle it nicely.
                // If you know a better way of detecting this - let me know.
                mfp.probablyMobile = (mfp.isAndroid || mfp.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));
                _document = $(document);

                mfp.popupsCache = {};
            },

            /**
             * Opens popup
             * @param  data [description]
             */
            open: function(data) {

                if (!_body) {
                    _body = $(document.body);
                }

                var i;

                if (data.isObj === false) {
                    // convert jQuery collection to array to avoid conflicts later
                    mfp.items = data.items.toArray();

                    mfp.index = 0;
                    var items = data.items,
                        item;
                    for (i = 0; i < items.length; i++) {
                        item = items[i];
                        if (item.parsed) {
                            item = item.el[0];
                        }
                        if (item === data.el[0]) {
                            mfp.index = i;
                            break;
                        }
                    }
                } else {
                    mfp.items = $.isArray(data.items) ? data.items : [data.items];
                    mfp.index = data.index || 0;
                }

                // if popup is already opened - we just update the content
                if (mfp.isOpen) {
                    mfp.updateItemHTML();
                    return;
                }

                mfp.types = [];
                _wrapClasses = '';
                if (data.mainEl && data.mainEl.length) {
                    mfp.ev = data.mainEl.eq(0);
                } else {
                    mfp.ev = _document;
                }

                if (data.key) {
                    if (!mfp.popupsCache[data.key]) {
                        mfp.popupsCache[data.key] = {};
                    }
                    mfp.currTemplate = mfp.popupsCache[data.key];
                } else {
                    mfp.currTemplate = {};
                }



                mfp.st = $.extend(true, {}, $.magnificPopup.defaults, data);
                mfp.fixedContentPos = mfp.st.fixedContentPos === 'auto' ? !mfp.probablyMobile : mfp.st.fixedContentPos;

                if (mfp.st.modal) {
                    mfp.st.closeOnContentClick = false;
                    mfp.st.closeOnBgClick = false;
                    mfp.st.showCloseBtn = false;
                    mfp.st.enableEscapeKey = false;
                }


                // Building markup
                // main containers are created only once
                if (!mfp.bgOverlay) {

                    // Dark overlay
                    mfp.bgOverlay = _getEl('bg').on('click' + EVENT_NS, function() {
                        mfp.close();
                    });

                    mfp.wrap = _getEl('wrap').attr('tabindex', -1).on('click' + EVENT_NS, function(e) {
                        if (mfp._checkIfClose(e.target)) {
                            mfp.close();
                        }
                    });

                    mfp.container = _getEl('container', mfp.wrap);
                }

                mfp.contentContainer = _getEl('content');
                if (mfp.st.preloader) {
                    mfp.preloader = _getEl('preloader', mfp.container, mfp.st.tLoading);
                }


                // Initializing modules
                var modules = $.magnificPopup.modules;
                for (i = 0; i < modules.length; i++) {
                    var n = modules[i];
                    n = n.charAt(0).toUpperCase() + n.slice(1);
                    mfp['init' + n].call(mfp);
                }
                _mfpTrigger('BeforeOpen');


                if (mfp.st.showCloseBtn) {
                    // Close button
                    if (!mfp.st.closeBtnInside) {
                        mfp.wrap.append(_getCloseBtn());
                    } else {
                        _mfpOn(MARKUP_PARSE_EVENT, function(e, template, values, item) {
                            values.close_replaceWith = _getCloseBtn(item.type);
                        });
                        _wrapClasses += ' mfp-close-btn-in';
                    }
                }

                if (mfp.st.alignTop) {
                    _wrapClasses += ' mfp-align-top';
                }



                if (mfp.fixedContentPos) {
                    mfp.wrap.css({
                        overflow: mfp.st.overflowY,
                        overflowX: 'hidden',
                        overflowY: mfp.st.overflowY
                    });
                } else {
                    mfp.wrap.css({
                        top: _window.scrollTop(),
                        position: 'absolute'
                    });
                }
                if (mfp.st.fixedBgPos === false || (mfp.st.fixedBgPos === 'auto' && !mfp.fixedContentPos)) {
                    mfp.bgOverlay.css({
                        height: _document.height(),
                        position: 'absolute'
                    });
                }



                if (mfp.st.enableEscapeKey) {
                    // Close on ESC key
                    _document.on('keyup' + EVENT_NS, function(e) {
                        if (e.keyCode === 27) {
                            mfp.close();
                        }
                    });
                }

                _window.on('resize' + EVENT_NS, function() {
                    mfp.updateSize();
                });


                if (!mfp.st.closeOnContentClick) {
                    _wrapClasses += ' mfp-auto-cursor';
                }

                if (_wrapClasses)
                    mfp.wrap.addClass(_wrapClasses);


                // this triggers recalculation of layout, so we get it once to not to trigger twice
                var windowHeight = mfp.wH = _window.height();


                var windowStyles = {};

                if (mfp.fixedContentPos) {
                    if (mfp._hasScrollBar(windowHeight)) {
                        var s = mfp._getScrollbarSize();
                        if (s) {
                            windowStyles.marginRight = s;
                        }
                    }
                }

                if (mfp.fixedContentPos) {
                    if (!mfp.isIE7) {
                        windowStyles.overflow = 'hidden';
                    } else {
                        // ie7 double-scroll bug
                        $('body, html').css('overflow', 'hidden');
                    }
                }



                var classesToadd = mfp.st.mainClass;
                if (mfp.isIE7) {
                    classesToadd += ' mfp-ie7';
                }
                if (classesToadd) {
                    mfp._addClassToMFP(classesToadd);
                }

                // add content
                mfp.updateItemHTML();

                _mfpTrigger('BuildControls');

                // remove scrollbar, add margin e.t.c
                $('html').css(windowStyles);

                // add everything to DOM
                mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo || _body);

                // Save last focused element
                mfp._lastFocusedEl = document.activeElement;

                // Wait for next cycle to allow CSS transition
                setTimeout(function() {

                    if (mfp.content) {
                        mfp._addClassToMFP(READY_CLASS);
                        mfp._setFocus();
                    } else {
                        // if content is not defined (not loaded e.t.c) we add class only for BG
                        mfp.bgOverlay.addClass(READY_CLASS);
                    }

                    // Trap the focus in popup
                    _document.on('focusin' + EVENT_NS, mfp._onFocusIn);

                }, 16);

                mfp.isOpen = true;
                mfp.updateSize(windowHeight);
                _mfpTrigger(OPEN_EVENT);

                return data;
            },

            /**
             * Closes the popup
             */
            close: function() {
                if (!mfp.isOpen) return;
                _mfpTrigger(BEFORE_CLOSE_EVENT);

                mfp.isOpen = false;
                // for CSS3 animation
                if (mfp.st.removalDelay && !mfp.isLowIE && mfp.supportsTransition) {
                    mfp._addClassToMFP(REMOVING_CLASS);
                    setTimeout(function() {
                        mfp._close();
                    }, mfp.st.removalDelay);
                } else {
                    mfp._close();
                }
            },

            /**
             * Helper for close() function
             */
            _close: function() {
                _mfpTrigger(CLOSE_EVENT);

                var classesToRemove = REMOVING_CLASS + ' ' + READY_CLASS + ' ';

                mfp.bgOverlay.detach();
                mfp.wrap.detach();
                mfp.container.empty();

                if (mfp.st.mainClass) {
                    classesToRemove += mfp.st.mainClass + ' ';
                }

                mfp._removeClassFromMFP(classesToRemove);

                if (mfp.fixedContentPos) {
                    var windowStyles = {
                        marginRight: ''
                    };
                    if (mfp.isIE7) {
                        $('body, html').css('overflow', '');
                    } else {
                        windowStyles.overflow = '';
                    }
                    $('html').css(windowStyles);
                }

                _document.off('keyup' + EVENT_NS + ' focusin' + EVENT_NS);
                mfp.ev.off(EVENT_NS);

                // clean up DOM elements that aren't removed
                mfp.wrap.attr('class', 'mfp-wrap').removeAttr('style');
                mfp.bgOverlay.attr('class', 'mfp-bg');
                mfp.container.attr('class', 'mfp-container');

                // remove close button from target element
                if (mfp.st.showCloseBtn &&
                    (!mfp.st.closeBtnInside || mfp.currTemplate[mfp.currItem.type] === true)) {
                    if (mfp.currTemplate.closeBtn)
                        mfp.currTemplate.closeBtn.detach();
                }


                if (mfp._lastFocusedEl) {
                    $(mfp._lastFocusedEl).focus(); // put tab focus back
                }
                mfp.currItem = null;
                mfp.content = null;
                mfp.currTemplate = null;
                mfp.prevHeight = 0;

                _mfpTrigger(AFTER_CLOSE_EVENT);
            },

            updateSize: function(winHeight) {

                if (mfp.isIOS) {
                    // fixes iOS nav bars https://github.com/dimsemenov/Magnific-Popup/issues/2
                    var zoomLevel = document.documentElement.clientWidth / window.innerWidth;
                    var height = window.innerHeight * zoomLevel;
                    mfp.wrap.css('height', height);
                    mfp.wH = height;
                } else {
                    mfp.wH = winHeight || _window.height();
                }
                // Fixes #84: popup incorrectly positioned with position:relative on body
                if (!mfp.fixedContentPos) {
                    mfp.wrap.css('height', mfp.wH);
                }

                _mfpTrigger('Resize');

            },

            /**
             * Set content of popup based on current index
             */
            updateItemHTML: function() {
                var item = mfp.items[mfp.index];

                // Detach and perform modifications
                mfp.contentContainer.detach();

                if (mfp.content)
                    mfp.content.detach();

                if (!item.parsed) {
                    item = mfp.parseEl(mfp.index);
                }

                var type = item.type;

                _mfpTrigger('BeforeChange', [mfp.currItem ? mfp.currItem.type : '', type]);
                // BeforeChange event works like so:
                // _mfpOn('BeforeChange', function(e, prevType, newType) { });

                mfp.currItem = item;





                if (!mfp.currTemplate[type]) {
                    var markup = mfp.st[type] ? mfp.st[type].markup : false;

                    // allows to modify markup
                    _mfpTrigger('FirstMarkupParse', markup);

                    if (markup) {
                        mfp.currTemplate[type] = $(markup);
                    } else {
                        // if there is no markup found we just define that template is parsed
                        mfp.currTemplate[type] = true;
                    }
                }

                if (_prevContentType && _prevContentType !== item.type) {
                    mfp.container.removeClass('mfp-' + _prevContentType + '-holder');
                }

                var newContent = mfp['get' + type.charAt(0).toUpperCase() + type.slice(1)](item, mfp.currTemplate[type]);
                mfp.appendContent(newContent, type);

                item.preloaded = true;

                _mfpTrigger(CHANGE_EVENT, item);
                _prevContentType = item.type;

                // Append container back after its content changed
                mfp.container.prepend(mfp.contentContainer);

                _mfpTrigger('AfterChange');
            },


            /**
             * Set HTML content of popup
             */
            appendContent: function(newContent, type) {
                mfp.content = newContent;

                if (newContent) {
                    if (mfp.st.showCloseBtn && mfp.st.closeBtnInside &&
                        mfp.currTemplate[type] === true) {
                        // if there is no markup, we just append close button element inside
                        if (!mfp.content.find('.mfp-close').length) {
                            mfp.content.append(_getCloseBtn());
                        }
                    } else {
                        mfp.content = newContent;
                    }
                } else {
                    mfp.content = '';
                }

                _mfpTrigger(BEFORE_APPEND_EVENT);
                mfp.container.addClass('mfp-' + type + '-holder');

                mfp.contentContainer.append(mfp.content);
            },

            /**
             * Creates Magnific Popup data object based on given data
             * @param  {int} index Index of item to parse
             */
            parseEl: function(index) {
                var item = mfp.items[index],
                    type;

                if (item.tagName) {
                    item = {
                        el: $(item)
                    };
                } else {
                    type = item.type;
                    item = {
                        data: item,
                        src: item.src
                    };
                }

                if (item.el) {
                    var types = mfp.types;


                    // check for 'mfp-TYPE' class
                    for (var i = 0; i < types.length; i++) {
                        if (item.el.hasClass('mfp-' + types[i])) {
                            type = types[i];
                            break;
                        }
                    }

                    item.src = item.el.attr('data-mfp-src');
                    if (!item.src) {
                        item.src = item.el.attr('href');
                    }
                }

                item.type = type || mfp.st.type || 'inline';
                item.index = index;
                item.parsed = true;
                mfp.items[index] = item;
                _mfpTrigger('ElementParse', item);

                return mfp.items[index];
            },


            /**
             * Initializes single popup or a group of popups
             */
            addGroup: function(el, options) {
                var eHandler = function(e) {
                    e.mfpEl = this;
                    mfp._openClick(e, el, options);
                };

                if (!options) {
                    options = {};
                }

                var eName = 'click.magnificPopup';
                options.mainEl = el;

                if (options.items) {
                    options.isObj = true;
                    el.off(eName).on(eName, eHandler);
                } else {
                    options.isObj = false;
                    if (options.delegate) {
                        el.off(eName).on(eName, options.delegate, eHandler);
                    } else {
                        options.items = el;
                        el.off(eName).on(eName, eHandler);
                    }
                }
            },
            _openClick: function(e, el, options) {
                var midClick = options.midClick !== undefined ? options.midClick : $.magnificPopup.defaults.midClick;


                if (!midClick && (e.which === 2 || e.ctrlKey || e.metaKey)) {
                    return;
                }

                var disableOn = options.disableOn !== undefined ? options.disableOn : $.magnificPopup.defaults.disableOn;

                if (disableOn) {
                    if ($.isFunction(disableOn)) {
                        if (!disableOn.call(mfp)) {
                            return true;
                        }
                    } else { // else it's number
                        if (_window.width() < disableOn) {
                            return true;
                        }
                    }
                }

                if (e.type) {
                    e.preventDefault();

                    // This will prevent popup from closing if element is inside and popup is already opened
                    if (mfp.isOpen) {
                        e.stopPropagation();
                    }
                }


                options.el = $(e.mfpEl);
                if (options.delegate) {
                    options.items = el.find(options.delegate);
                }
                mfp.open(options);
            },


            /**
             * Updates text on preloader
             */
            updateStatus: function(status, text) {

                if (mfp.preloader) {
                    if (_prevStatus !== status) {
                        mfp.container.removeClass('mfp-s-' + _prevStatus);
                    }

                    if (!text && status === 'loading') {
                        text = mfp.st.tLoading;
                    }

                    var data = {
                        status: status,
                        text: text
                    };
                    // allows to modify status
                    _mfpTrigger('UpdateStatus', data);

                    status = data.status;
                    text = data.text;

                    mfp.preloader.html(text);

                    mfp.preloader.find('a').on('click', function(e) {
                        e.stopImmediatePropagation();
                    });

                    mfp.container.addClass('mfp-s-' + status);
                    _prevStatus = status;
                }
            },


            /*
                "Private" helpers that aren't private at all
             */
            // Check to close popup or not
            // "target" is an element that was clicked
            _checkIfClose: function(target) {

                if ($(target).hasClass(PREVENT_CLOSE_CLASS)) {
                    return;
                }

                var closeOnContent = mfp.st.closeOnContentClick;
                var closeOnBg = mfp.st.closeOnBgClick;

                if (closeOnContent && closeOnBg) {
                    return true;
                } else {

                    // We close the popup if click is on close button or on preloader. Or if there is no content.
                    if (!mfp.content || $(target).hasClass('mfp-close') || (mfp.preloader && target === mfp.preloader[0])) {
                        return true;
                    }

                    // if click is outside the content
                    if ((target !== mfp.content[0] && !$.contains(mfp.content[0], target))) {
                        if (closeOnBg) {
                            // last check, if the clicked element is in DOM, (in case it's removed onclick)
                            if ($.contains(document, target)) {
                                return true;
                            }
                        }
                    } else if (closeOnContent) {
                        return true;
                    }

                }
                return false;
            },
            _addClassToMFP: function(cName) {
                mfp.bgOverlay.addClass(cName);
                mfp.wrap.addClass(cName);
            },
            _removeClassFromMFP: function(cName) {
                this.bgOverlay.removeClass(cName);
                mfp.wrap.removeClass(cName);
            },
            _hasScrollBar: function(winHeight) {
                return ((mfp.isIE7 ? _document.height() : document.body.scrollHeight) > (winHeight || _window.height()));
            },
            _setFocus: function() {
                (mfp.st.focus ? mfp.content.find(mfp.st.focus).eq(0) : mfp.wrap).focus();
            },
            _onFocusIn: function(e) {
                if (e.target !== mfp.wrap[0] && !$.contains(mfp.wrap[0], e.target)) {
                    mfp._setFocus();
                    return false;
                }
            },
            _parseMarkup: function(template, values, item) {
                var arr;
                if (item.data) {
                    values = $.extend(item.data, values);
                }
                _mfpTrigger(MARKUP_PARSE_EVENT, [template, values, item]);

                $.each(values, function(key, value) {
                    if (value === undefined || value === false) {
                        return true;
                    }
                    arr = key.split('_');
                    if (arr.length > 1) {
                        var el = template.find(EVENT_NS + '-' + arr[0]);

                        if (el.length > 0) {
                            var attr = arr[1];
                            if (attr === 'replaceWith') {
                                if (el[0] !== value[0]) {
                                    el.replaceWith(value);
                                }
                            } else if (attr === 'img') {
                                if (el.is('img')) {
                                    el.attr('src', value);
                                } else {
                                    el.replaceWith('<img src="' + value + '" class="' + el.attr('class') + '" />');
                                }
                            } else {
                                el.attr(arr[1], value);
                            }
                        }

                    } else {
                        template.find(EVENT_NS + '-' + key).html(value);
                    }
                });
            },

            _getScrollbarSize: function() {
                // thx David
                if (mfp.scrollbarSize === undefined) {
                    var scrollDiv = document.createElement("div");
                    scrollDiv.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';
                    document.body.appendChild(scrollDiv);
                    mfp.scrollbarSize = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                    document.body.removeChild(scrollDiv);
                }
                return mfp.scrollbarSize;
            }

        }; /* MagnificPopup core prototype end */




        /**
         * Public static functions
         */
        $.magnificPopup = {
            instance: null,
            proto: MagnificPopup.prototype,
            modules: [],

            open: function(options, index) {
                _checkInstance();

                if (!options) {
                    options = {};
                } else {
                    options = $.extend(true, {}, options);
                }


                options.isObj = true;
                options.index = index || 0;
                return this.instance.open(options);
            },

            close: function() {
                return $.magnificPopup.instance && $.magnificPopup.instance.close();
            },

            registerModule: function(name, module) {
                if (module.options) {
                    $.magnificPopup.defaults[name] = module.options;
                }
                $.extend(this.proto, module.proto);
                this.modules.push(name);
            },

            defaults: {

                // Info about options is in docs:
                // http://dimsemenov.com/plugins/magnific-popup/documentation.html#options

                disableOn: 0,

                key: null,

                midClick: false,

                mainClass: '',

                preloader: true,

                focus: '', // CSS selector of input to focus after popup is opened

                closeOnContentClick: false,

                closeOnBgClick: true,

                closeBtnInside: true,

                showCloseBtn: true,

                enableEscapeKey: true,

                modal: false,

                alignTop: false,

                removalDelay: 0,

                prependTo: null,

                fixedContentPos: 'auto',

                fixedBgPos: 'auto',

                overflowY: 'auto',

                closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',

                tClose: LANG_PLUGIN.Magnific[$.LANG_SITE].tClose,

                tLoading: LANG_PLUGIN.Magnific[$.LANG_SITE].tLoading

            }
        };



        $.fn.magnificPopup = function(options) {
            _checkInstance();

            var jqEl = $(this);

            // We call some API method of first param is a string
            if (typeof options === "string") {

                if (options === 'open') {
                    var items,
                        itemOpts = _isJQ ? jqEl.data('magnificPopup') : jqEl[0].magnificPopup,
                        index = parseInt(arguments[1], 10) || 0;

                    if (itemOpts.items) {
                        items = itemOpts.items[index];
                    } else {
                        items = jqEl;
                        if (itemOpts.delegate) {
                            items = items.find(itemOpts.delegate);
                        }
                        items = items.eq(index);
                    }
                    mfp._openClick({
                        mfpEl: items
                    }, jqEl, itemOpts);
                } else {
                    if (mfp.isOpen)
                        mfp[options].apply(mfp, Array.prototype.slice.call(arguments, 1));
                }

            } else {
                // clone options obj
                options = $.extend(true, {}, options);

                /*
                 * As Zepto doesn't support .data() method for objects
                 * and it works only in normal browsers
                 * we assign "options" object directly to the DOM element. FTW!
                 */
                if (_isJQ) {
                    jqEl.data('magnificPopup', options);
                } else {
                    jqEl[0].magnificPopup = options;
                }

                mfp.addGroup(jqEl, options);

            }
            return jqEl;
        };


        //Quick benchmark
        /*
        var start = performance.now(),
            i,
            rounds = 1000;

        for(i = 0; i < rounds; i++) {

        }
        console.log('Test #1:', performance.now() - start);

        start = performance.now();
        for(i = 0; i < rounds; i++) {

        }
        console.log('Test #2:', performance.now() - start);
        */


        /*>>core*/

        /*>>inline*/

        var INLINE_NS = 'inline',
            _hiddenClass,
            _inlinePlaceholder,
            _lastInlineElement,
            _putInlineElementsBack = function() {
                if (_lastInlineElement) {
                    _inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();
                    _lastInlineElement = null;
                }
            };

        $.magnificPopup.registerModule(INLINE_NS, {
            options: {
                hiddenClass: 'hide', // will be appended with `mfp-` prefix
                markup: '',
                tNotFound: LANG_PLUGIN.Magnific[$.LANG_SITE].tNotFound
            },
            proto: {

                initInline: function() {
                    mfp.types.push(INLINE_NS);

                    _mfpOn(CLOSE_EVENT + '.' + INLINE_NS, function() {
                        _putInlineElementsBack();
                    });
                },

                getInline: function(item, template) {

                    _putInlineElementsBack();

                    if (item.src) {
                        var inlineSt = mfp.st.inline,
                            el = $(item.src);

                        if (el.length) {

                            // If target element has parent - we replace it with placeholder and put it back after popup is closed
                            var parent = el[0].parentNode;
                            if (parent && parent.tagName) {
                                if (!_inlinePlaceholder) {
                                    _hiddenClass = inlineSt.hiddenClass;
                                    _inlinePlaceholder = _getEl(_hiddenClass);
                                    _hiddenClass = 'mfp-' + _hiddenClass;
                                }
                                // replace target inline element with placeholder
                                _lastInlineElement = el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);
                            }

                            mfp.updateStatus('ready');
                        } else {
                            mfp.updateStatus('error', inlineSt.tNotFound);
                            el = $('<div>');
                        }

                        item.inlineElement = el;
                        return el;
                    }

                    mfp.updateStatus('ready');
                    mfp._parseMarkup(template, {}, item);
                    return template;
                }
            }
        });

        /*>>inline*/

        /*>>ajax*/
        var AJAX_NS = 'ajax',
            _ajaxCur,
            _removeAjaxCursor = function() {
                if (_ajaxCur) {
                    _body.removeClass(_ajaxCur);
                }
            },
            _destroyAjaxRequest = function() {
                _removeAjaxCursor();
                if (mfp.req) {
                    mfp.req.abort();
                }
            };

        $.magnificPopup.registerModule(AJAX_NS, {

            options: {
                settings: null,
                cursor: 'mfp-ajax-cur',
                tError: LANG_PLUGIN.Magnific[$.LANG_SITE].tError
            },

            proto: {
                initAjax: function() {
                    mfp.types.push(AJAX_NS);
                    _ajaxCur = mfp.st.ajax.cursor;

                    _mfpOn(CLOSE_EVENT + '.' + AJAX_NS, _destroyAjaxRequest);
                    _mfpOn('BeforeChange.' + AJAX_NS, _destroyAjaxRequest);
                },
                getAjax: function(item) {

                    if (_ajaxCur)
                        _body.addClass(_ajaxCur);

                    mfp.updateStatus('loading');

                    var opts = $.extend({
                        url: item.src,
                        success: function(data, textStatus, jqXHR) {
                            var temp = {
                                data: data,
                                xhr: jqXHR
                            };

                            _mfpTrigger('ParseAjax', temp);

                            mfp.appendContent($(temp.data), AJAX_NS);

                            item.finished = true;

                            _removeAjaxCursor();

                            mfp._setFocus();

                            setTimeout(function() {
                                mfp.wrap.addClass(READY_CLASS);
                            }, 16);

                            mfp.updateStatus('ready');

                            _mfpTrigger('AjaxContentAdded');
                        },
                        error: function() {
                            _removeAjaxCursor();
                            item.finished = item.loadError = true;
                            mfp.updateStatus('error', mfp.st.ajax.tError.replace('%url%', item.src));
                        }
                    }, mfp.st.ajax.settings);

                    mfp.req = $.ajax(opts);

                    return '';
                }
            }
        });







        /*>>ajax*/

        /*>>image*/
        var _imgInterval,
            _getTitle = function(item) {
                if (item.data && item.data.title !== undefined)
                    return item.data.title;

                var src = mfp.st.image.titleSrc;

                if (src) {
                    if ($.isFunction(src)) {
                        return src.call(mfp, item);
                    } else if (item.el) {
                        return item.el.attr(src) || '';
                    }
                }
                return '';
            };

        $.magnificPopup.registerModule('image', {

            options: {
                markup: '<div class="mfp-figure">' +
                    '<div class="mfp-close"></div>' +
                    '<figure>' +
                    '<div class="mfp-img"></div>' +
                    '<figcaption>' +
                    '<div class="mfp-bottom-bar">' +
                    '<div class="mfp-title"></div>' +
                    '<div class="mfp-counter"></div>' +
                    '</div>' +
                    '</figcaption>' +
                    '</figure>' +
                    '</div>',
                cursor: 'mfp-zoom-out-cur',
                titleSrc: 'title',
                verticalFit: true,

                tError: LANG_PLUGIN.Magnific[$.LANG_SITE].tErrorImage
            },

            proto: {
                initImage: function() {
                    var imgSt = mfp.st.image,
                        ns = '.image';

                    mfp.types.push('image');

                    _mfpOn(OPEN_EVENT + ns, function() {
                        if (mfp.currItem.type === 'image' && imgSt.cursor) {
                            _body.addClass(imgSt.cursor);
                        }
                    });

                    _mfpOn(CLOSE_EVENT + ns, function() {
                        if (imgSt.cursor) {
                            _body.removeClass(imgSt.cursor);
                        }
                        _window.off('resize' + EVENT_NS);
                    });

                    _mfpOn('Resize' + ns, mfp.resizeImage);
                    if (mfp.isLowIE) {
                        _mfpOn('AfterChange', mfp.resizeImage);
                    }
                },
                resizeImage: function() {
                    var item = mfp.currItem;
                    if (!item || !item.img) return;

                    if (mfp.st.image.verticalFit) {
                        var decr = 0;
                        // fix box-sizing in ie7/8
                        if (mfp.isLowIE) {
                            decr = parseInt(item.img.css('padding-top'), 10) + parseInt(item.img.css('padding-bottom'), 10);
                        }
                        item.img.css('max-height', mfp.wH - decr);
                    }
                },
                _onImageHasSize: function(item) {
                    if (item.img) {

                        item.hasSize = true;

                        if (_imgInterval) {
                            clearInterval(_imgInterval);
                        }

                        item.isCheckingImgSize = false;

                        _mfpTrigger('ImageHasSize', item);

                        if (item.imgHidden) {
                            if (mfp.content)
                                mfp.content.removeClass('mfp-loading');

                            item.imgHidden = false;
                        }

                    }
                },

                /**
                 * Function that loops until the image has size to display elements that rely on it asap
                 */
                findImageSize: function(item) {

                    var counter = 0,
                        img = item.img[0],
                        mfpSetInterval = function(delay) {

                            if (_imgInterval) {
                                clearInterval(_imgInterval);
                            }
                            // decelerating interval that checks for size of an image
                            _imgInterval = setInterval(function() {
                                if (img.naturalWidth > 0) {
                                    mfp._onImageHasSize(item);
                                    return;
                                }

                                if (counter > 200) {
                                    clearInterval(_imgInterval);
                                }

                                counter++;
                                if (counter === 3) {
                                    mfpSetInterval(10);
                                } else if (counter === 40) {
                                    mfpSetInterval(50);
                                } else if (counter === 100) {
                                    mfpSetInterval(500);
                                }
                            }, delay);
                        };

                    mfpSetInterval(1);
                },

                getImage: function(item, template) {

                    var guard = 0,

                        // image load complete handler
                        onLoadComplete = function() {
                            if (item) {
                                if (item.img[0].complete) {
                                    item.img.off('.mfploader');

                                    if (item === mfp.currItem) {
                                        mfp._onImageHasSize(item);

                                        mfp.updateStatus('ready');
                                    }

                                    item.hasSize = true;
                                    item.loaded = true;

                                    _mfpTrigger('ImageLoadComplete');

                                } else {
                                    // if image complete check fails 200 times (20 sec), we assume that there was an error.
                                    guard++;
                                    if (guard < 200) {
                                        setTimeout(onLoadComplete, 100);
                                    } else {
                                        onLoadError();
                                    }
                                }
                            }
                        },

                        // image error handler
                        onLoadError = function() {
                            if (item) {
                                item.img.off('.mfploader');
                                if (item === mfp.currItem) {
                                    mfp._onImageHasSize(item);
                                    mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                                }

                                item.hasSize = true;
                                item.loaded = true;
                                item.loadError = true;
                            }
                        },
                        imgSt = mfp.st.image;


                    var el = template.find('.mfp-img');
                    if (el.length) {
                        var img = document.createElement('img');
                        img.className = 'mfp-img';
                        item.img = $(img).on('load.mfploader', onLoadComplete).on('error.mfploader', onLoadError);
                        img.src = item.src;

                        // without clone() "error" event is not firing when IMG is replaced by new IMG
                        // TODO: find a way to avoid such cloning
                        if (el.is('img')) {
                            item.img = item.img.clone();
                        }

                        img = item.img[0];
                        if (img.naturalWidth > 0) {
                            item.hasSize = true;
                        } else if (!img.width) {
                            item.hasSize = false;
                        }
                    }

                    mfp._parseMarkup(template, {
                        title: _getTitle(item),
                        img_replaceWith: item.img
                    }, item);

                    mfp.resizeImage();

                    if (item.hasSize) {
                        if (_imgInterval) clearInterval(_imgInterval);

                        if (item.loadError) {
                            template.addClass('mfp-loading');
                            mfp.updateStatus('error', imgSt.tError.replace('%url%', item.src));
                        } else {
                            template.removeClass('mfp-loading');
                            mfp.updateStatus('ready');
                        }
                        return template;
                    }

                    mfp.updateStatus('loading');
                    item.loading = true;

                    if (!item.hasSize) {
                        item.imgHidden = true;
                        template.addClass('mfp-loading');
                        mfp.findImageSize(item);
                    }

                    return template;
                }
            }
        });



        /*>>image*/

        /*>>zoom*/
        var hasMozTransform,
            getHasMozTransform = function() {
                if (hasMozTransform === undefined) {
                    hasMozTransform = document.createElement('p').style.MozTransform !== undefined;
                }
                return hasMozTransform;
            };

        $.magnificPopup.registerModule('zoom', {

            options: {
                enabled: false,
                easing: 'ease-in-out',
                duration: 300,
                opener: function(element) {
                    return element.is('img') ? element : element.find('img');
                }
            },

            proto: {

                initZoom: function() {
                    var zoomSt = mfp.st.zoom,
                        ns = '.zoom',
                        image;

                    if (!zoomSt.enabled || !mfp.supportsTransition) {
                        return;
                    }

                    var duration = zoomSt.duration,
                        getElToAnimate = function(image) {
                            var newImg = image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                                transition = 'all ' + (zoomSt.duration / 1000) + 's ' + zoomSt.easing,
                                cssObj = {
                                    position: 'fixed',
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    '-webkit-backface-visibility': 'hidden'
                                },
                                t = 'transition';

                            cssObj['-webkit-' + t] = cssObj['-moz-' + t] = cssObj['-o-' + t] = cssObj[t] = transition;

                            newImg.css(cssObj);
                            return newImg;
                        },
                        showMainContent = function() {
                            mfp.content.css('visibility', 'visible');
                        },
                        openTimeout,
                        animatedImg;

                    _mfpOn('BuildControls' + ns, function() {
                        if (mfp._allowZoom()) {

                            clearTimeout(openTimeout);
                            mfp.content.css('visibility', 'hidden');

                            // Basically, all code below does is clones existing image, puts in on top of the current one and animated it

                            image = mfp._getItemToZoom();

                            if (!image) {
                                showMainContent();
                                return;
                            }

                            animatedImg = getElToAnimate(image);

                            animatedImg.css(mfp._getOffset());

                            mfp.wrap.append(animatedImg);

                            openTimeout = setTimeout(function() {
                                animatedImg.css(mfp._getOffset(true));
                                openTimeout = setTimeout(function() {

                                    showMainContent();

                                    setTimeout(function() {
                                        animatedImg.remove();
                                        image = animatedImg = null;
                                        _mfpTrigger('ZoomAnimationEnded');
                                    }, 16); // avoid blink when switching images 

                                }, duration); // this timeout equals animation duration

                            }, 16); // by adding this timeout we avoid short glitch at the beginning of animation


                            // Lots of timeouts...
                        }
                    });
                    _mfpOn(BEFORE_CLOSE_EVENT + ns, function() {
                        if (mfp._allowZoom()) {

                            clearTimeout(openTimeout);

                            mfp.st.removalDelay = duration;

                            if (!image) {
                                image = mfp._getItemToZoom();
                                if (!image) {
                                    return;
                                }
                                animatedImg = getElToAnimate(image);
                            }


                            animatedImg.css(mfp._getOffset(true));
                            mfp.wrap.append(animatedImg);
                            mfp.content.css('visibility', 'hidden');

                            setTimeout(function() {
                                animatedImg.css(mfp._getOffset());
                            }, 16);
                        }

                    });

                    _mfpOn(CLOSE_EVENT + ns, function() {
                        if (mfp._allowZoom()) {
                            showMainContent();
                            if (animatedImg) {
                                animatedImg.remove();
                            }
                            image = null;
                        }
                    });
                },

                _allowZoom: function() {
                    return mfp.currItem.type === 'image';
                },

                _getItemToZoom: function() {
                    if (mfp.currItem.hasSize) {
                        return mfp.currItem.img;
                    } else {
                        return false;
                    }
                },

                // Get element postion relative to viewport
                _getOffset: function(isLarge) {
                    var el;
                    if (isLarge) {
                        el = mfp.currItem.img;
                    } else {
                        el = mfp.st.zoom.opener(mfp.currItem.el || mfp.currItem);
                    }

                    var offset = el.offset();
                    var paddingTop = parseInt(el.css('padding-top'), 10);
                    var paddingBottom = parseInt(el.css('padding-bottom'), 10);
                    offset.top -= ($(window).scrollTop() - paddingTop);


                    /*
                    
                    Animating left + top + width/height looks glitchy in Firefox, but perfect in Chrome. And vice-versa.

                     */
                    var obj = {
                        width: el.width(),
                        // fix Zepto height+padding issue
                        height: (_isJQ ? el.innerHeight() : el[0].offsetHeight) - paddingBottom - paddingTop
                    };

                    // I hate to do this, but there is no another option
                    if (getHasMozTransform()) {
                        obj['-moz-transform'] = obj['transform'] = 'translate(' + offset.left + 'px,' + offset.top + 'px)';
                    } else {
                        obj.left = offset.left;
                        obj.top = offset.top;
                    }
                    return obj;
                }

            }
        });



        /*>>zoom*/

        /*>>iframe*/

        var IFRAME_NS = 'iframe',
            _emptyPage = '//about:blank',

            _fixIframeBugs = function(isShowing) {
                if (mfp.currTemplate[IFRAME_NS]) {
                    var el = mfp.currTemplate[IFRAME_NS].find('iframe');
                    if (el.length) {
                        // reset src after the popup is closed to avoid "video keeps playing after popup is closed" bug
                        if (!isShowing) {
                            el[0].src = _emptyPage;
                        }

                        // IE8 black screen bug fix
                        if (mfp.isIE8) {
                            el.css('display', isShowing ? 'block' : 'none');
                        }
                    }
                }
            };

        $.magnificPopup.registerModule(IFRAME_NS, {

            options: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                srcAction: 'iframe_src',

                // we don't care and support only one default type of URL by default
                patterns: {
                    youtube: {
                        index: 'youtube.com',
                        id: 'v=',
                        src: '//www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }
                }
            },

            proto: {
                initIframe: function() {
                    mfp.types.push(IFRAME_NS);

                    _mfpOn('BeforeChange', function(e, prevType, newType) {
                        if (prevType !== newType) {
                            if (prevType === IFRAME_NS) {
                                _fixIframeBugs(); // iframe if removed
                            } else if (newType === IFRAME_NS) {
                                _fixIframeBugs(true); // iframe is showing
                            }
                        } // else {
                        // iframe source is switched, don't do anything
                        //}
                    });

                    _mfpOn(CLOSE_EVENT + '.' + IFRAME_NS, function() {
                        _fixIframeBugs();
                    });
                },

                getIframe: function(item, template) {
                    var embedSrc = item.src;
                    var iframeSt = mfp.st.iframe;

                    $.each(iframeSt.patterns, function() {
                        if (embedSrc.indexOf(this.index) > -1) {
                            if (this.id) {
                                if (typeof this.id === 'string') {
                                    embedSrc = embedSrc.substr(embedSrc.lastIndexOf(this.id) + this.id.length, embedSrc.length);
                                } else {
                                    embedSrc = this.id.call(this, embedSrc);
                                }
                            }
                            embedSrc = this.src.replace('%id%', embedSrc);
                            return false; // break;
                        }
                    });

                    var dataObj = {};
                    if (iframeSt.srcAction) {
                        dataObj[iframeSt.srcAction] = embedSrc;
                    }
                    mfp._parseMarkup(template, dataObj, item);

                    mfp.updateStatus('ready');

                    return template;
                }
            }
        });



        /*>>iframe*/

        /*>>gallery*/
        /**
         * Get looped index depending on number of slides
         */
        var _getLoopedId = function(index) {
            var numSlides = mfp.items.length;
            if (index > numSlides - 1) {
                return index - numSlides;
            } else if (index < 0) {
                return numSlides + index;
            }
            return index;
        },
            _replaceCurrTotal = function(text, curr, total) {
                return text.replace(/%curr%/gi, curr + 1).replace(/%total%/gi, total);
            };

        $.magnificPopup.registerModule('gallery', {

            options: {
                enabled: false,
                arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                preload: [0, 2],
                navigateByImgClick: true,
                arrows: true,

                tPrev: LANG_PLUGIN.Magnific[$.LANG_SITE].tPrev,
                tNext: LANG_PLUGIN.Magnific[$.LANG_SITE].tNext,
                tCounter: LANG_PLUGIN.Magnific[$.LANG_SITE].tCounter
            },

            proto: {
                initGallery: function() {

                    var gSt = mfp.st.gallery,
                        ns = '.mfp-gallery',
                        supportsFastClick = Boolean($.fn.mfpFastClick);

                    mfp.direction = true; // true - next, false - prev

                    if (!gSt || !gSt.enabled) return false;

                    _wrapClasses += ' mfp-gallery';

                    _mfpOn(OPEN_EVENT + ns, function() {

                        if (gSt.navigateByImgClick) {
                            mfp.wrap.on('click' + ns, '.mfp-img', function() {
                                if (mfp.items.length > 1) {
                                    mfp.next();
                                    return false;
                                }
                            });
                        }

                        _document.on('keydown' + ns, function(e) {
                            if (e.keyCode === 37) {
                                mfp.prev();
                            } else if (e.keyCode === 39) {
                                mfp.next();
                            }
                        });
                    });

                    _mfpOn('UpdateStatus' + ns, function(e, data) {
                        if (data.text) {
                            data.text = _replaceCurrTotal(data.text, mfp.currItem.index, mfp.items.length);
                        }
                    });

                    _mfpOn(MARKUP_PARSE_EVENT + ns, function(e, element, values, item) {
                        var l = mfp.items.length;
                        values.counter = l > 1 ? _replaceCurrTotal(gSt.tCounter, item.index, l) : '';
                    });

                    _mfpOn('BuildControls' + ns, function() {
                        if (mfp.items.length > 1 && gSt.arrows && !mfp.arrowLeft) {
                            var markup = gSt.arrowMarkup,
                                arrowLeft = mfp.arrowLeft = $(markup.replace(/%title%/gi, gSt.tPrev).replace(/%dir%/gi, 'left')).addClass(PREVENT_CLOSE_CLASS),
                                arrowRight = mfp.arrowRight = $(markup.replace(/%title%/gi, gSt.tNext).replace(/%dir%/gi, 'right')).addClass(PREVENT_CLOSE_CLASS);

                            var eName = supportsFastClick ? 'mfpFastClick' : 'click';
                            arrowLeft[eName](function() {
                                mfp.prev();
                            });
                            arrowRight[eName](function() {
                                mfp.next();
                            });

                            // Polyfill for :before and :after (adds elements with classes mfp-a and mfp-b)
                            if (mfp.isIE7) {
                                _getEl('b', arrowLeft[0], false, true);
                                _getEl('a', arrowLeft[0], false, true);
                                _getEl('b', arrowRight[0], false, true);
                                _getEl('a', arrowRight[0], false, true);
                            }

                            mfp.container.append(arrowLeft.add(arrowRight));
                        }
                    });

                    _mfpOn(CHANGE_EVENT + ns, function() {
                        if (mfp._preloadTimeout) clearTimeout(mfp._preloadTimeout);

                        mfp._preloadTimeout = setTimeout(function() {
                            mfp.preloadNearbyImages();
                            mfp._preloadTimeout = null;
                        }, 16);
                    });


                    _mfpOn(CLOSE_EVENT + ns, function() {
                        _document.off(ns);
                        mfp.wrap.off('click' + ns);

                        if (mfp.arrowLeft && supportsFastClick) {
                            mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();
                        }
                        mfp.arrowRight = mfp.arrowLeft = null;
                    });

                },
                next: function() {
                    mfp.direction = true;
                    mfp.index = _getLoopedId(mfp.index + 1);
                    mfp.updateItemHTML();
                },
                prev: function() {
                    mfp.direction = false;
                    mfp.index = _getLoopedId(mfp.index - 1);
                    mfp.updateItemHTML();
                },
                goTo: function(newIndex) {
                    mfp.direction = (newIndex >= mfp.index);
                    mfp.index = newIndex;
                    mfp.updateItemHTML();
                },
                preloadNearbyImages: function() {
                    var p = mfp.st.gallery.preload,
                        preloadBefore = Math.min(p[0], mfp.items.length),
                        preloadAfter = Math.min(p[1], mfp.items.length),
                        i;

                    for (i = 1; i <= (mfp.direction ? preloadAfter : preloadBefore); i++) {
                        mfp._preloadItem(mfp.index + i);
                    }
                    for (i = 1; i <= (mfp.direction ? preloadBefore : preloadAfter); i++) {
                        mfp._preloadItem(mfp.index - i);
                    }
                },
                _preloadItem: function(index) {
                    index = _getLoopedId(index);

                    if (mfp.items[index].preloaded) {
                        return;
                    }

                    var item = mfp.items[index];
                    if (!item.parsed) {
                        item = mfp.parseEl(index);
                    }

                    _mfpTrigger('LazyLoad', item);

                    if (item.type === 'image') {
                        item.img = $('<img class="mfp-img" />').on('load.mfploader', function() {
                            item.hasSize = true;
                        }).on('error.mfploader', function() {
                            item.hasSize = true;
                            item.loadError = true;
                            _mfpTrigger('LazyLoadError', item);
                        }).attr('src', item.src);
                    }


                    item.preloaded = true;
                }
            }
        });

        /*
        Touch Support that might be implemented some day

        addSwipeGesture: function() {
            var startX,
                moved,
                multipleTouches;

                return;

            var namespace = '.mfp',
                addEventNames = function(pref, down, move, up, cancel) {
                    mfp._tStart = pref + down + namespace;
                    mfp._tMove = pref + move + namespace;
                    mfp._tEnd = pref + up + namespace;
                    mfp._tCancel = pref + cancel + namespace;
                };

            if(window.navigator.msPointerEnabled) {
                addEventNames('MSPointer', 'Down', 'Move', 'Up', 'Cancel');
            } else if('ontouchstart' in window) {
                addEventNames('touch', 'start', 'move', 'end', 'cancel');
            } else {
                return;
            }
            _window.on(mfp._tStart, function(e) {
                var oE = e.originalEvent;
                multipleTouches = moved = false;
                startX = oE.pageX || oE.changedTouches[0].pageX;
            }).on(mfp._tMove, function(e) {
                if(e.originalEvent.touches.length > 1) {
                    multipleTouches = e.originalEvent.touches.length;
                } else {
                    //e.preventDefault();
                    moved = true;
                }
            }).on(mfp._tEnd + ' ' + mfp._tCancel, function(e) {
                if(moved && !multipleTouches) {
                    var oE = e.originalEvent,
                        diff = startX - (oE.pageX || oE.changedTouches[0].pageX);

                    if(diff > 20) {
                        mfp.next();
                    } else if(diff < -20) {
                        mfp.prev();
                    }
                }
            });
        },
        */


        /*>>gallery*/

        /*>>retina*/

        var RETINA_NS = 'retina';

        $.magnificPopup.registerModule(RETINA_NS, {
            options: {
                replaceSrc: function(item) {
                    return item.src.replace(/\.\w+$/, function(m) {
                        return '@2x' + m;
                    });
                },
                ratio: 1 // Function or number.  Set to 1 to disable.
            },
            proto: {
                initRetina: function() {
                    if (window.devicePixelRatio > 1) {

                        var st = mfp.st.retina,
                            ratio = st.ratio;

                        ratio = !isNaN(ratio) ? ratio : ratio();

                        if (ratio > 1) {
                            _mfpOn('ImageHasSize' + '.' + RETINA_NS, function(e, item) {
                                item.img.css({
                                    'max-width': item.img[0].naturalWidth / ratio,
                                    'width': '100%'
                                });
                            });
                            _mfpOn('ElementParse' + '.' + RETINA_NS, function(e, item) {
                                item.src = st.replaceSrc(item, ratio);
                            });
                        }
                    }

                }
            }
        });

        /*>>retina*/

        /*>>fastclick*/
        /**
         * FastClick event implementation. (removes 300ms delay on touch devices)
         * Based on https://developers.google.com/mobile/articles/fast_buttons
         *
         * You may use it outside the Magnific Popup by calling just:
         *
         * $('.your-el').mfpFastClick(function() {
         *     console.log('Clicked!');
         * });
         *
         * To unbind:
         * $('.your-el').destroyMfpFastClick();
         *
         *
         * Note that it's a very basic and simple implementation, it blocks ghost click on the same element where it was bound.
         * If you need something more advanced, use plugin by FT Labs https://github.com/ftlabs/fastclick
         *
         */

        (function() {
            var ghostClickDelay = 1000,
                supportsTouch = 'ontouchstart' in window,
                unbindTouchMove = function() {
                    _window.off('touchmove' + ns + ' touchend' + ns);
                },
                eName = 'mfpFastClick',
                ns = '.' + eName;


            // As Zepto.js doesn't have an easy way to add custom events (like jQuery), so we implement it in this way
            $.fn.mfpFastClick = function(callback) {

                return $(this).each(function() {

                    var elem = $(this),
                        lock;

                    if (supportsTouch) {

                        var timeout,
                            startX,
                            startY,
                            pointerMoved,
                            point,
                            numPointers;

                        elem.on('touchstart' + ns, function(e) {
                            pointerMoved = false;
                            numPointers = 1;

                            point = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0];
                            startX = point.clientX;
                            startY = point.clientY;

                            _window.on('touchmove' + ns, function(e) {
                                point = e.originalEvent ? e.originalEvent.touches : e.touches;
                                numPointers = point.length;
                                point = point[0];
                                if (Math.abs(point.clientX - startX) > 10 ||
                                    Math.abs(point.clientY - startY) > 10) {
                                    pointerMoved = true;
                                    unbindTouchMove();
                                }
                            }).on('touchend' + ns, function(e) {
                                unbindTouchMove();
                                if (pointerMoved || numPointers > 1) {
                                    return;
                                }
                                lock = true;
                                e.preventDefault();
                                clearTimeout(timeout);
                                timeout = setTimeout(function() {
                                    lock = false;
                                }, ghostClickDelay);
                                callback();
                            });
                        });

                    }

                    elem.on('click' + ns, function() {
                        if (!lock) {
                            callback();
                        }
                    });
                });
            };

            $.fn.destroyMfpFastClick = function() {
                $(this).off('touchstart' + ns + ' click' + ns);
                if (supportsTouch) _window.off('touchmove' + ns + ' touchend' + ns);
            };
        })();

        /*>>fastclick*/
        _checkInstance();
    })(window.jQuery || window.Zepto);
