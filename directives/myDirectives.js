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