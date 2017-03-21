var app1 = angular.module("myApp");
app1.controller("loginController",function($scope){
	$scope.tan=function(){
		alert("登录成功");
	}
});
