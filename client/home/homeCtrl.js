(function () {

  angular
    .module('app.home')
    .controller('HomeCtrl', HomeCtrl);

  HomeCtrl.$inject = ['SiteData'];

  function HomeCtrl(SiteData) {

    var vm = this;
    vm.about = SiteData.about;

    console.log('SiteData.about', SiteData.about);

  };

}());
