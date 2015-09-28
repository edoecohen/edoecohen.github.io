(function() {
    'use strict';

    angular
	    .module('app.projects', ['app.core'])

	    .config(['$stateProvider', function($stateProvider) {
	    	
	      $stateProvider
        .state('projects', {
          url: '/projects',
          views: {
          	'': {
      		    templateUrl: 'client/projects/projects.html',
      		    controller: 'ProjectsCtrl',
              controllerAs: 'vm'
          	}
          }
        });

	    }]);
})();
