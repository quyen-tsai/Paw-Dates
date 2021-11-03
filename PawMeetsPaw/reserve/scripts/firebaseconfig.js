(function (window) {

  'use strict';
  var App = window.App || {};
  var FirebaseConfig = {
    apiKey: "AIzaSyClPaMGTwOz3IO7j6SbuIh14iezT3OmdCs",
    authDomain: "pawdates-e3cba.firebaseapp.com",
    projectId: "pawdates-e3cba",
    storageBucket: "pawdates-e3cba.appspot.com",
    messagingSenderId: "739722395599",
    appId: "1:739722395599:web:46f4c7876c96b747735cba",
    measurementId: "G-QZLM9DJ4K1"
  };

  // Initialize Firebase
  App.FirebaseConfig = FirebaseConfig;
  firebase.initializeApp(App.FirebaseConfig);
  window.App = App;
})(window);