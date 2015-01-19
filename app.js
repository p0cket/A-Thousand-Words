(function() {
  var app = angular.module('worth1000', []);

  app.controller('ContentController', function() {
    this.stories = postedStories;

    this.story = {};

    this.addComment = function(content) {
      console.log("executing add comment");
      $parent.stories.push(this.story);

      this.story = {};
    };
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
