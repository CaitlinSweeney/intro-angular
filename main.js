console.log (angular)

angular.module('boots', [])

angular.module('boots')

       .controller('closet', [
        '$scope',
        closetCTRL
      ]);
    function closetCTRL($scope){
        $scope.greeting = "So...What's your style?"
        $scope.link = 'images/outfit-1.jpg';

          $scope.changeTop = function(){
            $scope.link = 'images/outfit-2.jpg';
            $scope.greeting = "What do you think of this?"
          }
        }

angular.module('boots')
    .controller('vogueCTRL', vogueCTRL)

      function vogueCTRL(){
        var vogue = this
        vogue.subGreeting = "You cannot be creative with people around you."
        vogue.myShoes = []
        vogue.myFavShoes = ''
        vogue.shoes = "stacked shoes"

        vogue.changePar = function(){
          vogue.subGreeting = "I wish I had invented blue jeans. They have expression, modesty, sex appeal, simplicity - all I hope for in my clothes."
          console.log("vogue")
        }
        vogue.addShoes = function(){
          console.log(SHOOOESS!!);
          vogue.myShoes.push(vogue.myFavShoes)
        }
    }
