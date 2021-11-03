(function (window) {
  'use strict';
  var FIREBASE_URL = 'http://pawdates-e3cba.firebaseapp.com'
  var RESERVATION_SELECTOR = '[data-reservations="reservationlist"]';


  var App = window.App;
  var Info = App.Info;
  var FireBaseDataStore = App.FireBaseDataStore;
  var ReservationList = App.ReservationList


  var remoteDS = new FireBaseDataStore(FIREBASE_URL);
  var myInfo = new Info('p1', remoteDS);
  window.myInfo = myInfo;
  var reservationList = new ReservationList(RESERVATION_SELECTOR)


  myInfo.printInfos(reservationList.addRow.bind(reservationList))


})(window);