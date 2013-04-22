/*jslint indent: 4 */

!function ($) {


    var motivate = function () {
        var quotes = [
            'Good Work! Just a little bit more',
            'Way to go!',
            'You deserve a coffee break',
            'Looking good!',
            'Come on, one more feature and you\'re done',
            'Don\'t worry, it is probably just local caching'
            ];

        var rand = Math.floor(Math.random() * quotes.length);
        $('#motivate').show().text(quotes[rand]);
       
        setTimeout(function () { 
            $('#motivate').hide();
        }, 30000);

        setTimeout(motivate, Math.floor(Math.random() * 600000) + 300000);
    }

    setTimeout(motivate, Math.floor(Math.random() * 60000) + 300000);

}(window.jQuery);