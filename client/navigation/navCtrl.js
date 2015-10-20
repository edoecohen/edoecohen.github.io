(function () {

  angular
    .module('app')
    .controller('NavCtrl', NavCtrl);

  NavCtrl.$inject = ['$location', '$anchorScroll'];

  function NavCtrl($location, $anchorScroll) {

    var vm = this;

    vm.scrollTo = function(section) {
      console.log('scrollTo called', section);
      // set the location.hash to the id of
      // the element you wish to scroll to
      $location.hash(section);
      $anchorScroll.yOffset = 40;
      $anchorScroll();
    }

  };

}());
