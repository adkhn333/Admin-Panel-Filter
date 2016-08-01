app
.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('filters', {
            url: '/filters',
            views: {
                'main-view': {
                    templateUrl: 'templates/filters.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('project-status', {
            // url: '/project-status',
            views: {
                'main-view': {
                    templateUrl: 'templates/project-status.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('cost', {
            // url: '/cost',
            views: {
                'main-view': {
                    templateUrl: 'templates/cost.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('others', {
            // url: '/others',
            views: {
                'main-view': {
                    templateUrl: 'templates/others.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('configuration', {
            // url: '/configuration',
            views: {
                'main-view': {
                    templateUrl: 'templates/configuration.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('nearby', {
            // url: '/nearby',
            views: {
                'main-view': {
                    templateUrl: 'templates/nearby.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('rating', {
            // url: '/rating',
            views: {
                'main-view': {
                    templateUrl: 'templates/rating.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('top', {
            // url: '/top',
            views: {
                'main-view': {
                    templateUrl: 'templates/top.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('location', {
            // url: '/location',
            views: {
                'main-view': {
                    templateUrl: 'templates/location.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('security', {
            // url: '/security',
            views: {
                'main-view': {
                    templateUrl: 'templates/security.html', 
                    controller: 'filterCtrl'
                }
            }
        })
        .state('amenities', {
            // url: '/amenities',
            views: {
                'main-view': {
                    templateUrl: 'templates/amenities.html', 
                    controller: 'filterCtrl'
                }
            }
        })  
        .state('sport-activities', {
            // url: '/sport-activities',
            views: {
                'main-view': {
                    templateUrl: 'templates/sport-activities.html', 
                    controller: 'filterCtrl'
                }
            }
        })        
        ;
    // $urlRouterProvider.otherwise('/filters');
})
;