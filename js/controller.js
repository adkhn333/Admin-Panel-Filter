app
.controller('mainCtrl', function($scope, $mdSidenav) {
    $scope.toggleRight = function() {
        console.log('clickedd');
        $mdSidenav('right')
        .toggle()
        .then(function() {
            console.log('clicked');
        });
    }
})

.controller('filterCtrl', function($scope, $rootScope, $http, $state, $localStorage) {
    console.log($state.current.name.charAt(0).toUpperCase() + $state.current.name.slice(1));
    $rootScope.filterTitle = $state.current.name.charAt(0).toUpperCase() + $state.current.name.slice(1);
    // $rootScope.showHero = $location.path() === '/list' ? true: false;
    $scope.ratings = [1, 2, 3, 4, 5];
    $scope.ranges = [10, 20, 30, 40, 50];
    $scope.locations = [];
    $scope.loc = {};
    // Dummy City ID
    var cityID = 'key1';
    $scope.projectStatusValue = $localStorage.projectStatusValue;
    $scope.locValue = $localStorage.locValue;
    $scope.amenitiesValue = $localStorage.amenitiesValue;
    $scope.costValue = $localStorage.costValue;
    $scope.configurationValue = $localStorage.configurationValue;
    $scope.othersValue = $localStorage.othersValue;
    $scope.nearbyValue = $localStorage.nearbyValue;
    $scope.topValue = $localStorage.topValue;
    $scope.ratingValue = $localStorage.ratingValue;
    $scope.securityValue = $localStorage.securityValue;
    $scope.sportActivitiesValue = $localStorage.sportActivitiesValue;

    function sanitizeObject(obj) {
        if(obj === null || obj === undefined) {
            console.log(obj);
            delete obj;
        }
        for(var i in obj) {
            console.log(i);
            if(obj[i] === null || obj[i] === undefined) {
                delete obj[i];
            }
            else {
                sanitizeObject(obj[i]);
            }
        }
        return Object.getOwnPropertyNames(obj).length === 0 ? undefined : obj;
    }

    $scope.clearForm = function(name, objName) {
        console.log(name);
        $scope[name].$setPristine();
        $scope[name].$setUntouched();
        $scope[objName] = {};
    };

    $http.get('data/data.json').success(function(response) {
        // $scope.locations = angular.fromJson(response.location[cityID]);
        // Must Convert JSON Object into Array Else It Will Give Error When Applying Filters On ng-repeat
        $scope.locations = [];
        angular.forEach(angular.fromJson(response.location[cityID]), function(data) {
            $scope.locations.push(data);
        });
    });

    $scope.applyProjectStatusFilter = function(obj) {
        $localStorage.projectStatusValue = obj;

    };

    $scope.applyConfigurationFilter = function(obj) {
        console.log(obj);
        console.log(sanitizeObject(obj));
        $localStorage.configurationValue = obj;
    };

    $scope.applyCostFilter = function(obj) {
        $localStorage.costValue = obj;
    };

    $scope.applyOthersFilter = function(obj) {
        $localStorage.othersValue = obj;
    };
    
    $scope.applyNearbyFilter = function(obj) {
        $localStorage.nearbyValue = obj;
    };

    $scope.applyRatingFilter = function(obj) {
        $localStorage.ratingValue = obj;
    };

    $scope.applyTopFilter = function(obj) {
        $localStorage.topValue = obj;
    };

    $scope.applyLocationFilter = function(obj) {
        $localStorage.locValue = obj;
    };

    $scope.applySecurityFilter = function(obj) {
        $localStorage.securityValue = obj;
    };

    $scope.applyAmenitiesFilter = function(obj) {
        $localStorage.amenitiesValue = obj;
    };

    $scope.applySportActivitiesFilter = function(obj) {
        $localStorage.sportActivitiesValue = obj;
    };

})

;