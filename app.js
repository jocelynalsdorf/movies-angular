var app = angular.module("movieApp", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('movies', {
    url: "/movies",
    templateUrl: "partails/movies.html",
    controller: "moviesCtrl"
  });

});