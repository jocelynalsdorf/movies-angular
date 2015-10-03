app.directive("hometext", function(){
  return {
    template: "Back To The Start"
  }
});

app.directive("changeClass", function(){
  return function(scope, element, attrs) {
    element.bind("click", function(){
      element.toggleClass(attrs.changeClass);
    });
  }
});

app.directive("movieSearch", function($http){ 
//create a return object literal  
  return function(scope, element){
    element.bind("click", function(){
      $http.get("http://omdbapi.com?t=" + encodeURIComponent(scope.movie.title))
      .success(function(movieData){
        scope.showMovieDetails = true;
        scope.movieData = movieData;
        console.log(movieData);
        console.log(scope.showMovieDetails);
      })
      .error(function(){
        alert("there was an error");
      });

    })
  }
});

