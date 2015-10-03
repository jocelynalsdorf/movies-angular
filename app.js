var app = angular.module("movieApp", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('movies', {
    url: "/movies",
    templateUrl: "partials/movies.html",
    controller: "moviesCtrl"
  });

  $stateProvider.state('movies.reviews', {
    url: "/:movieId",
    templateUrl: "partials/movies.reviews.html",
    controller: "reviewsCtrl"
  });

});