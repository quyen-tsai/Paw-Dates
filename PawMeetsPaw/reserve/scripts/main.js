(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-reservation="form"]';



    var App = window.App;
    var Info = App.Info;
    var DataStore = App.DataStore;
    var FormHandler = App.FormHandler;

    var myInfo = new Info('p1', new DataStore());
    window.myInfo = myInfo;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(myInfo.create_user_info.bind(myInfo));
    console.log(formHandler);
})(window);