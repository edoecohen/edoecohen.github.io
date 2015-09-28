(function () {

  angular
    .module('app.projects')
    .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['SiteData'];

  function ProjectsCtrl(SiteData) {

    var vm = this;
    vm.projects = SiteData.projects;

  };

}());
