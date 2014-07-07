var Tabify = (function() {

  var Constructor = function($ele, _options) {

    var defaults = {
      active_class: 'active'
    };

    this.options = $.extend(defaults, _options);
    this.$ele = $ele;

    // Events
    $ele.on('click', 'a', $.proxy(this.switchTab, this));

  };

  Constructor.prototype = {

    switchTab: function(event) {
      event.preventDefault();

      var $button = $(event.target),
          $li     = $button.parent(),
          $target = $($button.attr('href'));

      this.flip($li);
      this.flip($target);
    },

    flip: function($ele) {
      this.show($ele);
      this.hide($ele.siblings());
    },

    show: function($ele) {
      $ele.addClass(this.options.active_class);
    },

    hide: function($ele) {
      $ele.removeClass(this.options.active_class);
    }

  };

  return Constructor;

})();
