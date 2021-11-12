(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-payment-info="form"]';
  var FormHandler = App.FormHandler;

  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(function(data) {
    console.log(data);
    
    var $paymentModal = $('<div></div>', {
      'id': 'payment-modal',
      'class': 'modal'
    });

    var $h1 = $('<h1></h1>');
    var $label = $('<label></label>');

    var title = 'Thank you for your donation!'
    var message = 'Your donation will help keep PawMeetsPaw up and running!'

    $label.append(message);
    $h1.append(title)
    $paymentModal.append($h1)
    $paymentModal.append($label);

    $paymentModal.modal();
  });

  console.log(formHandler);
})(window);