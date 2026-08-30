/*
This is a simple implementation of the password_strength.js plugin, that does not use jQuery Widget Factory.
If you a going to extend plugin with addition functionality it will be better to use password_strength.js
because jQuery Widget Factory allows to build complex, stateful plugins based on object-oriented principles.

Dependencies:
1. jQuery
*/

; (function ($, window, document, undefined) {
    var upperCase = new RegExp('[A-Z]');
    var lowerCase = new RegExp('[a-z]');
    var numbers = new RegExp('[0-9]');
    var specials = new RegExp(/[-!$%^&*()_+|~=`{}'"\\[:;<>?,./@#\]]/g);
    var pluginName = 'strength_meter',
        defaults = {
            strengthWrapperClass: 'strength_wrapper',
            strengthMeterClass: 't_strength_meter',
            toggleButtonClass: 'button_strength',
            passwordId: '',
            checkPasswordLength: true,
            checkUpperLowerCase: true,
            checkNumber: true,
            checkSpecialChar: true,
            showStrength: true,
            passwordLength: 10,
            title: 'Language.WeRecommend',
            patterns: {
                upperCase: upperCase,
                lowerCase: lowerCase,
                numbers: numbers,
                specials: specials
            }
        };

    function Plugin(element, options) {
        this.element = $(element);
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;

        this._create();
    }

    $.extend(Plugin.prototype, {
        _create: function () {
            var that = this;
            var passwordId = this.options.passwordId;
            $(document).on('click',function () {
                that.element.find(".pw-help").hide();
            });
            $(document).on('keyup',function (e) {
                if (passwordId && (that.options.checkPasswordLength || that.options.checkUpperLowerCase || that.options.checkNumber || that.options.checkSpecialChar)) {
                    if (e.target.id == passwordId) {
                        that.element.find(".pw-help").show();
                    } else {
                        that.element.find(".pw-help").hide();
                    }
                }
            });

            var options = this.options;

            //Note. Instead of this you can use templating. I did not want to have addition dependencies.
            this.element.addClass(options.strengthWrapperClass);

            if (this.options.passwordId !== '') {
                this.element.append('<input type="password" id="' + options.passwordId + '"/>');
            }

            var templateHtml = this._generateTemplate(options);
            var pwHelpHtml = '<div class="pw-help" style="display: none;">' + templateHtml + '</div>';


            this.element.append(pwHelpHtml);

            // Applies translations
            Cyberoam.setLabelValue();

            //this object contain all main inner elements which will be used in strength meter.
            this.content = {};

            this.content.$textInput = this.element.find('input[type="text"]');
            this.content.$passwordInput = this.element.find('input[type="password"]').first();
            this.content.$toggleButton = this.element.find('a');
            this.content.$pswdInfo = this.element.find('.pw-help');
            this.content.$strengthMeter = this.content.$pswdInfo.find("." + options.strengthMeterClass);
            this.content.$dataMeter = this.content.$strengthMeter.find("div");

            this._sync_inputs(this.content.$passwordInput, this.content.$textInput);
            this._sync_inputs(this.content.$textInput, this.content.$passwordInput);

            this._bind_input_events(this.content.$passwordInput);
            this._bind_input_events(this.content.$textInput);

            var that = this;
            this.content.$toggleButton.on("click", function (e) {
                e.preventDefault();

                that._toggle_input(that.content.$textInput);
                that._toggle_input(that.content.$passwordInput);

            });
        },
        //Toggle active inputs.
        _toggle_input: function ($element) {
            $element.toggle();

            if ($element.is(":visible")) {
                $element.focus();
            }
        },
        //Copy value from active input inside hidden.
        _sync_inputs: function ($s, $t) {
            $s.on('keyup', function () {
                var password = $s.val();
                $t.val(password);
            });
        },
        _bind_input_events: function ($s) {
            var that = this;
            var passwordLength = this.options.passwordLength;
            var patterns = this.options.patterns;
            $s.off('keyup');
            $s.on('keyup', function () {
                var password = $s.val();

                var characters = (password.length >= passwordLength);
                var capitalletters = password.match(patterns.upperCase) ? 1 : 0;
                var loweletters = password.match(patterns.lowerCase) ? 1 : 0;
                var number = password.match(patterns.numbers) ? 1 : 0;
                var specialChars = password.match(patterns.specials) ? 1 : 0;

                var total = characters + capitalletters + loweletters + number + specialChars;
                that._update_indicator(total);

                that._update_info('length', password.length >= passwordLength);
                that._update_info('capital', capitalletters);
                that._update_info('number', number);
                that._update_info('letter', loweletters);
                that._update_info('specials', specialChars);
            });
            $s.off('click');
            $s.on('click', function (e) {
                if(that.options.checkPasswordLength || that.options.checkUpperLowerCase || that.options.checkNumber || that.options.checkSpecialChar) {
                    that.element.find(".pw-help").show();
                    e.stopPropagation();
                }
            });

            $s.off('focus');
            $s.on('focus', function(e){
                that._showPasswordGuide(that.element, that.options);
                e.stopPropagation();
            });

            $s.off('blur');
            $s.on('blur', function(e){
                that._hidePasswordGuide(that.element, that.options);
                e.stopPropagation();
            });

        },
        _update_indicator: function (total) {
            // var meter = this.content.$dataMeter;
            meter = this.element.find('.'+this.options.strengthMeterClass+' div');
            meter.removeClass();
            if (total === 0) {
                meter.html('');
            } else if (total === 5) {
                meter.addClass('strong').html(' ');
            } else if (total === 1) {
                meter.addClass('veryweak').html(' ');
            } else if (total === 2) {
                meter.addClass('veryweak').html(' ');
            } else if (total === 3) {
                meter.addClass('weak').html(' ');
            } else if (total === 4) {
                meter.addClass('medium').html(' ');
            }
        },
        _update_info: function (criterion, isValid) {
            var $passwordCriteria = this.element.find('li[data-criterion="' + criterion + '"]');

            if (typeof $passwordCriteria !== 'undefined') {
                if (isValid) {
                    $passwordCriteria.removeClass('fa-times-circle red').addClass('fa-check-circle green');
                } else {
                    $passwordCriteria.removeClass('fa-check-circle green').addClass('fa-times-circle red');
                }
            }
        },
        _update: function () {
            var templateHtml = this._generateTemplate(this.options);
            var inputElement = this.element.find('input[type="password"]').first();
            var textElement = this.element.find('input[type="text"]');
            this.element.find('.pw-help').empty();
            this.element.find('.pw-help').append(templateHtml);
            try {
                Cyberoam.setLabelValue();
                this._bind_input_events(inputElement);
                this._bind_input_events(textElement);
            } catch (e) {
                // console.log('error', e);
            }
        },
        _generateTemplate: function (options) {
            var templateHtml = '<div class="arrow-left"></div> \
    		<div class="arrow-border2"></div> \
            <h4><label id="'+ options.title + '"></label></h4> \
            <ul>';
            if (options.checkPasswordLength) {
                templateHtml += '<li data-criterion="length" class="fa fa-times-circle red">&nbsp;<label id="Language.Atleast "></label>&nbsp;<strong><label id="Language.passwordLength' + options.passwordLength + '"></label></strong></li>'
            }
            if (options.checkUpperLowerCase) {
                templateHtml += '<li data-criterion="capital" class="fa fa-times-circle red">&nbsp;<label id="Language.Atleast "></label>&nbsp;<strong><label id="Language.UppercaseLetters "></label></strong></li>';
                templateHtml += '<li data-criterion="letter" class="fa fa-times-circle red">&nbsp;<label id="Language.Atleast "></label>&nbsp;<strong><label id="Language.LowercaseLetters "></label></strong></li>';
            }
            if (options.checkNumber) {
                templateHtml += '<li data-criterion="number" class="fa fa-times-circle red">&nbsp;<label id="Language.Atleast "></label>&nbsp;<strong><label id="Language.NumericValue "></label></strong></li>';
            }
            if (options.checkSpecialChar) {
                templateHtml += '<li data-criterion="specials" class="fa fa-times-circle red">&nbsp;<label id="Language.Atleast "></label>&nbsp;<strong><label id="Language.SpecialCharacter"></label></strong></li>';
            }
            templateHtml += '</ul>';

            if (options.showStrength) {
                templateHtml += '<br>\
                                <h6><label id="Language.PasswordStrength "></label></h6>\
                                <div class="' + options.strengthMeterClass + '">\
                                    <div></div>\
                                </div>';
            }
            // templateHtml += '</div>';

            return templateHtml;
        },
        _showPasswordGuide: function(elm, options) {
            if(options.checkPasswordLength || options.checkUpperLowerCase || options.checkNumber || options.checkSpecialChar) {
                elm.find(".pw-help").show();
            }
        },
        _hidePasswordGuide: function(elm) {
            elm.find(".pw-help").hide();
        },
        setOptions: function (options) {
            var that = this;
            options = options || {};
            $.each(options, function (oKey, oVal) {
                that.options[oKey] = oVal;
            });
            this._update();
        },
        reattach: function() {
            this._create();
        }
    });

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                    new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);

