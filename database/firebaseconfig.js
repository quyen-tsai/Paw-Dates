(function (window) {
  'use strict';
  var App = window.App || {};

  console.log('running firebaseconfig')

  const FirebaseConfig = {
    apiKey: "AIzaSyCcZrEJMWSF04lI8zq2RCtdQVjkD3w0c-I",
    authDomain: "paw-dates-784f8.firebaseapp.com",
    projectId: "paw-dates-784f8",
    storageBucket: "paw-dates-784f8.appspot.com",
    messagingSenderId: "1050578868589",
    appId: "1:1050578868589:web:e36aece34264daea69e264"
  };

  App.FirebaseConfig = FirebaseConfig
  firebase.initializeApp(FirebaseConfig);

  window.App = App

})(window);