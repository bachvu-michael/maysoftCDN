$(function () {

    // Only show submit button on proper email
    (function ($, window, document, undefined) {
        'use strict';
        var form = '#wf-form-Email-Form',
            className = 'email-active',
            submit = 'input[type="submit"]',
            email = 'input[type="email"]';
        // $(form).each(function () {
        //     var $form = $(this),
        //         $email = $form.find(email),
        //         $submit = $form.find(submit),
        //         val = '';
        //     $email.on('keyup.addClassWhenEmail', function () {
        //         val = $email.val();
        //         $submit.toggleClass(className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 12})?$/.test(val));
        //     });
        // });
        $(form).submit(function (evt) {
            evt.preventDefault();
            var $form = $(this),
            $email = $form.find(email),
            $submit = $form.find(submit),
            val = '';
            $email.on('keyup.addClassWhenEmail', function () {
                val = $email.val();
            $submit.toggleClass(className, val != '' && /^([\w-\.]+@([\w-]+\.)+[\w-]{2, 12})?$/.test(val));
        });
        });
    })(jQuery, window, document);
})
