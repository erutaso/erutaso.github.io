/*!	
* Lettering.JS 0.6.1
*
* Copyright 2010, Dave Rupert http://daverupert.com
* Released under the WTFPL license 
* http://sam.zoy.org/wtfpl/
*
* Thanks to Paul Irish - http://paulirish.com - for the feedback.
*
* Date: Mon Sep 20 17:14:00 2010 -0600
*/
!function(e){function t(t,n,r,i){var o=t.text().split(n),a="";o.length&&(e(o).each(function(e,t){a+='<span class="'+r+(e+1)+'">'+t+"</span>"+i}),t.empty().append(a))}var n={init:function(){return this.each(function(){t(e(this),"","char","")})},words:function(){return this.each(function(){t(e(this)," ","word"," ")})},lines:function(){return this.each(function(){var n="eefec303079ad17405c889e092e105b0";t(e(this).children("br").replaceWith(n).end(),n,"line","")})}};e.fn.lettering=function(t){return t&&n[t]?n[t].apply(this,[].slice.call(arguments,1)):"letters"!==t&&t?(e.error("Method "+t+" does not exist on jQuery.lettering"),this):n.init.apply(this,[].slice.call(arguments,0))}}(jQuery);