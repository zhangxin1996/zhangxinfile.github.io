var app1 = angular.module("myApp", ['ui.router','ngSanitize']);

app1.controller("homeController", function($scope) {
//	$scope.go = function(url) {
//		
//		$location.path(url);
//	};
	$scope.weibu1=[
		{"one":"厦门店|上海店|北京店|太原店|长沙店|成都店|三亚店"},
		{"one":"米兰婚纱影楼地址：太原市迎泽区柳巷南路188号"},
		{"one":"版权所有：太原市米兰婚纱摄影"},
		{"one":"尊贵热线：0351-4061087"},
		{"one":"技术支持：e5e第5元素"},
		{"one":"晋公网安备：晋ICP备08102627号"}
	]
});


app1.config(["$stateProvider","$urlRouterProvider",function($stateProvider,$urlRouterProvider) {
	
	 $urlRouterProvider.otherwise("/main");
	 $urlRouterProvider.when("", "/PageTab");
	$stateProvider
	  .state("main", {
	  	url:"/main",
		templateUrl: "template/main.html",
		controller: "mainController"
	}).state("trip", {
		url:"/trip",
		templateUrl: "template/trip.html",
		controller: "tripController"
	}).state("trip.0", {
		url:"/0",
		templateUrl: "template/trip/bali.html",
		controller: "baliController"
	}).state("trip.1", {
		url:"/1",
		templateUrl: "template/trip/gulangyu.html",
		controller: "gulangyuController"
	}).state("trip.2", {
		url:"/2",
		templateUrl: "template/trip/jiuzhaigou.html",
		controller: "jiuzhaigouController"
	}).state("trip.3", {
		url:"/3",
		templateUrl: "template/trip/lijiang.html",
		controller: "lijiangController"
	}).state("trip.4", {
		url:"/4",
		templateUrl: "template/trip/phuket.html",
		controller: "phuketController"
	}).state("trip.5", {
		url:"/5",
		templateUrl: "template/trip/maldives.html",
		controller: "maldivesController"
	}).state("trip.6", {
		url:"/6",
		templateUrl: "template/trip/sanya.html",
		controller: "sanyaController"
	}).state("guest", {
		url:"/guest",
		templateUrl: "template/guest.html",
		controller:"guestController"
	}).state("brand", {
		url:"/brand",
		templateUrl: "template/brand.html",
		controller:"brandController"
	}).state("login", {
		url:"/login",
		templateUrl: "template/login.html",
		controller:"loginController"
	}).state("register", {
		url:"/register",
		templateUrl: "template/register.html",
		controller:"registerController"
	})
}]);