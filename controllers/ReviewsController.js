app.controller("ReviewsCtrl", function ReviewsCtrl($scope, $stateParams, UtilitiesFactory, MoviesFactory){
  $scope.movie = UtilitiesFactory.findById(MoviesFactory.movies, $stateParams.movieId);

  $scope.addReview = function(){
    $scope.movie.reviews.push({content: $scope.reviewContent});
    $scope.reviewContent = null;
  }
});