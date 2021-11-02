(function (window) {
    'use strict';
    var App = window.App || {};

    function Info(infos, db) {
        this.infos = infos;
        this.db = db;
    }

    Info.prototype.create_user_info = function (information) {
        console.log('Adding infos for ' + information.emailAddress);
        return this.db.add(information.emailAddress, information);
    };

    // Truck.prototype.deliverOrder = function (customerId) {
    //     console.log('Delivering order for ' + customerId);
    //     return this.db.remove(customerId);
    // };

    Info.prototype.printInfos = function (printFn) {
        return this.db.getAll()
            .then(function (informations) {
                var user_info = Object.keys(informations);
                console.log('Info #' + this.infos);
                user_info.forEach(function (id) {
                    console.log(informations[id]);
                    if (printFn) {
                        printFn(informations[id]);
                    }

                }.bind(this));
            }.bind(this));

    };


    App.Info = Info;
    window.App = App;
})(window);