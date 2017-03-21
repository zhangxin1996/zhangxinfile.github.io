var app1 = angular.module("myApp");
app1.service("myService",function($http,$q){
	this.photo = function(){
		var defer = $q.defer();
		var myPromise = defer.promise;
		$http({
			method:"GET",
			url:"data/guest.json"
		}).success(
			function(data){
				defer.resolve(data)
			}
		).error(
			function(error){
				defer.reject(error)
			}
		)
		return myPromise;
	}
})

app1.controller("guestController",function($scope,myService){
	myService.photo().then(
		function(data){
			$scope.tupian = data;
		},
		function(error){
			alert("错误");
		}
	)
});