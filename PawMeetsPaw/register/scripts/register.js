(function (window) {
  'use strict';

  var FORM_SELECTOR = '[data-register="form"]'
  var App = window.App || {};
  var FormHandler = App.FormHandler;
  
  var formHandler = new FormHandler(FORM_SELECTOR)
  formHandler.addSubmitHandler(function (user) {

    const auth = firebase.auth()
    console.log("USER: " + user['emailAddress'] + user[['password']]);
    auth.createUserWithEmailAndPassword(user['emailAddress'], user['password'])
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered: " + user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ": " + errorMessage);
      })
    return Promise.resolve();
});

  window.App = App;
})(window);