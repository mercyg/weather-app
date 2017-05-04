var app = angular.module("myApp");
app.service("CityService", ["$http", function($http) {
    var self = this;
    var cities = {};
    var nextLocation;
    this.cityWeather = function(state) {
        var baseUrl = "http://crossorigin.me/http://api.openweathermap.org/data/2.5/weather?q=" + state + "&mode=json&appid=18a926c00a15bf7072316e88506a8add&units=imperial"
        return $http.get(baseUrl)
            .then(function(response) {
                cities.name = response.data.name;
                cities.weather = response.data.main.temp;
                cities.highLow = response.data.main.temp_min;
                cities.lowHigh = response.data.main.temp_max;
                return cities;
            })

    };


}])

app.controller("cityController", ["$scope", "CityService", "SharedService", function($scope, CityService, SharedService) {

    //    console.log(SharedService.savedData);

    CityService.cityWeather(SharedService.savedData)
        .then(function(cities) {
            console.log(cities)
            $scope.cities = cities;

        })
}])
