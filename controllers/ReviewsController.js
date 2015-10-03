app.controller("reviewsCtrl", function($scope, $stateParams, UtilitiesFactory, MoviesFactory){
  $scope.movie = MovieFactory.findById(MovieFactory.movies, $stateParams.movieId);

  $scope.addReview = function(){
    $scope.movie.reviews.push({content: $scope.reviewContent});
    $scope.reviewContent = null;
  }
});