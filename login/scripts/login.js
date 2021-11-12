(function (window) {
  'use strict';

  var FORM_SELECTOR = '[data-login="form"]'
  var App = window.App || {};
  var FormHandler = App.FormHandler;
  
  var formHandler = new FormHandler(FORM_SELECTOR)

  formHandler.addSubmitHandler(function (data) {

    const auth = firebase.auth()

    auth.signInWithEmailAndPassword(data['emailAddress'], data['password'])
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in: " + user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage);
      });
      return Promise.resolve();
});

  window.App = App;
})(window);