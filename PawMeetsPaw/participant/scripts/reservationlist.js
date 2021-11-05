(function (window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  class ReservationList {
    constructor(selector) {
      console.log('In ReservationList constructor...');

      if (!selector) { throw new Error('No selector provided'); }

      this.$element = $(selector);
      if (this.$element.length === 0) {
        throw new Error('Could not find element with selector: ' + selector);
      }
    }
    addRow(reservation) {
      var rowElement = new Row(reservation);
      this.$element.append(rowElement.$element);
    }
     
  }

  class Row {
    constructor(reservation) {
      console.log('In Row constructor...');

      var $div = $('<div></div>', {
        'data-reservation': 'reservation',
        'class': 'reservation'
        });

      var $label = $('<label></label>');

      var description = reservation.month + ' ' + reservation.day + ', ' + reservation.year + ': ';

      description += reservation.user + ' - ';
      description += reservation.pet_amount + ' ';
      description += reservation.pet_type;

      if (reservation.pet_amount > 1) {
        description += 's'
      }

      $label.append(description);
      $div.append($label);

      this.$element = $div;
    }
  }

  App.ReservationList = ReservationList;
  window.App = App;
 })(window);
 