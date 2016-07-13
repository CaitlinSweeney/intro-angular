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
            vogue.outLink = true

        vogue.subGreeting = "You cannot be creative with people around you."
        vogue.newText = "All I did my first year at Vogue was Xerox"


        vogue.changePar = function(){
          vogue.subGreeting = "I wish I had invented blue jeans. They have expression, modesty, sex appeal, simplicity - all I hope for in my clothes."
          console.log("vogue")
        }
        vogue.addEx = function(){
          vogue.newText = vogue.newText + " !";
        }

        vogue.doublecheck = function(){
          vogue.outLink = confirm('Do you want to navigate to this link?')
          if (!vogue.outLink) {
            event.preventDefault();
          }
        }
      }
angular.module('boots')
    .controller('elleCTRL', elleCTRL)

    function elleCTRL(){
      var elle = this
      elle.myShoes = []
      elle.myFavShoes = ''
      elle.shoes = "sandals"

      elle.addShoes = function(){
        elle.myShoes.push(elle.myFavShoes)
        console.log("I Love my High Heels!")
       }
    }

angular.module('boots')
    .controller('cosmoCTRL', cosmoCTRL)

      function cosmoCTRL(){
        var cosmo = this
        cosmo.width = '200px'
        cosmo.bgColor = '#ffb3b3'
        cosmo.height = '100px'
        cosmo.lightBox =false;
        cosmo.lightBoxText = "I think it's the responsibility of a designer to try to break rules and barriers."

        cosmo.showLightBox = function(){
            cosmo.lightBox = true;
            console.log('hey');
         }
        cosmo.closeLightBox = function(){
            cosmo.lightBox = false;
            console.log('now');
         }
       }
    
