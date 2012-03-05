(function() {
  var $;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  $ = jQuery;
  $.fn.fitText = function(compressor, options) {
    var settings;
    if (compressor == null) {
      compressor = 1;
    }
    settings = {
      'minFontSize': Number.NEGATIVE_INFINITY,
      'maxFontSize': Number.POSITIVE_INFINITY
    };
    if (options) {
      $.extend(settings, options);
    }
    return this.each(function() {
      var resizer;
      resizer = __bind(function() {
        return $(this).css('font-size', Math.max(Math.min($(this).width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
      }, this);
      resizer();
      return $(window).resize(resizer);
    });
  };
}).call(this);
