var app = angular.module("myApp", ['ngGeolocation', 'ngRoute'])

.config(function ($routeProvider) {
    $routeProvider.when('/', {
            controller: 'myCtrl',
            templateUrl: 'template/home/search.html'
        })
        .when('/city', {
            controller: 'cityController',
            templateUrl: 'template/city/city.html'
        })
})


app.service("SharedService", function(){
    var self = this; 
   var savedData = {}
   this.set = function(data){
       self.savedData = data;
   }
    this.get=function(){
        return savedData.data;
    }

})


