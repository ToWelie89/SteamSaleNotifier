app.controller('mainController', ['$scope', '$log', 'steamService', function($scope, log, steamService) {
	$scope.fullGameList;

    function init() {
        var promise = steamService.getFullSteamGameList();

        var successCallback = function(response) {
            log.debug('The stuff: ', response.data);
            $scope.fullGameList = response.data;
        };

        var errorCallback = function() {
            log.error(':(');
        };

        return promise.then(successCallback, errorCallback);
    }

    init();
}]);