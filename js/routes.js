angular.module('kiarash')
	.config(function($routeProvider) {
		$routeProvider
        .when('/home', {
		templateUrl: 'page/home/index.html',
		controller: 'HomeController'
	  })
        .when('/service', {
		templateUrl: 'page/service/index.html',
		 controller: 'ServiceController'
		})
        .when('/lipomatic', {
		templateUrl: 'page/lipomatic/index.html',
		 controller: 'LipomaticController'
		})
        .when('/gallery', {
		templateUrl: 'page/gallery/index.html',
		 controller: 'GalleryController'
		})
        .when('/about', {
		templateUrl: 'page/about/index.html',
		 controller: 'AboutController'
		})

        .when('/faq', {
		templateUrl: 'page/faq/index.html',
		 controller: 'FaqController'
		})
        .when('/blog', {
		templateUrl: 'page/blog/index.html',
		 controller: 'BlogController'
		})
        .when('/blogdetail/:id', {
		templateUrl: 'page/blogdetail/index.html',
		 controller: 'BlogdetailController'
		})
        .when('/gallery/1', {
		templateUrl: 'page/gallerydetail/1.html',
		})
        .when('/gallery/2', {
		templateUrl: 'page/gallerydetail/2.html',
		})
        .when('/gallery/3', {
         templateUrl: 'page/gallerydetail/3.html',
		})
        .when('/gallery/4', {
		templateUrl: 'page/gallerydetail/4.html',
		})
		
		.when('/popupl/1', {
		templateUrl: 'page/popupl/1.html',
		})
		.when('/popupl/2', {
		templateUrl: 'page/popupl/2.html',
		})
		.when('/popupl/3', {
		templateUrl: 'page/popupl/3.html',
		})
		.when('/popupl/4', {
		templateUrl: 'page/popupl/4.html',
		})
		.when('/popupl/5', {
		templateUrl: 'page/popupl/5.html',
		})
		.when('/popupl/6', {
		templateUrl: 'page/popupl/6.html',
		})
		.when('/popupl/7', {
		templateUrl: 'page/popupl/7.html',
		})
		.when('/popupl/8', {
		templateUrl: 'page/popupl/8.html',
		})
        
        
		.otherwise({ redirectTo: '/home' });
});