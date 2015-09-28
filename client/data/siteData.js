(function () {

  angular
    .module('app')
    .factory('SiteData', SiteData);

  SiteData.$inject = [];

  function SiteData(){

    var service = { };

    service.about = "I am full-stack JavaScript engineer passionate about building well-designed products that improve people's lives and am well versed with all stages of development, from initial product ideation to deployment."

    service.projects = [
      {
        title:    'Journey',
        details:  'Journey is a web application that guides you to your dream job. It gives actionable insights on how to obtain a desired job by collecting, analyzing, and visualizing the career data of others.',
        stack:    ['Backbone', 'Node', 'MySQL'],
        link:     'http://letsjourney.herokuapp.com/',
        pic:      '../client/assets/pics/Journey_1.png'
      },
      {
        title:    'SoCap',
        details:  'SoCap is a social media stock market where you can buy shares of your favorite celebrities, politicians, and friends. Prices fluctuate in relation to the growth of Twitter followers a stock has.',
        stack:    ['Angular', 'Node', 'Mongo'],
        link:     'http://socap.herokuapp.com/signin.html',
        pic:      '../client/assets/pics/SoCap_3.png'
      },
      {
        title:    'Live',
        details:  "Live is a mobile app for concert reviews. Users can rate live shows they've attended, provide reviews and find the best live acts.",
        stack:    ['Ionic', 'Node', 'Postgres'],
        link:     'http://livereviews.herokuapp.com/#/',
        pic:      '../client/assets/pics/Live_1.png'
      },
      {
        title:    'Alike',
        details:  "Live is a mobile app for concert reviews. Users can rate live shows they've attended, provide reviews and find the best live acts.",
        stack:    ['jQuery', 'Masonry'],
        link:     'http://livereviews.herokuapp.com/#/',
        pic:      '../client/assets/pics/Live_1.png'
      },
      


    ];

    return service;
  }

}());

