app.controller("MoviesCtrl", function MoviesCtrl($scope, $http, MoviesFactory){
  $scope.movies = MoviesFactory.movies;
  $scope.MoviesFactory = MoviesFactory;

});