//layout configration block -- media edit block box height issue
jQuery(document).ajaxComplete(function(){
  jQuery(".ui-dialog  .ui-widget-content.ui-dialog-buttonpane.ui-helper-clearfix").siblings(".ui-dialog .ui-widget-content.ui-dialog-content").addClass("edit-ui-widget");
});
;
/**
 * @file
 */

(function ($) {

  'use strict';
  Drupal.behaviors.facebook_send = {
    attach: function (context, settings) {
      window.fbAsyncInit = function () {
        FB.init({
          appId: settings.social_media.application_id,
          xfbml: true,
          version: 'v2.7'
        });
      };
      (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    }
  };
})(jQuery);
;
