(function () {
    'use strict';

<<<<<<< HEAD:public/app/energyInfo.controller.js
    angular.module('smartmeter')
        .controller('energyInfoController', energyInfoController);

    energyInfoController.$inject = [
        '$http',
        '$scope',
        'selectedDate.service'
    ];
=======
    angular
        .module('smartmeter.energyinfo', [])
        .controller('EnergyInfo', energyinfo, ['$http', '$scope', 'selecteddateservice']);
>>>>>>> master:public/app/energyinfo.js

    /* @ngInject */
    // Make Service instead of using directly with Controller
    function energyInfoController(
        $http,
        $scope,
        selecteddateservice) {

        var vm = this;

<<<<<<< HEAD:public/app/energyInfo.controller.js
        selecteddateservice.subscribe($scope, somethingChanged);

        function somethingChanged () {

            // Handle notification
            var dal = 0.17293, // T1 daltarief 181
                piek = 0.18743, // T2 piektarief 182
                gasCost = 0.63644; // per m3
=======
        selecteddateservice.subscribe($scope, function somethingChanged() {

            // Handle notification
            // var dal = 0.17293; // T1 daltarief 181 
            // var piek = 0.18743; // T2 piektarief 182
            // var gasCost = 0.63644 // per m3
>>>>>>> master:public/app/energyinfo.js

            vm.dailyTotals = [];
            vm.measurements = [];

            vm.date = selecteddateservice.getDate();
            vm.title = 'dailyTotals';

            console.log(vm.date);

            $http.get("http://192.168.1.100:3000/calculatedmeasurement/" + vm.date)
                .then(function (response) {
                    //First function handles success
                    vm.dailyTotals = response.data.consumption;
                }, function (response) {
                    console.log(response);
                    //Second function handles error
                    vm.dailyTotals = "something went wrong";
                });

            // 2016-05-08   => 10
            // 2016-05      => 7
            // 2016         => 4

            var date = vm.date.toString();

            $http.get("http://192.168.1.100:3000/measurements/" + vm.date)
                .then(function (response) {
                    //First function handles success
                    vm.measurements = response.data;
                }, function (response) {
                    console.log('Bad');
                    //Second function handles error
                    vm.measurements = "something went wrong";
                });
        }
    }

    function getTodayAsDate() {
        var dd, mm, today = new Date(), yyyy;

        dd = (today.getDate() < 10 ? '0' : '') + today.getDate();
        mm = (today.getMonth() + 1 < 10 ? '0' : '') + today.getMonth(); //January is 0!
        yyyy = today.getFullYear();


        return yyyy + '-' + mm + '-' + dd;

    }
})();
