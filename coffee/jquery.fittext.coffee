$ = jQuery
$.fn.fitText = (compressor = 1, options) ->
  settings = {
    'minFontSize' : Number.NEGATIVE_INFINITY
    'maxFontSize' : Number.POSITIVE_INFINITY
  }
  
  if options
    $.extend(settings, options)
  
  return @each( () ->
    resizer = () =>
      $(@).css('font-size', Math.max(Math.min($(@).width() / (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)))
    
    resizer()
    $(window).resize(resizer)
  )
