(function () {

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['SiteData', '$location', '$anchorScroll'];

  function HomeCtrl(SiteData, $location, $anchorScroll) {

    var vm = this;
    vm.data = SiteData;

  };

}());
