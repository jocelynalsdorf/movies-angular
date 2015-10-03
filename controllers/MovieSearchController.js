// app.controller("movieSearchCtrl", function($scope, $http, MoviesFactory, UtilitiesFactory){
//   // $scope.movie = movie;
//   $scope.showMovieDetails = false;
//   $scope.resetSearch = function() {
//     $scope.showMovieDetails = false;
//   }
//   $scope.hi = function(){
//     alert("hi");
//   }
//   $scope.loadMovie = function(){
    
//     $http.get("http://omdbapi.com?t=" + encodeURIComponent($scope.movie.title))
//     .success(function(movieData){
//       $scope.showMovieDetails = true;
//       $scope.movieData = movieData;
//     })
//     .error(function(){
//       alert("there was an error");
//     });
//   }

// });