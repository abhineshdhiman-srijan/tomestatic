/**
 * @file
 */

(function (Drupal) {
  "use strict";

  Drupal.behaviors.twitterMediaEntity = {
    attach: function (context) {
      function _init() {
        twttr.widgets.load((context && context.nodeType === 1) ? context : null);
      }

      // If the tweet is being embedded in a CKEditor's iFrame the widgets
      // library might not have been loaded yet.
      if (typeof twttr == 'undefined') {
        var script = document.createElement("script");
        script.src = '//platform.twitter.com/widgets.js';
        document.head.appendChild(script);
      }
      _init();
    }
  };

})(Drupal);
;
!function(k,m,v,i){"use strict";var y="slick",C="unslick",b=y+"--initialized",s="."+y,w=".slick__slider",z=".slick__arrow",_=".b-lazy[data-src]:not(.b-loaded)",x=".media__icon--close",P="is-playing",$="is-paused",A=m.blazy||{};function e(s){var n,e,a=k("> "+w,s).length?k("> "+w,s):k(s),l=k("> "+z,s),t=a.data(y)?k.extend({},v.slick,a.data(y)):k.extend({},v.slick),i=!("array"!==k.type(t.responsive)||!t.responsive.length)&&t.responsive,o=t.appendDots,d="blazy"===t.lazyLoad&&A,c=a.find(".media--player").length,r=a.hasClass(C);if(r||(t.appendDots=o===z?l:o||k(a)),i)for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&i[n].settings!==C&&(i[n].settings=k.extend({},v.slick,p(t),i[n].settings));function u(n){a.find(_).length&&((n=a.find(n?".slide:not(.slick-cloned) "+_:".slick-active "+_)).length||(n=a.find(".slick-cloned "+_)),n.length&&A.init&&A.init.load(n))}function f(){c&&h(),d&&u(!1)}function h(){a.removeClass($);var n=a.find("."+P);n.length&&n.removeClass(P).find(x).click()}function g(){a.addClass($).slick("slickPause")}function p(s){return r?{}:{slide:s.slide,lazyLoad:s.lazyLoad,dotsClass:s.dotsClass,rtl:s.rtl,prevArrow:k(".slick-prev",l),nextArrow:k(".slick-next",l),appendArrows:l,customPaging:function(n,e){var t=n.$slides.eq(e).find("[data-thumb]")||null,i='<img alt="'+m.t(t.find("img").attr("alt"))+'" src="'+t.data("thumb")+'">',i=t.length&&0<s.dotsClass.indexOf("thumbnail")?'<div class="slick-dots__thumbnail">'+i+"</div>":"",e=n.defaults.customPaging(n,e);return i?e.add(i):e}}}a.data(y,t),(t=a.data(y)).randomize&&!a.hasClass("slick-initiliazed")&&a.children().sort(function(){return.5-Math.random()}).each(function(){a.append(this)}),r||a.on("init.sl",function(n,e){o===z&&k(e.$dots).insertAfter(e.$prevArrow);e=a.find(".slick-cloned.slick-active "+_);d&&e.length&&A.init&&A.init.load(e)}),d?a.on("beforeChange.sl",function(){u(!0)}):(e=k(".media",a)).length&&(e.find("[data-src]").length||e.hasClass("b-bg"))&&e.closest(".slide__content").addClass("is-loading"),a.on("setPosition.sl",function(n,e){var t,i;e=(t=e).slideCount<=t.options.slidesToShow,i=e||!1===t.options.arrows,a.attr("id")===t.$slider.attr("id")&&(t.options.centerPadding&&"0"!==t.options.centerPadding||t.$list.css("padding",""),e&&(t.$slideTrack.width()<=t.$slider.width()||k(s).hasClass("slick--thumbnail"))&&t.$slideTrack.css({left:"",transform:""}),(t=a.find(".b-loaded ~ .b-loader")).length&&t.remove(),l.length&&k.each(["next","prev"],function(n,e){k(".slick-"+e,l)[i?"addClass":"removeClass"]("visually-hidden")}))}),a.slick(p(t)),a.parent().on("click.sl",".slick-down",function(n){n.preventDefault();n=k(this);k("html, body").stop().animate({scrollTop:k(n.data("target")).offset().top-(n.data("offset")||0)},800,"easeOutQuad"in k.easing&&t.easing?t.easing:"swing")}),t.mouseWheel&&a.on("mousewheel.sl",function(n,e){return n.preventDefault(),a.slick(e<0?"slickNext":"slickPrev")}),d||a.on("lazyLoaded lazyLoadError",function(n,e,t){var i;i=(t=k(i=t)).closest(".slide")||t.closest("."+C),t.parentsUntil(i).removeClass(function(n,e){return(e.match(/(\S+)loading/g)||[]).join(" ")})}),a.on("afterChange.sl",f),c&&(a.on("click.sl",x,h),a.on("click.sl",".media__icon--play",g)),r&&a.slick(C),k(s).addClass(b)}m.behaviors.slick={attach:function(n){i.context&&i.once.find?(n=i.context(n),i.once(e,y,s,n)):(n=(n=(n="length"in(n=n||document)?n[0]:n)instanceof HTMLDocument?n:document).querySelectorAll(s+":not(."+b+")")).length&&i.once(i.forEach(n,e))},detach:function(n,e,t){"unload"===t&&i.once.removeSafely&&(n=i.context(n),i.once.removeSafely(y,s,n))}}}(jQuery,Drupal,drupalSettings,dBlazy);
;
