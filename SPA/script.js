var app = angular.module('myapp',['ngRoute']);

app.config(['$routeProvider',function($routeProvider)
{
  $routeProvider
  .when('/',{
      templateUrl : 'home.html',
      controller : 'mainController'
  })
  .when('/about',{
      templateUrl : 'about.html',
      controller : 'aboutController'
  })
  .when('/contact',{
      templateUrl : ' contact.html',
      controller : 'contactController'
  });
}]);

app.service('MyService',function (){
  this.sayHello = function(){
    return "Hello from service!";
  };
});
app.controller('mainController',function($scope,$http,MyService){
  $scope.message = "this is the angular page.";
    $scope.message1 = MyService.sayHello();
     $http.get("http://www.w3schools.com/angular/customers.php")
    .then(function (response) {$scope.names = response.data.records;});
});

app.controller('aboutController',function($scope,MyService){

  $scope.message = "About the Single Page Application.";
  $scope.message1 = MyService.sayHello();
});

app.controller('contactController',function($scope,MyService){

  $scope.message = "Contact routing page.";
  $scope.message1 = MyService.sayHello();
});