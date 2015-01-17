/*
*JQuery Social Counter Plugin v1.0
*Example & Documenation: http://midnightprogrammer.net/post/Social-Counter-JQuery-Plugin-To-Get-Twitter-Facebook-And-Feed-Readers-Count.aspx
*Copyright © 2011-2012 Prashant Khandelwal
*/


(function ($) {
    $.fn.SocialCounter = function (options) {

        var defaults = {
            SocialSite: ' ',
            UName: ' ',
        };

        var options = $.extend(defaults, options);
        var selector = this;

        return this.each(function () {
            if (options.SocialSite == "Facebook") {
                var Facebookurl = 'https://api.facebook.com/method/fql.query?query=select like_count from link_stat where url="' + options.UName + '"&format=json&callback=?';
                $.getJSON(Facebookurl, function (LikeCount) {
                    $(selector).html(LikeCount[0].like_count);
                });

            }
        });
    };
})(jQuery);


