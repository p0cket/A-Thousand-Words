(function() {
  var app = angular.module('worth1000', ["firebase"]);

  app.controller('ContentController', [ "$firebase",
    function( $firebase) {

    var ref = new Firebase("https://thousandwords.firebaseio.com/");

    // create an AngularFire reference to the data
    var sync = $firebase(ref);

    // download the data into a local object
    // $scope.data = sync.$asObject();

    // synchronize the object with a three-way data binding
    // click on `index.html` above to see it used in the DOM!
    // syncObject.$bindTo($scope, "data");

    this.stories = sync.$asArray();

    this.stories = [{
      author: 'Gavriel Mayerhoff',
      message: "This is my favorite photograph"
    }, {
      author: 'Aryeh Strum',
      message: "I came down to this place thinking it would be the best..."
    }, {
      author: 'Alexa Petrelli',
      message: "Since when did they meet?"
    }, ];

    this.story = {};

    this.addComment = function(content) {
      console.log("executing add comment", content);
      // this.stories.push(content);
      this.stories.$add({content: content})

      this.story = {};

    };
  }
  ]);

})();
