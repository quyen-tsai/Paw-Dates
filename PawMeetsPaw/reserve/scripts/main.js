(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-reservation="form"]';
    var FIREBASE_URL = 'http://pawdates-e3cba.firebaseapp.com'


    var App = window.App;
    var Info = App.Info;
    var FormHandler = App.FormHandler;
    var FireBaseDataStore = App.FireBaseDataStore;


    var remoteDS = new FireBaseDataStore(FIREBASE_URL);
    var myInfo = new Info('p1', remoteDS);
    window.myInfo = myInfo;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {

        return myInfo.create_user_info.call(myInfo, data)

    });
    console.log(formHandler);
})(window);