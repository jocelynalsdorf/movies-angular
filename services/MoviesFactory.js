app.factory("MoviesFactory", function(){
  //set up empty factory object
  var factory = {};
  //set up empty array to hold all the movies
  factory.movies = [];
  //make a function to push each movie into the array
  factory.addMovies = function() {
    factory.movies.push({title: factory.movieTitle, id: factory.movies.length + 1, reviews: []});
    factory.movieTitle = null;
  }
  //return the factory object literal 
  return factory;
});