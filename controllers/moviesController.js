app.controller("moviesCtrl", function($scope, MoviesFactory){
  $scope.movies = MoviesFactory.movies;
  $scope.MoviesFactory = MoviesFactory;
});