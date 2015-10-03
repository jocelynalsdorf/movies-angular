var app = angular.module("movieApp", ['ui.router']);


app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
    url: "",
    views: {
      "header": {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
       "body": {
         templateUrl: "partials/home.html"
       },
    }
  });

  $stateProvider.state('movies', {
    url: "/movies",
     views: {
      "header": {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      "body": {
        templateUrl: "partials/movies.html",
        controller: "MoviesCtrl"
       },
    }
  });

  $stateProvider.state('movies.reviews', {
    url: "/:movieId",
    views: {
      "header": {
        templateUrl: "partials/header.html",
        controller: "HeadersCtrl"
      },
      "body": {
        templateUrl: "partials/movies.reviews.html",
        controller: "ReviewsCtrl"
       },
    }
  });

});