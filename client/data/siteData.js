(function () {

  angular
    .module('app')
    .factory('SiteData', SiteData);

  SiteData.$inject = [];

  function SiteData(){

    var service = { };

    service.about = "I am full-stack JavaScript engineer passionate about building well-designed products that improve people's lives. I'm well versed with all stages of development, from initial product ideation to deployment."

    service.social = [
      {
        title: 'GitHub',
        link: 'https://github.com/edoecohen'
      },
      {
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/edoecohen'
      },
      {
        title: 'Twitter',
        link: 'https://twitter.com/edoecohen'
      },

    ]

    service.projects = [
      {
        title:    'Journey',
        details:  'Journey is a web application that guides you to your dream job. It gives actionable insights on how to obtain a desired job by collecting, analyzing, and visualizing the career data of others.',
        stack:    ['Backbone', 'Node', 'MySQL', 'D3'],
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
        stack:    ['Ionic', 'Node', 'Postgres', 'Spotify API'],
        link:     'http://livereviews.herokuapp.com/#/',
        pic:      '../client/assets/pics/placeit.jpg'
      },
      {
        title:    'Alike',
        details:  "Alike is a music, film and literature recommendation engine. Tell Alike your favorite film, musician or author and it will make suggestions of similar artworks and artists.",
        stack:    ['jQuery', 'Masonry', 'TasteKid API', 'Bing API'],
        link:     'http://edoecohen.github.io/alike/',
        pic:      '../client/assets/pics/Alike_2.png'
      },
      {
        title:    'Countries & Capitals',
        details:  "Website providing information about countries and their capitals around the world.",
        stack:    ['Angular', 'GeoNames API'],
        link:     'http://edoecohen.github.io/countries/',
        pic:      '../client/assets/pics/Countries.png'
      },
      {
        title:    'Portfolio',
        details:  "Small experiment using Masonry to showcase some of my recent work.",
        stack:    ['jQuery', 'Masonry'],
        link:     'http://edoecohen.github.io/portfolio/',
        pic:      '../client/assets/pics/Portfolio.png'
      },
      {
        title:    'InstaSearch',
        details:  "InstaSearch allows you to quickly search Instagram for the most recent images of a given keyword.",
        stack:    ['Angular', 'Instagram API'],
        link:     'http://edoecohen.github.io/instasearch/',
        pic:      '../client/assets/pics/Instasearch.png'
      },
      {
        title:    'Zionism 101',
        details:  "Colorful quiz testing the user's knowledge of Israel's historic leaders using the artwork of Amit Shimoni.",
        stack:    ['jQuery'],
        link:     'http://edoecohen.github.io/zionism-101/',
        pic:      '../client/assets/pics/Zionism.png'
      },
      {
        title:    'Shopping List',
        details:  "Will simply make you want to shop.",
        stack:    ['jQuery'],
        link:     'http://edoecohen.github.io/shopping-list/',
        pic:      '../client/assets/pics/Shopping.png'
      },


    ];

    return service;
  }

}());

