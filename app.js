(function() {
  var app = angular.module('worth1000', []);

  app.controller('ContentController', function() {
    this.stories = postedStories;
  });

  var postedStories = [{
    author: 'Gavriel Mayerhoff',
    message: "This is my favorite photograph"
  }, {
    author: 'Aryeh Strum',
    message: "I came down to this place thinking it would be the best..."
  }, {
    author: 'Alexa Petrelli',
    message: "Since when did they meet?"
  }, ];
})();
