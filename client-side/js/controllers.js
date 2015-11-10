riotApp.controller('formCtrl', function($scope, $http, $filter) {
    $scope.summoners = [];

    $scope.getSummoner = function(params) {
        var summonerName = $scope.riotApp.summoner;
        $http.get('https://euw.api.pvp.net/api/lol/euw/v1.4/summoner/by-name/'+summonerName+'?api_key=14e1bd66-44d7-4562-bc2e-dc8a06503731').then(function(response){
            summonerName = summonerName.toLowerCase();
            $scope.summoners.push({name: response.data[summonerName].name, summonerLevel: response.data[summonerName].summonerLevel});
        });
    }
});
